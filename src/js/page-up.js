import { offLoader, onLoader } from "./loader";
const btnUpTop = document.querySelector('.page-up');

window.addEventListener('scroll', followUpScroll);
btnUpTop.addEventListener('click', pageUp);

function followUpScroll() {
  onLoader();
  const scroll = window.pageYOffset;
  const coordinations = document.documentElement.clientHeight;

  if (scroll > coordinations) {
    btnUpTop.classList.add('btn-up-show');
  }
  if (scroll < coordinations) {
    btnUpTop.classList.remove('btn-up-show');
  }
  offLoader();
}

export function pageUp() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -30);
    setTimeout(pageUp, 0);
  }
}
