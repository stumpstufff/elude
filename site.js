// Fade sections in as they scroll into view, staggered within each group
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const sibs = [...el.parentElement.children].filter(c => c.classList.contains('reveal'));
    el.style.transitionDelay = (Math.max(0, sibs.indexOf(el)) * 110) + 'ms';
    el.classList.add('in');
    io.unobserve(el);
  });
}, { threshold: 0.2 });
document.querySelectorAll('.reveal, .rule').forEach(el => io.observe(el));

document.querySelectorAll('.yr').forEach(el => el.textContent = new Date().getFullYear());
