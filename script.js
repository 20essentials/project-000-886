function moveCirclesRipple(e) {
  if (e.target.matches('.card')) {
    const { clientX, clientY } = e.type === 'mousemove' ? e : e.touches[0];
    const card = e.target;
    const { top, left } = card.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    const circle = document.createElement('aside');
    circle.classList.add('circle');
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    card.appendChild(circle);
    circle.addEventListener('animationend', _ => {
      circle.remove();
    });
  }
}

document.addEventListener('mousemove', moveCirclesRipple);
document.addEventListener('touchstart', () => {
  document.addEventListener('touchmove', moveCirclesRipple);
});
