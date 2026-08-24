// src/utils/scroll.js
// Custom fast smooth-scrolling utility with quadratic ease-out

export const scrollToSection = (targetId, offset = 90) => {
  const element = document.getElementById(targetId);
  if (!element) return;

  const start = window.pageYOffset || document.documentElement.scrollTop;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const absoluteElementPosition = elementRect - bodyRect;
  const end = absoluteElementPosition - offset;
  const change = end - start;
  const duration = 280; // snappy 280ms duration
  let startTimestamp = null;

  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const elapsed = timestamp - startTimestamp;
    
    // Snappy quadratic ease-out transition
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = progress * (2 - progress);
    
    window.scrollTo(0, start + change * easeProgress);

    if (elapsed < duration) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};
