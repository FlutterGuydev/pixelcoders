import { hasAttr } from '../../lib/basicsCheck';

function validate(code) {
  const hasSrc = hasAttr(code, 'img', 'src');
  const hasAlt = hasAttr(code, 'img', 'alt');

  if (hasSrc && hasAlt) return { success: true };

  if (!hasSrc) {
    return {
      success: false,
      message: {
        ru: 'Тегу <img> нужен атрибут src — путь к картинке. Например: src="cat.jpg".',
        uz: '<img> tegiga src atributi kerak — rasm manzili. Masalan: src="cat.jpg".',
      },
    };
  }

  return {
    success: false,
    message: {
      ru: 'src есть, но не хватает alt — короткого описания картинки для тех, кто её не видит.',
      uz: 'src bor, lekin alt yetishmayapti — rasmni ko‘rmaydiganlar uchun qisqa tavsif.',
    },
  };
}

export const basicsLevel6 = {
  id: 'basics-6',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 6: Картинка <img>', uz: '6-dars: <img> rasm' },
  filename: 'lesson-6.html',
  explanation: {
    ru: 'Тег <img> вставляет картинку. У него нет отдельного закрывающего тега — он сам себя закрывает. src — откуда брать картинку, alt — текстовое описание на случай, если картинка не загрузится (и для программ чтения с экрана).',
    uz: '<img> tegi rasm qo‘yadi. Uning alohida yopuvchi tegi yo‘q — o‘zini o‘zi yopadi. src — rasmni qayerdan olish, alt — rasm yuklanmasa (yoki ekran o‘qigich uchun) ko‘rinadigan matnli tavsif.',
  },
  example:
    '<img src="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'120\'%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'%232dd4bf\'/%3E%3C/svg%3E" alt="Бирюзовый прямоугольник">',
  goals: {
    ru: ['Добавь тег <img> с атрибутом src.', 'Добавь атрибут alt с описанием картинки.'],
    uz: ['src atributi bilan <img> tegini qo‘sh.', 'Rasm tavsifi bilan alt atributini qo‘sh.'],
  },
  hints: ['<img src="ссылка-на-картинку" alt="описание">'],
  starterCode: '<!-- Вставь картинку по ссылке -->\n\n',
  successMessage: {
    ru: 'Отлично! Так на страницу добавляются изображения.',
    uz: 'Ajoyib! Sahifaga rasmlar shunday qo‘shiladi.',
  },
  pageCaption: { ru: 'Так твоя картинка выглядит на странице:', uz: 'Sahifada rasming shunday ko‘rinadi:' },
  validate,
};
