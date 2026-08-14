import { tagAttributesText } from '../../lib/basicsCheck';

function checkMediaTag(code, tag) {
  const tagText = tagAttributesText(code, tag);
  if (!tagText) return null;
  return {
    hasControls: /\bcontrols\b/.test(tagText),
    hasSrc: /\bsrc\s*=\s*["'][^"']+["']/.test(tagText),
  };
}

function validate(code) {
  const media = checkMediaTag(code, 'audio') || checkMediaTag(code, 'video');

  if (!media) {
    return {
      success: false,
      message: {
        ru: 'Нужен тег <audio> или <video>.',
        uz: '<audio> yoki <video> tegi kerak.',
      },
    };
  }

  if (media.hasSrc && media.hasControls) return { success: true };

  if (!media.hasSrc) {
    return {
      success: false,
      message: { ru: 'Добавь атрибут src — путь к файлу.', uz: 'src atributini qo‘sh — fayl manzili.' },
    };
  }

  return {
    success: false,
    message: {
      ru: 'src есть. Добавь ещё атрибут controls, чтобы показать кнопки play/pause.',
      uz: 'src bor. Play/pause tugmalarini ko‘rsatish uchun controls atributini ham qo‘sh.',
    },
  };
}

export const basicsLevel27 = {
  id: 'basics-27',
  trackId: 'basics',
  wingLabel: { ru: 'Основы HTML', uz: 'HTML asoslari' },
  title: { ru: 'Урок 27: <audio> и <video>', uz: '27-dars: <audio> va <video>' },
  filename: 'lesson-27.html',
  explanation: {
    ru: '<audio> и <video> встраивают звук и видео прямо в страницу. src указывает на файл, а атрибут controls (пишется без значения) добавляет кнопки play/pause и громкости — без него плеер будет без управления.',
    uz: '<audio> va <video> tovush va videoni to‘g‘ridan-to‘g‘ri sahifaga joylaydi. src fayl manzilini ko‘rsatadi, controls atributi (qiymatsiz yoziladi) esa play/pause va tovush tugmalarini qo‘shadi — usiz pleyerni boshqarib bo‘lmaydi.',
  },
  example: '<audio controls src="track.mp3"></audio>',
  goals: {
    ru: ['Добавь тег <audio> или <video>.', 'Добавь атрибут src.', 'Добавь атрибут controls.'],
    uz: ['<audio> yoki <video> tegini qo‘sh.', 'src atributini qo‘sh.', 'controls atributini qo‘sh.'],
  },
  hints: ['<audio controls src="song.mp3"></audio>', '<video controls src="clip.mp4"></video>'],
  starterCode: '<!-- Встрой аудио или видео с элементами управления -->\n\n',
  successMessage: {
    ru: 'Отлично! Теперь ты знаешь, как встраивать звук и видео.',
    uz: 'Ajoyib! Endi tovush va videoni qanday joylashni bilasan.',
  },
  pageCaption: {
    ru: 'Панель управления видна даже без настоящего файла:',
    uz: 'Boshqaruv paneli haqiqiy fayl bo‘lmasa ham ko‘rinadi:',
  },
  validate,
};
