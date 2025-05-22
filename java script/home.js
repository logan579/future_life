// Mobile menu functionality
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.topnav');

menuToggle.addEventListener('click', function() {
  this.classList.toggle('active');
  mainNav.classList.toggle('active');
  this.setAttribute('aria-expanded', this.classList.contains('active'));
});

// Close menu when clicking on a link
document.querySelectorAll('.topnav a').forEach(link => {
  link.addEventListener('click', function() {
    menuToggle.classList.remove('active');
    mainNav.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});