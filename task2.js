// script.js
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('.split-section');

  const updateParallax = () => {
      const scrollPosition = window.scrollY;

      sections.forEach((section, index) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          // Calculate the offset based on scroll position
          const offset = (scrollPosition - sectionTop) * 0.3;

          // Apply the transformation to create the split effect
          const imageContainer = section.querySelector('.image-container');
          const textOverlay = section.querySelector('.text-overlay');

          // Set transforms for splitting effect for both directions
          if (scrollPosition > sectionTop - sectionHeight && scrollPosition < sectionTop + sectionHeight) {
              imageContainer.style.transform = `translateX(${offset}px)`;
              textOverlay.style.transform = `translateX(${-offset}px)`;
          } else {
              imageContainer.style.transform = `translateX(0)`;
              textOverlay.style.transform = `translateX(0)`;
          }
      });
  };

  window.addEventListener('scroll', updateParallax);
  updateParallax(); // Initial call to set correct positions
});
