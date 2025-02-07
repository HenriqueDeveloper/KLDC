document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('.nav-menu');

  // Toggle menu function with enhanced interactivity
  function toggleMenu() {
    hamburgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');

    // Animate menu items
    const menuItems = navMenu.querySelectorAll('li');
    menuItems.forEach((item, index) => {
      if (navMenu.classList.contains('active')) {
        item.style.transitionDelay = `${index * 0.1}s`;
        item.style.opacity = '0';
        item.style.transform = 'translateX(30px)';
        
        // Stagger the entrance animation
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateX(0)';
        }, index * 100);
      } else {
        item.style.opacity = '0';
        item.style.transform = 'translateX(30px)';
      }
    });
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