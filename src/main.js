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
let returnFocus;

function photo(work, eager = false) {
  const frame = document.createElement("div");
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
  article.innerHTML = `<button class="work-open" aria-label="Открыть: ${work.title}"><span class="photo-slot"></span><span class="work-meta">${String(index + 1).padStart(2, "0")} / ${work.category}</span><span class="work-heading"><span class="work-title">${work.title}</span><i class="ph ph-arrow-right" aria-hidden="true"></i></span></button><p class="work-description">${work.description}</p>`;
  article.querySelector(".photo-slot").replaceWith(photo(work, index < 2));
  article
    .querySelector(".work-open")
    .addEventListener("click", () => openPhoto(index));
  document.querySelector("#works").append(article);
});

function renderPhoto() {
  const work = works[current];
  document.querySelector(".viewer-photo").replaceChildren(photo(work, true));
  document.querySelector("#photo-title").textContent = work.title;
  document.querySelector(".viewer-category").textContent = work.category;
  document.querySelector(".viewer-description").textContent = work.description;
  document.querySelector(".viewer-count").textContent =
    `${current + 1} / ${works.length}`;
}
function openDialog(dialog) {
  returnFocus = document.activeElement;
  document.body.classList.add("dialog-open");
  dialog.showModal();
}
function openPhoto(index) {
  current = index;
  renderPhoto();
  openDialog(photoDialog);
}
function navigate(direction) {
  current = (current + direction + works.length) % works.length;
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
const motionButton = document.querySelector(".motion-toggle");
function updateMotionButton() {
  motionButton.setAttribute("aria-pressed", String(paused));
  motionButton.setAttribute(
    "aria-label",
    paused ? "Включить анимацию" : "Приостановить анимацию",
  );
  motionButton.innerHTML = `<i class="ph ph-${paused ? "play" : "pause"}" aria-hidden="true"></i><span>${paused ? "Движение" : "Пауза"}</span>`;
  document.documentElement.classList.toggle("motion-paused", paused);
  wave?.render();
}
motionButton.addEventListener("click", () => {
  paused = !paused;
  updateMotionButton();
});
reducedMotion.addEventListener("change", () => {
  paused = reducedMotion.matches;
  updateMotionButton();
});
updateMotionButton();

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
