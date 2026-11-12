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
      "Взяли портрет и обработали его с помощью ИИ: выровняли тон кожи и убрали заметные несовершенства. Здесь можно сравнить исходник и результат.",
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
      "Снимали у белой стены. Для серии с контровым светом оставили одну лампу и попробовали разное кадрирование: от поясного портрета до крупного плана.",
    photos: [
      original(
        "backlight-1",
        "Портрет в свитшоте",
        "Портрет с длинными волосами в чёрном свитшоте у белой стены",
      ),
      original(
        "backlight-2",
        "Поясной портрет",
        "Поясной портрет с короткой стрижкой в чёрной футболке у белой стены",
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
      "Поставили два софтбокса у белой стены и сняли поясной портрет. Попробовали, как меняется свет по сравнению со съёмкой с одной лампой.",
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
      "Снимали рядом с окном. Дневной свет освещает лицо сбоку, а на стене остаётся тень.",
    photos: [original("window", "", "Портрет сидя у окна в чёрном свитшоте")],
  },
  {
    id: "references",
    number: "09",
    category: "Повтор референсов",
    description:
      "Выбрали три референса и попробовали повторить свет, позы и композицию. Сверху — примеры, снизу — наши результаты.",
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
      "Сделал селфи в очках и наушниках, завернувшись в полотенце. В очках отразился экран — получился необычный автопортрет.",
    photos: [
      original(
        "selfie",
        "",
        "Селфи в очках, наушниках и с полотенцем вокруг лица",
      ),
    ],
  },
  {
    id: "candid",
    number: "11",
    category: "Свободный портрет",
    description:
      "Неформальный портрет у доски с рисунками. Забавный фон и простая поза — без сложной постановки.",
    photos: [
      original(
        "candid",
        "",
        "Портрет в чёрном свитшоте на фоне доски с цветными рисунками",
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
