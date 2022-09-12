const loaderContainer = document.querySelector('.loader-container');

const offLoader = () => {
  loaderContainer.classList.add('loader-hiden')
};
const onLoader = () => {
  loaderContainer.classList.remove('loader-hiden')
};

export { offLoader, onLoader };


// import { offLoader, onLoader } from "../js/loader";