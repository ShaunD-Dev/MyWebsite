const cards = document.querySelectorAll('.liquid-glass');

cards.forEach(card => {
  card.addEventListener('click', () => {
    if (card.classList.contains('active')) {
      card.classList.remove('active'); // collapse if already active
    } else {
      cards.forEach(c => c.classList.remove('active')); // collapse others
      card.classList.add('active'); // expand this one
    }
  });
});
