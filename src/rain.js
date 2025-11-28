const rainOverlay = document.querySelector('.rain-overlay');

for(let i=0; i<100; i++){
  const drop = document.createElement('div');
  drop.classList.add('rain-drop');
  drop.style.left = Math.random() * 100 + 'vw';
  drop.style.animationDuration = (0.5 + Math.random() * 1.5) + 's';
  drop.style.height = (10 + Math.random() * 120) + 'px';
  rainOverlay.appendChild(drop);
}
