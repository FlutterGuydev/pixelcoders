import { hasAttr } from '../../lib/basicsCheck';

function validate(code) {
  if (hasAttr(code, 'html', 'lang')) return { success: true };

  return {
    success: false,
    message: {
      ru: 'Добавь атрибут lang на тег <html>, например lang="ru".',
      uz: '<html> tegiga lang atributini qo‘sh, masalan lang="uz".',
    },
  };
}

export const basicsLevel33 = {
  id: 'basics-33',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 33: язык страницы lang', uz: '33-dars: sahifa tili lang' },
  filename: 'lesson-33.html',
  explanation: {
    ru: 'Атрибут lang на теге <html> говорит браузеру и программам чтения с экрана, на каком языке написана страница — например lang="ru" или lang="uz". Это помогает с произношением для незрячих пользователей, проверкой орфографии и переводом. Именно поэтому у этого приложения есть переключатель RU/UZ — оно тоже помечает свой язык.',
    uz: '<html> tegidagi lang atributi brauzer va ekran o‘qigichlarga sahifa qaysi tilda yozilganini aytadi — masalan lang="ru" yoki lang="uz". Bu ko‘rmaydigan foydalanuvchilar uchun talaffuz, imlo tekshiruvi va tarjima uchun yordam beradi. Aynan shuning uchun bu ilovada RU/UZ almashtirgichi bor — u ham o‘z tilini belgilaydi.',
  },
  example: '<html lang="ru">\n  <body>\n    <p>Привет!</p>\n  </body>\n</html>',
  goals: {
    ru: ['Добавь тег <html>.', 'Добавь на него атрибут lang с кодом языка.'],
    uz: ['<html> tegini qo‘sh.', 'Unga til kodi bilan lang atributini qo‘sh.'],
  },
  hints: ['<html lang="ru">...</html>', '<html lang="uz">...</html>'],
  starterCode: '<!-- Пометь язык страницы -->\n\n',
  successMessage: {
    ru: 'Отлично! Ты собрал все 33 урока — от первого <h1> до атрибутов доступности.',
    uz: 'Ajoyib! Sen barcha 33 darsni tugatding — birinchi <h1> dan tortib qulaylik atributlarigacha.',
  },
  pageCaption: { ru: 'lang не отображается, но браузер его знает.', uz: 'lang ko‘rinmaydi, lekin brauzer uni biladi.' },
  validate,
};
