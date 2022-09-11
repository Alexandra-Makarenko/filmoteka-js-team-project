//заглушка айлішніків поки нема локального збереження
const id = [1, 2, 3, 4];
localStorage.setItem('id', JSON.stringify(id));

const refs = {
  btn: document.querySelector('#queue'),
};

refs.btn.addEventListener('click', btnRenderQueueList);

//рендер списку черги
function btnRenderQueueList() {
  console.log(localStorage.getItem('id'));
}
