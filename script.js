const circleClip = document.querySelector('#bg');

function removeIntro() {
  circleClip.classList.remove('intro');
}

function circleMove(e) {
  removeIntro();
  circleClip.style.setProperty('--x', e.clientX + 'px');
  circleClip.style.setProperty('--y', e.clientY + 'px');
}

document.addEventListener('mousemove', circleMove);
circleClip.addEventListener('touchmove', (e) => {
  removeIntro();
  
  let touch = e.touches[0];
  e.preventDefault();
  
  circleClip.style.setProperty('--x', touch.clientX + 'px');
  circleClip.style.setProperty('--y', touch.clientY + 'px');
});