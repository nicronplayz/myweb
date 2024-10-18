function createRain() {
  const container = document.querySelector('.rain-container');
  for (let i = 0; i < 100; i++) {
    const drop = document.createElement('div');
    drop.classList.add('rain-drop');
    drop.style.left = `${Math.random() * 100}vw`;
    drop.style.animationDelay = `${Math.random() * 0.5}s`;
    container.appendChild(drop);
  }
}

window.onload = createRain;
