document.addEventListener('mousemove', e => {
  if (e.target.matches('.card')) {
    const card = e.target;
    const { top, left } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const circle = document.createElement('aside');
    circle.classList.add('circle');
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    card.appendChild(circle);
    circle.addEventListener('animationend', _ => {
      circle.remove();
    });
  }
});
