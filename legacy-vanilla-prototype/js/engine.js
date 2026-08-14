/*
 * Shared PixelCoders level engine.
 * A level module builds a config object and calls Kithspire.initLevel(config).
 * The engine owns: goals modal, dungeon rendering, code editor chrome,
 * the Run button, the whitelist parser/animator, feedback banner, hints panel,
 * and the GOALS status pill. Movement-specific behavior lives in config.
 */
(function (global) {
  const TILE_SIZE = 64;

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function initLevel(config) {
    const root = document.getElementById('app');
    root.innerHTML = '';

    const state = {
      hero: { ...config.start },
      running: false,
      goalsComplete: false,
    };

    // ---------- Header ----------
    const header = el('div', 'level-header');
    const titleWrap = el('div');
    titleWrap.appendChild(el('span', 'wing-label', config.wing));
    titleWrap.appendChild(el('h1', null, config.title));
    header.appendChild(titleWrap);
    const statusPill = el('div', 'status-pill', 'GOALS: INCOMPLETE');
    header.appendChild(statusPill);
    root.appendChild(header);

    // ---------- Main layout ----------
    const main = el('div', 'level-main');
    root.appendChild(main);

    // Dungeon pane
    const dungeonPane = el('div', 'dungeon-pane');
    const viewport = el('div', 'dungeon-viewport');
    viewport.style.gridTemplateColumns = `repeat(${config.grid.cols}, ${TILE_SIZE}px)`;
    viewport.style.gridTemplateRows = `repeat(${config.grid.rows}, ${TILE_SIZE}px)`;

    const hazardKey = (x, y) => `${x},${y}`;
    const hazardSet = new Set((config.hazards || []).map(h => hazardKey(h.x, h.y)));

    for (let y = 0; y < config.grid.rows; y++) {
      for (let x = 0; x < config.grid.cols; x++) {
        const tile = el('div', 'tile');
        if ((x + y) % 2 === 0) tile.classList.add('tile-checker');
        if (hazardSet.has(hazardKey(x, y))) tile.classList.add('hazard');
        if (x === config.target.x && y === config.target.y) tile.classList.add('target');
        viewport.appendChild(tile);
      }
    }

    const heroEl = el('div', 'hero', '🧙');
    viewport.appendChild(heroEl);
    dungeonPane.appendChild(viewport);

    const caption = el('div', 'dungeon-caption', 'Reach the gem to complete the level.');
    dungeonPane.appendChild(caption);

    const goalsPanel = el('div', 'goals-panel');
    goalsPanel.appendChild(el('h3', null, 'Goals'));
    const goalsList = el('ul', 'goals-list');
    config.goals.forEach(g => goalsList.appendChild(el('li', null, g)));
    goalsPanel.appendChild(goalsList);
    dungeonPane.appendChild(goalsPanel);

    main.appendChild(dungeonPane);

    // Editor pane
    const editorPane = el('div', 'editor-pane');
    const toolbar = el('div', 'editor-toolbar');
    toolbar.appendChild(el('span', 'editor-filename', config.filename || 'quest.js'));
    const runBtn = el('button', 'run-btn', 'Run ▶');
    toolbar.appendChild(runBtn);
    editorPane.appendChild(toolbar);

    const editorBody = el('div', 'editor-body');
    const gutter = el('div', 'editor-gutter');
    const textarea = el('textarea', 'code-input');
    textarea.spellcheck = false;
    textarea.value = config.starterCode;
    editorBody.appendChild(gutter);
    editorBody.appendChild(textarea);
    editorPane.appendChild(editorBody);

    function refreshGutter() {
      const lineCount = textarea.value.split('\n').length;
      let lines = '';
      for (let i = 1; i <= lineCount; i++) lines += i + '\n';
      gutter.textContent = lines.trim() === '' ? '1' : lines;
    }
    textarea.addEventListener('input', refreshGutter);
    textarea.addEventListener('scroll', () => {
      gutter.scrollTop = textarea.scrollTop;
    });
    refreshGutter();

    const feedback = el('div', 'feedback-banner');
    editorPane.appendChild(feedback);

    // Hints panel
    const hintsPanel = el('div', 'hints-panel');
    const hintsToggle = el('button', 'hints-toggle');
    hintsToggle.innerHTML = '<span>Hints</span><span>▾</span>';
    const hintsBody = el('div', 'hints-body');
    (config.hints || []).forEach(h => hintsBody.appendChild(el('code', null, h)));
    hintsToggle.addEventListener('click', () => hintsBody.classList.toggle('open'));
    hintsPanel.appendChild(hintsToggle);
    hintsPanel.appendChild(hintsBody);
    editorPane.appendChild(hintsPanel);

    main.appendChild(editorPane);

    // ---------- Goals modal ----------
    const overlay = el('div', 'modal-overlay');
    const card = el('div', 'modal-card');
    card.appendChild(el('span', 'wing-label', config.wing));
    card.appendChild(el('h2', null, config.title));
    const modalGoals = el('ul');
    config.goals.forEach(g => modalGoals.appendChild(el('li', null, g)));
    card.appendChild(modalGoals);
    const startBtn = el('button', 'start-btn', 'Start Level');
    card.appendChild(startBtn);
    overlay.appendChild(card);
    document.body.appendChild(overlay);
    startBtn.addEventListener('click', () => overlay.classList.add('hidden'));

    // ---------- Positioning ----------
    function placeHero(x, y, animated) {
      heroEl.style.transition = animated ? 'transform 0.35s ease' : 'none';
      const tx = x * TILE_SIZE;
      const ty = y * TILE_SIZE;
      heroEl.style.setProperty('--hx', tx + 'px');
      heroEl.style.setProperty('--hy', ty + 'px');
      heroEl.style.transform = `translate(${tx}px, ${ty}px)`;
    }
    placeHero(state.hero.x, state.hero.y, false);

    function setStatus(complete) {
      state.goalsComplete = complete;
      statusPill.textContent = complete ? 'GOALS: COMPLETE' : 'GOALS: INCOMPLETE';
      statusPill.classList.toggle('complete', complete);
      goalsList.querySelectorAll('li').forEach(li => li.classList.toggle('done', complete));
    }

    function showFeedback(kind, title, body) {
      feedback.className = `feedback-banner show ${kind}`;
      feedback.innerHTML = '';
      feedback.appendChild(el('span', 'banner-title', title));
      feedback.appendChild(el('span', null, body));
      if (kind === 'success' && config.badge) {
        const toast = el('div', 'badge-toast', `🏅 Badge earned: ${config.badge}`);
        feedback.appendChild(toast);
      }
    }

    function clearFeedback() {
      feedback.className = 'feedback-banner';
      feedback.innerHTML = '';
    }

    // ---------- Parser ----------
    function parseCode(code) {
      const lines = code.split('\n');
      const moves = [];
      for (let i = 0; i < lines.length; i++) {
        const raw = lines[i];
        const trimmed = raw.trim();
        if (trimmed === '' || trimmed.startsWith('//')) continue;
        const match = config.commands.find(c => c.pattern.test(trimmed));
        if (!match) {
          return { error: true, lineNumber: i + 1, lineText: raw };
        }
        moves.push({ dx: match.dx, dy: match.dy, lineNumber: i + 1 });
      }
      return { error: false, moves };
    }

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function runMoves(moves) {
      let pos = { ...config.start };
      placeHero(pos.x, pos.y, false);
      await sleep(150);

      for (const move of moves) {
        const next = { x: pos.x + move.dx, y: pos.y + move.dy };

        if (next.x < 0 || next.x >= config.grid.cols || next.y < 0 || next.y >= config.grid.rows) {
          heroEl.classList.add('hero-fail');
          showFeedback('fail', 'Try again', `Line ${move.lineNumber}: the hero walked into the dungeon wall.`);
          return;
        }

        if (hazardSet.has(hazardKey(next.x, next.y))) {
          placeHero(next.x, next.y, true);
          await sleep(360);
          heroEl.classList.add('hero-fail');
          showFeedback('fail', 'Try again', `Line ${move.lineNumber}: the hero stepped on the spikes!`);
          return;
        }

        pos = next;
        placeHero(pos.x, pos.y, true);
        await sleep(380);
      }

      if (pos.x === config.target.x && pos.y === config.target.y) {
        setStatus(true);
        showFeedback('success', 'Level complete!', config.successMessage || 'The hero reached the gem.');
      } else {
        showFeedback('fail', 'Try again', "The hero ran out of moves before reaching the gem.");
      }
    }

    runBtn.addEventListener('click', async () => {
      if (state.running) return;
      clearFeedback();
      heroEl.classList.remove('hero-fail');
      setStatus(false);

      const result = parseCode(textarea.value);
      if (result.error) {
        const shown = result.lineText.trim() === '' ? '(empty line)' : result.lineText.trim();
        showFeedback('fail', 'Try again', `Line ${result.lineNumber}: "${shown}" isn't a command the hero knows yet. Check the hints panel.`);
        return;
      }

      state.running = true;
      runBtn.disabled = true;
      await runMoves(result.moves);
      state.running = false;
      runBtn.disabled = false;
    });
  }

  global.Kithspire = { initLevel };
})(window);
