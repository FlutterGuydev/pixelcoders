// One small badge per Basics lesson (except the capstone, which is covered
// by foundation-builder below) — a concrete reward at every step, not just
// at the end of the track.
export const LESSON_BADGES = [
  {
    levelId: 'basics-1',
    id: 'tag-h1',
    name: { ru: 'Первый заголовок', uz: 'Birinchi sarlavha' },
    description: { ru: 'Напиши свой первый тег <h1>.', uz: 'Birinchi <h1> tegingni yoz.' },
    icon: '🅰️',
  },
  {
    levelId: 'basics-2',
    id: 'tag-headings',
    name: { ru: 'Мастер подзаголовков', uz: 'Kichik sarlavhalar ustasi' },
    description: { ru: 'Освой <h2> и <h3>.', uz: '<h2> va <h3> ni egalla.' },
    icon: '🔤',
  },
  {
    levelId: 'basics-3',
    id: 'tag-p',
    name: { ru: 'Рассказчик', uz: 'Hikoyachi' },
    description: { ru: 'Напиши свой первый абзац <p>.', uz: 'Birinchi <p> abzatsingni yoz.' },
    icon: '📝',
  },
  {
    levelId: 'basics-4',
    id: 'tag-div',
    name: { ru: 'Строитель коробок', uz: 'Quti quruvchi' },
    description: { ru: 'Собери свой первый <div> с содержимым.', uz: "Ichida narsa bo'lgan birinchi <div> ingni yig'." },
    icon: '📦',
  },
  {
    levelId: 'basics-5',
    id: 'tag-a',
    name: { ru: 'Проводник', uz: 'Yoʻlboshchi' },
    description: { ru: 'Сделай свою первую ссылку <a>.', uz: 'Birinchi <a> havolangni yasa.' },
    icon: '🔗',
  },
  {
    levelId: 'basics-6',
    id: 'tag-img',
    name: { ru: 'Художник страниц', uz: 'Sahifa rassomi' },
    description: { ru: 'Вставь свою первую картинку <img>.', uz: 'Birinchi <img> rasmingni qoʻsh.' },
    icon: '🖼️',
  },
  {
    levelId: 'basics-7',
    id: 'tag-list',
    name: { ru: 'Составитель списков', uz: 'Roʻyxat tuzuvchi' },
    description: { ru: 'Собери свой первый список <ul>.', uz: 'Birinchi <ul> roʻyxatingni tuz.' },
    icon: '📋',
  },
  {
    levelId: 'basics-9',
    id: 'tag-emphasis',
    name: { ru: 'Мастер выделения', uz: 'Urgʻu ustasi' },
    description: { ru: 'Используй <strong> и <em>, чтобы выделить текст.', uz: 'Matnni ajratish uchun <strong> va <em> ishlat.' },
    icon: '✨',
  },
  {
    levelId: 'basics-10',
    id: 'tag-attrs',
    name: { ru: 'Мастер атрибутов', uz: 'Atributlar ustasi' },
    description: { ru: 'Добавь class и id — точки опоры для CSS.', uz: 'CSS uchun tayanch nuqtalar — class va id qoʻsh.' },
    icon: '🏷️',
  },
  {
    levelId: 'basics-11',
    id: 'tag-ol',
    name: { ru: 'Нумеровщик', uz: 'Raqamlovchi' },
    description: { ru: 'Собери нумерованный список <ol>.', uz: 'Raqamlangan <ol> roʻyxatini tuz.' },
    icon: '🔢',
  },
  {
    levelId: 'basics-12',
    id: 'tag-table',
    name: { ru: 'Мастер таблиц', uz: 'Jadval ustasi' },
    description: { ru: 'Построй таблицу <table> со строками и ячейками.', uz: 'Qator va katakchali <table> jadval qur.' },
    icon: '🗂️',
  },
  {
    levelId: 'basics-13',
    id: 'tag-form',
    name: { ru: 'Конструктор форм', uz: 'Shakl quruvchisi' },
    description: { ru: 'Собери форму с полем ввода и кнопкой.', uz: 'Kiritish maydoni va tugma bilan shakl tuz.' },
    icon: '🖊️',
  },
  {
    levelId: 'basics-21',
    id: 'tag-meta',
    name: { ru: 'Хранитель метаданных', uz: 'Metama\'lumot vasiysi' },
    description: { ru: 'Добавь <meta> в <head>.', uz: '<head> ichiga <meta> qo‘sh.' },
    icon: '🔖',
  },
  {
    levelId: 'basics-22',
    id: 'tag-select',
    name: { ru: 'Хранитель выбора', uz: 'Tanlov vasiysi' },
    description: { ru: 'Собери выпадающий список <select>.', uz: '<select> ochiladigan ro‘yxatini tuz.' },
    icon: '📜',
  },
  {
    levelId: 'basics-23',
    id: 'tag-quote',
    name: { ru: 'Хранитель цитат', uz: 'Iqtibos vasiysi' },
    description: { ru: 'Оформи цитату через <blockquote>.', uz: '<blockquote> orqali iqtibos bezat.' },
    icon: '💬',
  },
  {
    levelId: 'basics-15',
    id: 'tag-span',
    name: { ru: 'Точный стрелок', uz: 'Aniq otuvchi' },
    description: { ru: 'Выдели кусочек текста тегом <span>.', uz: '<span> tegi bilan matn bo‘lagini ajrat.' },
    icon: '🎯',
  },
  {
    levelId: 'basics-16',
    id: 'tag-break',
    name: { ru: 'Мастер разделителей', uz: 'Ajratgichlar ustasi' },
    description: { ru: 'Используй <br> и <hr>.', uz: '<br> va <hr> dan foydalan.' },
    icon: '➖',
  },
  {
    levelId: 'basics-17',
    id: 'tag-label',
    name: { ru: 'Забота о доступности', uz: 'Foydalanish qulayligi' },
    description: { ru: 'Свяжи <label> с полем формы.', uz: '<label> ni forma maydoni bilan bog‘la.' },
    icon: '♿',
  },
  {
    levelId: 'basics-18',
    id: 'tag-nav',
    name: { ru: 'Навигатор', uz: 'Navigator' },
    description: { ru: 'Собери меню из ссылок в <nav>.', uz: '<nav> ichida havolalardan menyu tuz.' },
    icon: '🧭',
  },
  {
    levelId: 'basics-19',
    id: 'tag-figure',
    name: { ru: 'Куратор галереи', uz: 'Galereya kuratori' },
    description: { ru: 'Подпиши картинку через <figure>/<figcaption>.', uz: '<figure>/<figcaption> orqali rasmga izoh yoz.' },
    icon: '🏞️',
  },
  {
    levelId: 'basics-25',
    id: 'tag-details',
    name: { ru: 'Фокусник', uz: 'Sehrgar' },
    description: { ru: 'Собери сворачиваемый блок <details>.', uz: 'Yig‘iladigan <details> blokini tuz.' },
    icon: '🪄',
  },
  {
    levelId: 'basics-26',
    id: 'tag-mark',
    name: { ru: 'Хранитель маркера', uz: 'Marker vasiysi' },
    description: { ru: 'Подсвети текст тегом <mark>.', uz: '<mark> tegi bilan matnni belgila.' },
    icon: '🖍️',
  },
  {
    levelId: 'basics-27',
    id: 'tag-media',
    name: { ru: 'Диджей', uz: 'DJ' },
    description: { ru: 'Встрой <audio> или <video> с controls.', uz: 'Controls bilan <audio> yoki <video> joyla.' },
    icon: '🎬',
  },
  {
    levelId: 'basics-28',
    id: 'tag-sectioning',
    name: { ru: 'Архитектор смысла', uz: 'Ma’no me’mori' },
    description: { ru: 'Используй <section> и <article>.', uz: '<section> va <article> dan foydalan.' },
    icon: '🗺️',
  },
  {
    levelId: 'basics-29',
    id: 'tag-table-sections',
    name: { ru: 'Мастер настоящих таблиц', uz: 'Haqiqiy jadval ustasi' },
    description: { ru: 'Раздели таблицу на <thead> и <tbody>.', uz: 'Jadvalni <thead> va <tbody> ga ajrat.' },
    icon: '📊',
  },
  {
    levelId: 'basics-30',
    id: 'tag-dl',
    name: { ru: 'Составитель словаря', uz: 'Lug‘at tuzuvchi' },
    description: { ru: 'Собери список терминов <dl>.', uz: '<dl> terminlar ro‘yxatini tuz.' },
    icon: '📖',
  },
  {
    levelId: 'basics-31',
    id: 'tag-textarea',
    name: { ru: 'Собиратель сообщений', uz: 'Xabar yig‘uvchi' },
    description: { ru: 'Добавь многострочное поле <textarea>.', uz: 'Ko‘p qatorli <textarea> qo‘sh.' },
    icon: '✉️',
  },
  {
    levelId: 'basics-32',
    id: 'tag-abbr',
    name: { ru: 'Расшифровщик', uz: 'Ma’no ochuvchi' },
    description: { ru: 'Объясни сокращение через <abbr>.', uz: '<abbr> orqali qisqartmani tushuntir.' },
    icon: '🔍',
  },
  {
    levelId: 'basics-33',
    id: 'tag-lang',
    name: { ru: 'Полиглот', uz: 'Poliglot' },
    description: { ru: 'Пометь язык страницы атрибутом lang.', uz: 'lang atributi bilan sahifa tilini belgila.' },
    icon: '🌍',
  },
  {
    levelId: 'basics-34',
    id: 'tag-supsub',
    name: { ru: 'Учёный', uz: 'Olim' },
    description: { ru: 'Напиши формулу через <sup> и <sub>.', uz: '<sup> va <sub> orqali formula yoz.' },
    icon: '🧪',
  },
  {
    levelId: 'basics-35',
    id: 'tag-delins',
    name: { ru: 'Редактор правок', uz: 'Tahrir muharriri' },
    description: { ru: 'Покажи изменения через <del> и <ins>.', uz: '<del> va <ins> orqali o‘zgarishni ko‘rsat.' },
    icon: '✏️',
  },
  {
    levelId: 'basics-36',
    id: 'tag-progress',
    name: { ru: 'Хранитель прогресса', uz: 'Jarayon vasiysi' },
    description: { ru: 'Нарисуй <progress> и <meter>.', uz: '<progress> va <meter> chiz.' },
    icon: '📈',
  },
  {
    levelId: 'basics-37',
    id: 'tag-fieldset',
    name: { ru: 'Организатор форм', uz: 'Shakl tashkilotchisi' },
    description: { ru: 'Сгруппируй поля через <fieldset>.', uz: '<fieldset> orqali maydonlarni guruhla.' },
    icon: '🗃️',
  },
  {
    levelId: 'basics-38',
    id: 'tag-radio',
    name: { ru: 'Диспетчер вариантов', uz: 'Variant dispetcheri' },
    description: { ru: 'Собери группу переключателей radio.', uz: 'Radio o‘tkazgichlar guruhini tuz.' },
    icon: '🔘',
  },
];

// Mirrors LESSON_BADGES but for the CSS Basics track — checked separately
// in evaluateNewBadges since it lives under player.tracks.cssBasics.
export const CSS_LESSON_BADGES = [
  {
    levelId: 'css-basics-1',
    id: 'css-color',
    name: { ru: 'Художник текста', uz: 'Matn rassomi' },
    description: { ru: 'Покрась текст свойством color.', uz: 'color xususiyati bilan matnni bo‘ya.' },
    icon: '🖌️',
  },
  {
    levelId: 'css-basics-2',
    id: 'css-bg',
    name: { ru: 'Маляр фонов', uz: 'Fon bo‘yoqchisi' },
    description: { ru: 'Покрась фон свойством background-color.', uz: 'background-color bilan fonni bo‘ya.' },
    icon: '🪣',
  },
  {
    levelId: 'css-basics-3',
    id: 'css-fontsize',
    name: { ru: 'Мастер масштаба', uz: 'Masshtab ustasi' },
    description: { ru: 'Измени размер текста свойством font-size.', uz: 'font-size bilan matn o‘lchamini o‘zgartir.' },
    icon: '🔡',
  },
  {
    levelId: 'css-basics-4',
    id: 'css-class-selector',
    name: { ru: 'Классификатор', uz: 'Klassifikator' },
    description: { ru: 'Стилизуй элемент через селектор .class.', uz: '.class selektori orqali elementni stilla.' },
    icon: '🏷️',
  },
  {
    levelId: 'css-basics-5',
    id: 'css-id-selector',
    name: { ru: 'Уникальный мастер', uz: 'Noyob usta' },
    description: { ru: 'Стилизуй элемент через селектор #id.', uz: '#id selektori orqali elementni stilla.' },
    icon: '🆔',
  },
  {
    levelId: 'css-basics-6',
    id: 'css-align',
    name: { ru: 'Мастер выравнивания', uz: 'Tekislash ustasi' },
    description: { ru: 'Выровняй текст свойством text-align.', uz: 'text-align bilan matnni tekisla.' },
    icon: '📐',
  },
  {
    levelId: 'css-basics-7',
    id: 'css-fontstyle',
    name: { ru: 'Стилист текста', uz: 'Matn stilisti' },
    description: { ru: 'Сделай текст жирным и курсивным через CSS.', uz: 'CSS orqali matnni qalin va qiyshiq qil.' },
    icon: '💅',
  },
  {
    levelId: 'css-basics-8',
    id: 'css-margin',
    name: { ru: 'Мастер пространства', uz: 'Bo‘shliq ustasi' },
    description: { ru: 'Раздвинь элементы свойством margin.', uz: 'margin bilan elementlarni ajrat.' },
    icon: '📏',
  },
  {
    levelId: 'css-basics-9',
    id: 'css-padding',
    name: { ru: 'Мастер уюта', uz: 'Qulaylik ustasi' },
    description: { ru: 'Добавь воздух внутри элемента свойством padding.', uz: 'padding bilan element ichiga joy qo‘sh.' },
    icon: '🛋️',
  },
  {
    levelId: 'css-basics-10',
    id: 'css-border',
    name: { ru: 'Мастер рамок', uz: 'Ramka ustasi' },
    description: { ru: 'Обведи элемент свойством border.', uz: 'border bilan elementni ramkaga ol.' },
    icon: '🖼️',
  },
  {
    levelId: 'css-basics-11',
    id: 'css-radius',
    name: { ru: 'Скруглитель', uz: 'Yumaloqlovchi' },
    description: { ru: 'Скругли углы свойством border-radius.', uz: 'border-radius bilan burchaklarni yumaloqla.' },
    icon: '🔵',
  },
  {
    levelId: 'css-basics-12',
    id: 'css-shadow',
    name: { ru: 'Мастер теней', uz: 'Soya ustasi' },
    description: { ru: 'Добавь тень свойством box-shadow.', uz: 'box-shadow bilan soya qo‘sh.' },
    icon: '🌑',
  },
  {
    levelId: 'css-basics-13',
    id: 'css-flex',
    name: { ru: 'Инженер раскладки', uz: 'Joylashuv muhandisi' },
    description: { ru: 'Построй раскладку через display: flex.', uz: 'display: flex orqali joylashuv qur.' },
    icon: '🧩',
  },
  {
    levelId: 'css-basics-14',
    id: 'css-hover',
    name: { ru: 'Мастер эффектов', uz: 'Effektlar ustasi' },
    description: { ru: 'Оживи элемент псевдоклассом :hover.', uz: ':hover psevdo-sinfi bilan elementni jonlantir.' },
    icon: '🖱️',
  },
  {
    levelId: 'css-basics-15',
    id: 'css-card',
    name: { ru: 'Собиратель карточек', uz: 'Kartochka yig‘uvchi' },
    description: { ru: 'Собери карточку из нескольких CSS-свойств.', uz: 'Bir nechta CSS xususiyatidan kartochka yig‘.' },
    icon: '🃏',
  },
  {
    levelId: 'css-basics-16',
    id: 'css-size',
    name: { ru: 'Строитель размеров', uz: 'O‘lcham quruvchi' },
    description: { ru: 'Задай width и height.', uz: 'width va height ber.' },
    icon: '🧱',
  },
  {
    levelId: 'css-basics-17',
    id: 'css-font',
    name: { ru: 'Шрифтовед', uz: 'Shrift bilimdoni' },
    description: { ru: 'Выбери шрифт свойством font-family.', uz: 'font-family bilan shrift tanla.' },
    icon: '✒️',
  },
  {
    levelId: 'css-basics-18',
    id: 'css-decoration',
    name: { ru: 'Декоратор ссылок', uz: 'Havola bezovchisi' },
    description: { ru: 'Оформи текст свойством text-decoration.', uz: 'text-decoration bilan matnni bezа.' },
    icon: '➰',
  },
  {
    levelId: 'css-basics-19',
    id: 'css-lineheight',
    name: { ru: 'Мастер чтения', uz: 'O‘qish ustasi' },
    description: { ru: 'Сделай текст удобным свойством line-height.', uz: 'line-height bilan matnni qulay qil.' },
    icon: '📄',
  },
  {
    levelId: 'css-basics-20',
    id: 'css-opacity',
    name: { ru: 'Призрачный мастер', uz: 'Arvoh usta' },
    description: { ru: 'Сделай элемент прозрачным свойством opacity.', uz: 'opacity bilan elementni shaffof qil.' },
    icon: '👻',
  },
  {
    levelId: 'css-basics-21',
    id: 'css-bgimage',
    name: { ru: 'Художник фонов', uz: 'Fon rassomi' },
    description: { ru: 'Вставь картинку фоном через background-image.', uz: 'background-image orqali fon rasmi qo‘y.' },
    icon: '🌄',
  },
  {
    levelId: 'css-basics-22',
    id: 'css-display',
    name: { ru: 'Мастер отображения', uz: 'Ko‘rinish ustasi' },
    description: { ru: 'Смени тип отображения свойством display.', uz: 'display bilan ko‘rinish turini o‘zgartir.' },
    icon: '🔳',
  },
  {
    levelId: 'css-basics-23',
    id: 'css-position',
    name: { ru: 'Навигатор координат', uz: 'Koordinata navigatori' },
    description: { ru: 'Размести элемент точно через position.', uz: 'position orqali elementni aniq joylashtir.' },
    icon: '📍',
  },
  {
    levelId: 'css-basics-24',
    id: 'css-zindex',
    name: { ru: 'Мастер слоёв', uz: 'Qatlamlar ustasi' },
    description: { ru: 'Управляй порядком слоёв свойством z-index.', uz: 'z-index bilan qatlamlar tartibini boshqar.' },
    icon: '📚',
  },
  {
    levelId: 'css-basics-25',
    id: 'css-overflow',
    name: { ru: 'Укротитель переполнения', uz: 'Toshib ketishni jilovlovchi' },
    description: { ru: 'Обуздай лишнее содержимое свойством overflow.', uz: 'overflow bilan ortiqcha mazmunni jilovla.' },
    icon: '🌊',
  },
  {
    levelId: 'css-basics-26',
    id: 'css-flexdir',
    name: { ru: 'Инженер направлений', uz: 'Yo‘nalish muhandisi' },
    description: { ru: 'Управляй направлением флекса.', uz: 'Fleks yo‘nalishini boshqar.' },
    icon: '🔀',
  },
  {
    levelId: 'css-basics-27',
    id: 'css-gap',
    name: { ru: 'Мастер промежутков', uz: 'Oraliq ustasi' },
    description: { ru: 'Разведи элементы свойством gap.', uz: 'gap bilan elementlarni ajrat.' },
    icon: '↔️',
  },
  {
    levelId: 'css-basics-28',
    id: 'css-grid',
    name: { ru: 'Строитель сетки', uz: 'Katak quruvchi' },
    description: { ru: 'Построй раскладку через display: grid.', uz: 'display: grid orqali joylashuv qur.' },
    icon: '🔲',
  },
  {
    levelId: 'css-basics-29',
    id: 'css-transition',
    name: { ru: 'Мастер плавности', uz: 'Yumshoqlik ustasi' },
    description: { ru: 'Оживи изменения свойством transition.', uz: 'transition bilan o‘zgarishlarni jonlantir.' },
    icon: '🌀',
  },
  {
    levelId: 'css-basics-30',
    id: 'css-transform',
    name: { ru: 'Трансформатор', uz: 'Transformator' },
    description: { ru: 'Поверни или увеличь элемент через transform.', uz: 'transform orqali elementni burа yoki kattalashtir.' },
    icon: '🔄',
  },
  {
    levelId: 'css-basics-31',
    id: 'css-childpseudo',
    name: { ru: 'Знаток порядка', uz: 'Tartib bilimdoni' },
    description: { ru: 'Выбери первый и последний элементы.', uz: 'Birinchi va oxirgi elementni tanla.' },
    icon: '🥇',
  },
  {
    levelId: 'css-basics-32',
    id: 'css-before',
    name: { ru: 'Иллюзионист', uz: 'Illyuzionist' },
    description: { ru: 'Добавь виртуальное содержимое через ::before.', uz: '::before orqali virtual mazmun qo‘sh.' },
    icon: '🎭',
  },
  {
    levelId: 'css-basics-33',
    id: 'css-variables',
    name: { ru: 'Хранитель переменных', uz: 'O‘zgaruvchilar vasiysi' },
    description: { ru: 'Объяви и используй CSS-переменную.', uz: 'CSS o‘zgaruvchisini e’lon qil va ishlat.' },
    icon: '🧮',
  },
  {
    levelId: 'css-basics-34',
    id: 'css-media',
    name: { ru: 'Адаптивный мастер', uz: 'Moslashuvchan usta' },
    description: { ru: 'Подстрой стили под экран через @media.', uz: '@media orqali stillarni ekranga moslashtir.' },
    icon: '📱',
  },
  {
    levelId: 'css-basics-35',
    id: 'css-cursor',
    name: { ru: 'Мастер курсора', uz: 'Kursor ustasi' },
    description: { ru: 'Смени вид курсора свойством cursor.', uz: 'cursor bilan kursor ko‘rinishini o‘zgartir.' },
    icon: '👆',
  },
  {
    levelId: 'css-basics-36',
    id: 'css-boxsizing',
    name: { ru: 'Мастер модели коробки', uz: 'Quti modeli ustasi' },
    description: { ru: 'Почини размер элемента через box-sizing.', uz: 'box-sizing orqali element o‘lchamini tuzat.' },
    icon: '📦',
  },
  {
    levelId: 'css-basics-37',
    id: 'css-combinator',
    name: { ru: 'Точный селектор', uz: 'Aniq selektor' },
    description: { ru: 'Задень только нужные элементы вложенным селектором.', uz: 'Ichma-ich selektor bilan faqat kerakli elementlarga teg.' },
    icon: '🎯',
  },
];

export const BADGE_DEFINITIONS = [
  ...LESSON_BADGES,
  ...CSS_LESSON_BADGES,
  {
    id: 'foundation-builder',
    name: { ru: 'Строитель основ', uz: 'Asos quruvchi' },
    description: {
      ru: 'Пройди весь курс «Основы HTML» и собери свой первый сайт.',
      uz: '«HTML asoslari» kursini toʻliq tugat va birinchi saytingni yigʻ.',
    },
    icon: '📘',
  },
  {
    id: 'site-architect',
    name: { ru: 'Архитектор сайта', uz: 'Sayt meʼmori' },
    description: {
      ru: 'Пройди весь курс «Основы HTML» и собери сайт с семантической структурой.',
      uz: '«HTML asoslari» kursini toʻliq tugat va semantik tuzilmali sayt yigʻ.',
    },
    icon: '🏛️',
  },
  {
    id: 'portfolio-master',
    name: { ru: 'Мастер портфолио', uz: 'Portfolio ustasi' },
    description: {
      ru: 'Пройди весь курс «Основы HTML» и собери полное портфолио.',
      uz: '«HTML asoslari» kursini toʻliq tugat va toʻliq portfolio yigʻ.',
    },
    icon: '💼',
  },
  {
    id: 'free-builder',
    name: { ru: 'Свободный творец', uz: 'Erkin ijodkor' },
    description: {
      ru: 'Сохрани свой первый проект в Мастерской.',
      uz: 'Ustaxonada birinchi loyihangni saqla.',
    },
    icon: '🎨',
  },
  {
    id: 'html-certified',
    name: { ru: 'HTML сертифицирован', uz: 'HTML sertifikatlangan' },
    description: {
      ru: 'Сдай итоговый экзамен и получи сертификат по основам HTML.',
      uz: 'Yakuniy imtihonni topshir va HTML asoslari sertifikatini ol.',
    },
    icon: '🎓',
  },
  {
    id: 'css-stylist',
    name: { ru: 'Стилист сайта', uz: 'Sayt stilisti' },
    description: {
      ru: 'Пройди весь курс «Основы CSS» и собери стилизованную карточку.',
      uz: '«CSS asoslari» kursini toʻliq tugat va stillashtirilgan kartochka yigʻ.',
    },
    icon: '💎',
  },
  {
    id: 'gatekeeper',
    name: { ru: 'Хранитель врат', uz: 'Darvoza qorovuli' },
    description: {
      ru: 'Пройди все уровни трека HTML.',
      uz: 'HTML yoʻnalishidagi barcha darslarni tugat.',
    },
    icon: '🚪',
  },
  {
    id: 'vault-breaker',
    name: { ru: 'Взломщик хранилища', uz: 'Xazina buzuvchi' },
    description: {
      ru: 'Пройди все уровни трека CSS.',
      uz: 'CSS yoʻnalishidagi barcha darslarni tugat.',
    },
    icon: '🔓',
  },
  {
    id: 'no-hints-needed',
    name: { ru: 'Без подсказок', uz: 'Maslahatsiz' },
    description: {
      ru: 'Реши 5 уровней подряд, не открывая подсказки.',
      uz: 'Maslahatlarni ochmasdan 5 ta darsni ketma-ket yech.',
    },
    icon: '🧠',
  },
  {
    id: 'comeback-kid',
    name: { ru: 'Не сдавайся', uz: 'Chekinmas' },
    description: {
      ru: 'Реши уровень после 3 и более неудачных попыток запуска.',
      uz: "3 va undan ortiq muvaffaqiyatsiz urinishdan keyin darsni yech.",
    },
    icon: '🔥',
  },
  {
    id: '7-day-streak',
    name: { ru: 'Серия 7 дней', uz: '7 kunlik seriya' },
    description: {
      ru: 'Играй 7 дней подряд.',
      uz: "7 kun ketma-ket o'ynang.",
    },
    icon: '📅',
  },
  {
    id: 'code-duelist',
    name: { ru: 'Кодовый дуэлянт', uz: 'Kod duelchisi' },
    description: {
      ru: 'Выиграй свою первую дуэль против Байта.',
      uz: 'Bayt ustidan birinchi duelingni yut.',
    },
    icon: '⚔️',
  },
  {
    id: 'sharp-mind',
    name: { ru: 'Острый ум', uz: 'O‘tkir aql' },
    description: {
      ru: 'Пройди все пять Логических комнат.',
      uz: 'Barcha beshta Mantiq xonasini tugat.',
    },
    icon: '🧠',
  },
];

/**
 * Evaluate which new badges (if any) a player has just earned.
 * `player` must already reflect the completion (levelsCompleted,
 * streak, consecutiveNoHintSolves all updated). `event` carries the
 * per-attempt details of the run that isn't durably stored elsewhere.
 * Returns an array of newly-earned badge ids (never re-awards one already held).
 */
export function evaluateNewBadges(player, event, trackLevelIds) {
  const earned = new Set(player.badges);
  const newlyEarned = [];

  const award = (id) => {
    if (!earned.has(id)) {
      earned.add(id);
      newlyEarned.push(id);
    }
  };

  const trackComplete = (trackId) => {
    const ids = trackLevelIds[trackId];
    const done = player.tracks[trackId].levelsCompleted;
    return ids.length > 0 && ids.every((id) => done.includes(id));
  };

  const basicsDone = player.tracks.basics.levelsCompleted;
  LESSON_BADGES.forEach((lesson) => {
    if (basicsDone.includes(lesson.levelId)) award(lesson.id);
  });

  // foundation-builder, site-architect and portfolio-master mark earlier
  // milestones (basics-8/14/20); html-certified marks passing the final
  // exam (basics-24, the last lesson) — each checked by level id rather
  // than trackComplete('basics') so they land at different points instead
  // of all firing together.
  if (basicsDone.includes('basics-8')) award('foundation-builder');
  if (basicsDone.includes('basics-14')) award('site-architect');
  if (basicsDone.includes('basics-20')) award('portfolio-master');
  if (basicsDone.includes('basics-24')) award('html-certified');

  const cssBasicsDone = player.tracks.cssBasics.levelsCompleted;
  CSS_LESSON_BADGES.forEach((lesson) => {
    if (cssBasicsDone.includes(lesson.levelId)) award(lesson.id);
  });
  if (cssBasicsDone.includes('css-basics-38')) award('css-stylist');

  if (trackComplete('html')) award('gatekeeper');
  if (trackComplete('css')) award('vault-breaker');
  if (trackComplete('logic')) award('sharp-mind');
  if (player.consecutiveNoHintSolves >= 5) award('no-hints-needed');
  if (event.failedAttempts >= 3) award('comeback-kid');
  if (player.streak.current >= 7) award('7-day-streak');

  return newlyEarned;
}
