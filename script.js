document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('.nav-menu');

  // Toggle menu function
  function toggleMenu() {
    hamburgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
  }

  // Hamburger menu click event
  hamburgerMenu.addEventListener('click', toggleMenu);

  // Close menu when a menu item is clicked
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', toggleMenu);
  });

  // Optional: Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
      hamburgerMenu.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
});