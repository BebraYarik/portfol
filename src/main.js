import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/oswald/500.css";
import "@fontsource/oswald/400.css";
import "@phosphor-icons/web/regular";
import "./style.css";
import { works } from "./works.js";
import { createWave } from "./wave.js";

const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
let paused = reducedMotion.matches;
const photoDialog = document.querySelector("#photo-dialog");
const aboutDialog = document.querySelector("#about-dialog");
let current = 0;
let currentPhoto = 0;
let returnFocus;

function photo(work, eager = false) {
  const frame = document.createElement("span");
  frame.className = "photo";
  const [x, y, width, height] = work.crop;
  frame.style.aspectRatio = `${width} / ${height}`;
  frame.style.setProperty("--photo-ratio", width / height);
  const image = document.createElement("img");
  image.alt = work.alt;
  image.draggable = false;
  image.loading = eager ? "eager" : "lazy";
  image.decoding = "async";
  image.src = work.src || "/images/approved-reference.png";
  if (work.src) {
    image.addEventListener("load", () => {
      frame.style.aspectRatio = `${image.naturalWidth} / ${image.naturalHeight}`;
      frame.style.setProperty(
        "--photo-ratio",
        image.naturalWidth / image.naturalHeight,
      );
    });
  }
  if (!work.src) {
    image.className = "reference-crop";
    image.style.width = `${(946 / width) * 100}%`;
    image.style.left = `${(-x / width) * 100}%`;
    image.style.top = `${(-y / height) * 100}%`;
  }
  frame.append(image);
  return frame;
}

works.forEach((work, index) => {
  const article = document.createElement("article");
  article.className = `work work-${work.id}`;
  article.innerHTML = `<button class="work-open" aria-label="Открыть работу ${work.number}: ${work.category}"><span class="photo-stage"></span><span class="work-label"><span class="work-number">${work.number} /</span><span class="work-category">${work.category}</span><i class="ph ph-arrow-right" aria-hidden="true"></i></span></button><p class="work-description">${work.description}</p>`;
  article
    .querySelector(".photo-stage")
    .append(photo(work.photos[0], index < 2));
  if (work.photos.length > 1) {
    const count = document.createElement("span");
    count.className = "series-count";
    count.textContent = `${work.photos.length} кадра`;
    article.querySelector(".photo-stage").append(count);
  }
  article
    .querySelector(".work-open")
    .addEventListener("click", () => openPhoto(index));
  document.querySelector("#works").append(article);
});

function renderPhoto() {
  const seriesHadFocus =
    document.activeElement?.classList.contains("series-button");
  const work = works[current];
  const selectedPhoto = work.photos[currentPhoto];
  document
    .querySelector(".viewer-photo")
    .replaceChildren(photo(selectedPhoto, true));
  document.querySelector("#photo-title").textContent = work.category;
  document.querySelector(".viewer-category").textContent =
    `${work.number} / ${selectedPhoto.label || "Цифровая фотография"}`;
  document.querySelector(".viewer-description").textContent = work.description;
  document.querySelector(".viewer-count").textContent =
    `${current + 1} / ${works.length}${work.photos.length > 1 ? ` · Кадр ${currentPhoto + 1} из ${work.photos.length}` : ""}`;
  const series = document.querySelector(".viewer-series");
  series.hidden = work.photos.length < 2;
  series.replaceChildren();
  if (work.photos.length > 1)
    work.photos.forEach((image, index) => {
      const button = document.createElement("button");
      button.className = "series-button";
      button.textContent = image.label || `Кадр ${index + 1}`;
      button.setAttribute("aria-pressed", String(index === currentPhoto));
      button.addEventListener("click", () => {
        currentPhoto = index;
        renderPhoto();
        series.children[index]?.focus({ preventScroll: true });
      });
      series.append(button);
    });
  if (seriesHadFocus) {
    (series.children[currentPhoto] || document.querySelector(".next"))?.focus({
      preventScroll: true,
    });
  }
}
function openDialog(dialog) {
  returnFocus = document.activeElement;
  document.body.classList.add("dialog-open");
  dialog.showModal();
}
function openPhoto(index) {
  current = index;
  currentPhoto = 0;
  renderPhoto();
  openDialog(photoDialog);
}
function navigate(direction) {
  currentPhoto += direction;
  if (currentPhoto >= works[current].photos.length) {
    current = (current + 1) % works.length;
    currentPhoto = 0;
  } else if (currentPhoto < 0) {
    current = (current - 1 + works.length) % works.length;
    currentPhoto = works[current].photos.length - 1;
  }
  renderPhoto();
}
document
  .querySelector(".previous")
  .addEventListener("click", () => navigate(-1));
document.querySelector(".next").addEventListener("click", () => navigate(1));
photoDialog.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    navigate(-1);
  }
  if (event.key === "ArrowRight") {
    event.preventDefault();
    navigate(1);
  }
});
document
  .querySelector("#about-open")
  .addEventListener("click", () => openDialog(aboutDialog));
document
  .querySelector("#about-works")
  .addEventListener("click", () => aboutDialog.close());
document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;
    const controls = [...dialog.querySelectorAll("button, a[href]")].filter(
      (element) => !element.disabled && element.getClientRects().length,
    );
    const first = controls[0];
    const last = controls.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  });
  dialog
    .querySelector(".close-dialog")
    .addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    const box = dialog.getBoundingClientRect();
    if (
      event.clientX < box.left ||
      event.clientX > box.right ||
      event.clientY < box.top ||
      event.clientY > box.bottom
    )
      dialog.close();
  });
  dialog.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");
    returnFocus?.focus({ preventScroll: true });
  });
});

const wave = createWave(
  document.querySelector("#wave"),
  () => paused || photoDialog.open || aboutDialog.open,
);
reducedMotion.addEventListener("change", () => {
  paused = reducedMotion.matches;
  wave?.render();
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting) return;
      if (!paused)
        target.animate(
          [
            {
              transform: "translateY(35px)",
              filter: "blur(3px)",
              opacity: 0.65,
              clipPath: "inset(0 0 8% 0)",
            },
            {
              transform: "translateY(0)",
              filter: "blur(0)",
              opacity: 1,
              clipPath: "inset(0)",
            },
          ],
          { duration: 1000, easing: "cubic-bezier(.16,1,.3,1)" },
        );
      observer.unobserve(target);
    });
  },
  { threshold: 0.08 },
);
document.querySelectorAll(".work").forEach((work) => observer.observe(work));
