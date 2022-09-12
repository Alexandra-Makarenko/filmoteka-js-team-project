const cards = document.querySelectorAll('.card');

function flipCard() {
  this.classList.toggle('is-flipped');
}

cards.forEach(card => card.addEventListener('click', flipCard));
