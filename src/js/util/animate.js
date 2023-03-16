const watch = () => {
  const targets = document.querySelectorAll('[data-animate]:not([data-animate="true"])');
  let done = false;

  [...targets].forEach((target) => {
    if (!done) {
      const pos = target.getBoundingClientRect();
      if (pos.top < window.innerHeight && pos.bottom > 0) {
        target.setAttribute('data-animate', 'true');
        done = true;
      }
    }
  });

  const delay = done ? 300 : 0;

  setTimeout(() => {
    requestAnimationFrame(watch);
  }, delay);
};

setTimeout(() => {
  watch();
}, 300);
