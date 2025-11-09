// Gestion du flip des cartes info
const infoCards = document.querySelectorAll('.info-card');

infoCards.forEach(card => {
  card.addEventListener('click', function() {
    this.classList.toggle('flipped');
  });
});

// Animation des cartes au scroll
const cards = document.querySelectorAll('.card');
const mainSection = document.querySelector('.main-section');

function animateCards() {
  if (!mainSection) return;
  
  const sectionRect = mainSection.getBoundingClientRect();
  const scrollProgress = -sectionRect.top / (sectionRect.height - window.innerHeight);
  
  // Animation se déclenche plus tôt (à 0% au lieu de 5%)
  if (scrollProgress >= 0) {
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('show');
      }, index * 100);
    });
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCards();
    }
  });
}, { 
  threshold: 0,
  rootMargin: '200px 0px 0px 0px'
});

if (mainSection) {
  observer.observe(mainSection);
}

let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      animateCards();
      ticking = false;
    });
    ticking = true;
  }
});

setTimeout(animateCards, 100);
-->