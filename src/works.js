// Original photographs are bundled locally. Missing attachments are not invented.
const files = import.meta.glob("./photos/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  query: "?url",
  import: "default",
});
function original(stem, label, alt) {
  const entry = Object.entries(files).find(([path]) =>
    path.replace(/\.[^.]+$/, "").endsWith(`/${stem}`),
  );
  return { src: entry?.[1] || null, label, alt, crop: [0, 0, 4, 3] };
}
function existing(stem, alt, crop) {
  const file = original(stem, "", alt);
  return [{ ...file, crop, preview: !file.src }];
}
export const catalog = [
  {
    id: "grapes",
    number: "01",
    category: "Предметная фотография",
    description:
      "Снимок на телефон. Гроздь зелёного винограда на светлом фоне: фактура ягод и мягкие оттенки зелёного.",
    photos: existing(
      "grapes",
      "Гроздь зелёного винограда на светлом фоне",
      [38, 510, 481, 295],
    ),
  },
  {
    id: "pop-art",
    number: "02",
    category: "Поп-арт",
    description:
      "Четыре цветовых решения одного образа. Яркие контрасты превращают мотошлем в поп-арт коллаж. Создано с ИИ.",
    photos: existing(
      "pop-art",
      "Четыре изображения мотошлема в контрастных цветах",
      [549, 442, 362, 352],
    ),
  },
  {
    id: "motion",
    number: "03",
    category: "Двойная экспозиция",
    description:
      "Силуэт мотошлема объединён с изображением гонщика и летящей из-под колёс землёй. Создано с ИИ.",
    photos: existing(
      "motion",
      "Портрет в мотошлеме, совмещённый с изображением мотогонщика",
      [37, 968, 444, 434],
    ),
  },
  {
    id: "fox",
    number: "04",
    category: "Двойная экспозиция",
    description:
      "Образ лисы соединён с осенним лесом. Рыжая шерсть переходит в кроны деревьев на белом снежном фоне. Создано с ИИ.",
    photos: existing(
      "fox",
      "Рыжая лиса, силуэт которой переходит в осенний лес",
      [510, 933, 397, 521],
    ),
  },
  {
    id: "retouch",
    number: "05",
    category: "Ретушь с ИИ",
    description:
      "Портрет до и после ретуши с помощью ИИ. На обработанном снимке выровнен тон кожи и смягчены мелкие несовершенства.",
    photos: [
      original("retouch-before", "До ретуши", "Портрет в профиль до ретуши"),
      original(
        "retouch-after",
        "После ретуши",
        "Портрет в профиль после ретуши с помощью ИИ",
      ),
    ],
  },
  {
    id: "backlight",
    number: "06",
    category: "Контровой свет: софтбокс",
    description:
      "Студийные портреты с контровым светом от софтбокса. Серия с разным кадрированием.",
    photos: [
      original(
        "backlight-1",
        "Погрудный портрет",
        "Погрудный портрет с короткой стрижкой в чёрной футболке",
      ),
      original(
        "backlight-2",
        "Поясной портрет",
        "Портрет с длинными волосами в чёрном свитшоте",
      ),
      original(
        "backlight-close",
        "Крупный план",
        "Портрет крупным планом с контровым светом",
      ),
    ],
  },
  {
    id: "two-softboxes",
    number: "07",
    category: "Портрет с двумя софтбоксами",
    description:
      "Поясной портрет в чёрной футболке. Для освещения использованы два софтбокса.",
    photos: [
      original(
        "two-softboxes",
        "Поясной портрет",
        "Поясной портрет в чёрной футболке с двумя софтбоксами",
      ),
    ],
  },
  {
    id: "window",
    number: "08",
    category: "Портрет у окна",
    description:
      "Портрет в чёрном свитшоте у окна. Естественный боковой свет подчёркивает черты лица, а тени добавляют объём.",
    photos: [original("window", "", "Портрет сидя у окна в чёрном свитшоте")],
  },
  {
    id: "references",
    number: "09",
    category: "Повтор референсов",
    description:
      "Сравнение референсов и результатов съёмки. Повторение композиции, направления света и настроения исходных кадров.",
    photos: [
      original(
        "references",
        "Референсы и результат",
        "Коллаж: три референса сверху и результаты их повторения снизу",
      ),
    ],
  },
  {
    id: "selfie",
    number: "10",
    category: "Селфи",
    description:
      "Автопортрет в очках и наушниках. Полотенце скрывает лицо, а в линзах отражается свет экрана.",
    photos: [
      original(
        "selfie",
        "",
        "Селфи в очках, наушниках и с полотенцем вокруг лица",
      ),
    ],
  },
];
export const works = catalog
  .map((work) => ({
    ...work,
    photos: work.photos.filter((photo) => photo.src || photo.preview),
  }))
  .filter((work) => work.photos.length);
export const pendingWorks = catalog.filter(
  (work) => !works.some(({ id }) => id === work.id),
);
