const id = [1, 2, 3, 4]
localStorage.setItem("id", JSON.stringify(id))

const btn = document.querySelector('#queue')

btn.addEventListener('click', btnRenderQueueList)

function btnRenderQueueList() {
    console.log(localStorage.getItem(id))
}