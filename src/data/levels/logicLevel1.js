// Bug Hunt: a short read-only snippet per round with exactly one broken
// line. Rounds escalate by making the broken line look more and more like
// its neighbors (early rounds: an unrelated tag typo; later rounds: a
// one-letter attribute-name typo buried in near-identical lines).
export const BUG_HUNT_ROUNDS = [
  {
    filename: 'card.html',
    buggyIndex: 3,
    lines: {
      ru: ['<div class="card">', '  <h2>Заголовок</h2>', '  <p>Текст карточки</p>', '  <p>Ещё текст<p>', '</div>'],
      uz: ['<div class="card">', '  <h2>Sarlavha</h2>', '  <p>Kartochka matni</p>', '  <p>Yana matn<p>', '</div>'],
    },
  },
  {
    filename: 'card.css',
    buggyIndex: 3,
    lines: {
      ru: ['.card {', '  color: #222;', '  background-color: #fff;', '  border-radius: 8px', '  padding: 12px;', '}'],
      uz: ['.card {', '  color: #222;', '  background-color: #fff;', '  border-radius: 8px', '  padding: 12px;', '}'],
    },
  },
  {
    filename: 'nav.html',
    buggyIndex: 2,
    lines: {
      ru: [
        '<a href="/home" class="nav-link">Главная</a>',
        '<a href="/about" class="nav-link">О нас</a>',
        '<a hraf="/contact" class="nav-link">Контакты</a>',
        '<a href="/blog" class="nav-link">Блог</a>',
      ],
      uz: [
        '<a href="/home" class="nav-link">Bosh sahifa</a>',
        '<a href="/about" class="nav-link">Biz haqimizda</a>',
        '<a hraf="/contact" class="nav-link">Aloqa</a>',
        '<a href="/blog" class="nav-link">Blog</a>',
      ],
    },
  },
  {
    filename: 'list.html',
    buggyIndex: 4,
    lines: {
      ru: ['<ul>', '  <li>Молоко</li>', '  <li>Хлеб</li>', '  <li>Сыр</li>', '</ol>'],
      uz: ['<ul>', '  <li>Sut</li>', '  <li>Non</li>', '  <li>Pishloq</li>', '</ol>'],
    },
  },
  {
    filename: 'button.css',
    buggyIndex: 2,
    lines: {
      ru: ['.btn {', '  padding: 10px 20px;', '  border-radius 6px;', '  color: white;', '}'],
      uz: ['.btn {', '  padding: 10px 20px;', '  border-radius 6px;', '  color: white;', '}'],
    },
  },
  {
    filename: 'photo.html',
    buggyIndex: 1,
    lines: {
      ru: ['<figure>', '  <imag src="cat.jpg" alt="Кошка">', '  <figcaption>Котёнок</figcaption>', '</figure>'],
      uz: ['<figure>', '  <imag src="cat.jpg" alt="Mushuk">', '  <figcaption>Mushukcha</figcaption>', '</figure>'],
    },
  },
  {
    filename: 'menu.html',
    buggyIndex: 1,
    lines: {
      ru: ['<nav>', '  <a href="/home>Главная</a>', '  <a href="/contact">Контакты</a>', '</nav>'],
      uz: ['<nav>', '  <a href="/home>Bosh sahifa</a>', '  <a href="/contact">Aloqa</a>', '</nav>'],
    },
  },
  {
    filename: 'input.css',
    buggyIndex: 1,
    lines: {
      ru: ['.input {', '  boder: 1px solid #ccc;', '  padding: 8px;', '  border-radius: 4px;', '}'],
      uz: ['.input {', '  boder: 1px solid #ccc;', '  padding: 8px;', '  border-radius: 4px;', '}'],
    },
  },
  {
    filename: 'table.html',
    buggyIndex: 4,
    lines: {
      ru: ['<table>', '  <tr>', '    <td>Имя</td>', '    <td>Возраст</td>', '  <tr>', '</table>'],
      uz: ['<table>', '  <tr>', '    <td>Ism</td>', '    <td>Yosh</td>', '  <tr>', '</table>'],
    },
  },
  {
    filename: 'contact.html',
    buggyIndex: 1,
    lines: {
      ru: ['<footer>', '  <p>Почта: <strong>info@site.uz</p></strong>', '</footer>'],
      uz: ['<footer>', '  <p>Pochta: <strong>info@site.uz</p></strong>', '</footer>'],
    },
  },
  {
    filename: 'hero.css',
    buggyIndex: 1,
    lines: {
      ru: ['.hero {', '  background: #ffcc0;', '  color: #222;', '}'],
      uz: ['.hero {', '  background: #ffcc0;', '  color: #222;', '}'],
    },
  },
  {
    filename: 'badge.html',
    buggyIndex: 1,
    lines: {
      ru: ['<div class="card">', '  <span class="badge\'>Новый</span>', '</div>'],
      uz: ['<div class="card">', '  <span class="badge\'>Yangi</span>', '</div>'],
    },
  },
  {
    filename: 'panel.css',
    buggyIndex: 0,
    lines: {
      ru: ['.panel', '  padding: 16px;', '  background: #fff;', '}'],
      uz: ['.panel', '  padding: 16px;', '  background: #fff;', '}'],
    },
  },
  {
    filename: 'section.html',
    buggyIndex: 0,
    lines: {
      ru: ['<section class="intro"', '  <h2>Добро пожаловать</h2>', '</section>'],
      uz: ['<section class="intro"', '  <h2>Xush kelibsiz</h2>', '</section>'],
    },
  },
  {
    filename: 'profile.css',
    buggyIndex: 1,
    lines: {
      ru: ['.avatar {', '  width: 20xp;', '  height: 20px;', '  border-radius: 50%;', '}'],
      uz: ['.avatar {', '  width: 20xp;', '  height: 20px;', '  border-radius: 50%;', '}'],
    },
  },
  {
    filename: 'gallery.html',
    buggyIndex: 1,
    lines: {
      ru: ['<div class="gallery">', '  <butotn>Ещё фото</butotn>', '</div>'],
      uz: ['<div class="gallery">', '  <butotn>Yana rasm</butotn>', '</div>'],
    },
  },
  {
    filename: 'login.html',
    buggyIndex: 1,
    lines: {
      ru: ['<label for="email">Почта</label>', '<input id="emial" type="email">'],
      uz: ['<label for="email">Pochta</label>', '<input id="emial" type="email">'],
    },
  },
  {
    filename: 'sidebar.css',
    buggyIndex: 1,
    lines: {
      ru: ['.sidebar {', '  font-size; 16px;', '  color: #333;', '}'],
      uz: ['.sidebar {', '  font-size; 16px;', '  color: #333;', '}'],
    },
  },
  {
    filename: 'article.html',
    buggyIndex: 0,
    lines: {
      ru: ['<!DOCTYPE htm>', '<html>', '  <body></body>', '</html>'],
      uz: ['<!DOCTYPE htm>', '<html>', '  <body></body>', '</html>'],
    },
  },
  {
    filename: 'dropdown.css',
    buggyIndex: 0,
    lines: {
      ru: ['.menu-item:hoverr {', '  color: teal;', '}'],
      uz: ['.menu-item:hoverr {', '  color: teal;', '}'],
    },
  },
  {
    filename: 'checkout.html',
    buggyIndex: 1,
    lines: {
      ru: ['<form>', '  <input placeholder="Имя>', '</form>'],
      uz: ['<form>', '  <input placeholder="Ism>', '</form>'],
    },
  },
  {
    filename: 'price.css',
    buggyIndex: 1,
    lines: {
      ru: ['.price {', '  background: rgba(255, 0, 0, 0.5;', '  color: white;', '}'],
      uz: ['.price {', '  background: rgba(255, 0, 0, 0.5;', '  color: white;', '}'],
    },
  },
  {
    filename: 'header.html',
    buggyIndex: 1,
    lines: {
      ru: ['<header>', '  <h1>Заголовок</header></h1>'],
      uz: ['<header>', '  <h1>Sarlavha</header></h1>'],
    },
  },
  {
    filename: 'tag.css',
    buggyIndex: 0,
    lines: {
      ru: ['.tag (', '  padding: 4px 8px;', '  border-radius: 999px;', '}'],
      uz: ['.tag (', '  padding: 4px 8px;', '  border-radius: 999px;', '}'],
    },
  },
  {
    filename: 'footer2.html',
    buggyIndex: 2,
    lines: {
      ru: ['<style>', '  .footer { color: gray; }', '</script>'],
      uz: ['<style>', '  .footer { color: gray; }', '</script>'],
    },
  },
  {
    filename: 'banner.css',
    buggyIndex: 1,
    lines: {
      ru: ['.banner {', '  displey: flex;', '  gap: 12px;', '}'],
      uz: ['.banner {', '  displey: flex;', '  gap: 12px;', '}'],
    },
  },
  {
    filename: 'list2.html',
    buggyIndex: 1,
    lines: {
      ru: ['<section>', '  <p>Добро пожаловать на сайт', '</section>'],
      uz: ['<section>', '  <p>Saytga xush kelibsiz', '</section>'],
    },
  },
  {
    filename: 'layout.css',
    buggyIndex: 1,
    lines: {
      ru: ['.layout {', '  text-align: cente;', '  padding: 20px;', '}'],
      uz: ['.layout {', '  text-align: cente;', '  padding: 20px;', '}'],
    },
  },
  {
    filename: 'team.html',
    buggyIndex: 1,
    lines: {
      ru: ['<div id="title">Команда</div>', '<div id="title">Наши люди</div>'],
      uz: ['<div id="title">Jamoa</div>', '<div id="title">Bizning odamlar</div>'],
    },
  },
  {
    filename: 'counter.css',
    buggyIndex: 1,
    lines: {
      ru: ['.counter {', '  width: 200;', '  height: 40px;', '  background: teal;', '}'],
      uz: ['.counter {', '  width: 200;', '  height: 40px;', '  background: teal;', '}'],
    },
  },
  {
    filename: 'modal.html',
    buggyIndex: 3,
    lines: {
      ru: ['<div class="modal">', '  <h3>Подтверждение</h3>', '  <button>ОК</button>', '</section>'],
      uz: ['<div class="modal">', '  <h3>Tasdiqlash</h3>', '  <button>OK</button>', '</section>'],
    },
  },
  {
    filename: 'summary.css',
    buggyIndex: 1,
    lines: {
      ru: ['.summary {', '  fnt-weight: bold;', '  font-size: 14px;', '}'],
      uz: ['.summary {', '  fnt-weight: bold;', '  font-size: 14px;', '}'],
    },
  },
  {
    filename: 'tabs.html',
    buggyIndex: 1,
    lines: {
      ru: ['<div class="tabs">', '  <button data-tab=Главная страница>Вкладка</button>', '</div>'],
      uz: ['<div class="tabs">', '  <button data-tab=Bosh sahifa>Bo‘lim</button>', '</div>'],
    },
  },
  {
    filename: 'rounded.css',
    buggyIndex: 1,
    lines: {
      ru: ['.avatar {', '  border-radius: 50;', '  width: 60px;', '  height: 60px;', '}'],
      uz: ['.avatar {', '  border-radius: 50;', '  width: 60px;', '  height: 60px;', '}'],
    },
  },
  {
    filename: 'options.html',
    buggyIndex: 1,
    lines: {
      ru: ['<select>', '  <option value="a">Вариант A<option>', '  <option value="b">Вариант B</option>', '</select>'],
      uz: ['<select>', '  <option value="a">A varianti<option>', '  <option value="b">B varianti</option>', '</select>'],
    },
  },
  {
    filename: 'comment.css',
    buggyIndex: 1,
    lines: {
      ru: ['.box {', '  /* это стиль карточки', '  color: teal;', '}'],
      uz: ['.box {', '  /* bu karta stili', '  color: teal;', '}'],
    },
  },
  {
    filename: 'quote2.html',
    buggyIndex: 1,
    lines: {
      ru: ['<head>', '  <meta charset=UTF-8">', '</head>'],
      uz: ['<head>', '  <meta charset=UTF-8">', '</head>'],
    },
  },
  {
    filename: 'important.css',
    buggyIndex: 1,
    lines: {
      ru: ['.alert {', '  color: red !importan;', '}'],
      uz: ['.alert {', '  color: red !importan;', '}'],
    },
  },
  {
    filename: 'script.html',
    buggyIndex: 1,
    lines: {
      ru: ['<body>', '  <scrpt src="app.js"></scrpt>', '</body>'],
      uz: ['<body>', '  <scrpt src="app.js"></scrpt>', '</body>'],
    },
  },
  {
    filename: 'opacity2.css',
    buggyIndex: 1,
    lines: {
      ru: ['.overlay {', '  opacity: 0.5px;', '  background: black;', '}'],
      uz: ['.overlay {', '  opacity: 0.5px;', '  background: black;', '}'],
    },
  },
  {
    filename: 'textarea.html',
    buggyIndex: 1,
    lines: {
      ru: ['<form>', '  <textarea>Комментарий', '</form>'],
      uz: ['<form>', '  <textarea>Izoh', '</form>'],
    },
  },
  {
    filename: 'selectorlist.css',
    buggyIndex: 0,
    lines: {
      ru: ['.title; .subtitle {', '  color: navy;', '}'],
      uz: ['.title; .subtitle {', '  color: navy;', '}'],
    },
  },
  {
    filename: 'iframe.html',
    buggyIndex: 1,
    lines: {
      ru: ['<div class="video">', '  <iframe src=video.html"></iframe>', '</div>'],
      uz: ['<div class="video">', '  <iframe src=video.html"></iframe>', '</div>'],
    },
  },
  {
    filename: 'urlbg.css',
    buggyIndex: 1,
    lines: {
      ru: ['.hero {', '  background-image: url(photo.jpg;', '}'],
      uz: ['.hero {', '  background-image: url(photo.jpg;', '}'],
    },
  },
  {
    filename: 'media.css',
    buggyIndex: 0,
    lines: {
      ru: ['@medias (max-width: 600px) {', '  .box { display: none; }', '}'],
      uz: ['@medias (max-width: 600px) {', '  .box { display: none; }', '}'],
    },
  },
  {
    filename: 'nested.html',
    buggyIndex: 2,
    lines: {
      ru: ['<ul>', '  <li>Первый<ul><li>Вложенный</li></ul></li>', '  <li>Второй</ul></li>'],
      uz: ['<ul>', '  <li>Birinchi<ul><li>Ichki</li></ul></li>', '  <li>Ikkinchi</ul></li>'],
    },
  },
  {
    filename: 'stylelink.html',
    buggyIndex: 1,
    lines: {
      ru: ['<head>', '  <link rell="stylesheet" href="style.css">', '</head>'],
      uz: ['<head>', '  <link rell="stylesheet" href="style.css">', '</head>'],
    },
  },
  {
    filename: 'transition.css',
    buggyIndex: 1,
    lines: {
      ru: ['.card {', '  trasition: all 0.3s;', '  color: teal;', '}'],
      uz: ['.card {', '  trasition: all 0.3s;', '  color: teal;', '}'],
    },
  },
];
