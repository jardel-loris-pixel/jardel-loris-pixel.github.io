
// Gestion du flip des cartes info
const infoCards = document.querySelectorAll('.info-card');

infoCards.forEach(card => {
  card.addEventListener('click', function() {
    this.classList.toggle('flipped');
  });
});

