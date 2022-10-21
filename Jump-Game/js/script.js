const sonic = document.querySelector('.sonic');
const motobug = document.querySelector('.motobug');

const jump = () => {
  sonic.classList.add('jump');

  setTimeout(() => {
    sonic.classList.remove('jump');
  }, 500);
};

const loop = setInterval(() => {
  const motobugPosition = motobug.offsetLeft;
  const sonicPosition = +window
    .getComputedStyle(sonic)
    .bottom.replace('px', '');

  if (motobugPosition <= 120 && motobugPosition > 0 && sonicPosition < 80) {
    motobug.style.animation = 'none';
    motobug.style.left = `${motobugPosition}px`;

    sonic.style.animation = 'none';
    sonic.style.bottom = `${sonicPosition}px`;

    sonic.src = './images/game-over.png';
    sonic.style.width = '75px';
    sonic.style.marginLeft = '50px';

    clearInterval(loop);
  }
}, 10);

document.addEventListener('keydown', jump);