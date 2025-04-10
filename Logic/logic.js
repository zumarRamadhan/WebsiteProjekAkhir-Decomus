$(document).ready(function(){
    tippy('.tippy', {
      theme: 'light',
      size: 'big',
      arrow: true
    })
});

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fade-in-up");

  function checkPosition() {
    const triggerBottom = window.innerHeight * 0.9;

    elements.forEach((el) => {
      const boxTop = el.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", checkPosition);

  checkPosition(); // initial check
});

document.addEventListener("DOMContentLoaded", () => {
  const zoomElements = document.querySelectorAll(".zoom-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        // observer.unobserve(entry.target); // Optional: hanya animasi sekali
      }
    });
  }, {
    threshold: 0.1
  });

  zoomElements.forEach(el => observer.observe(el));
});