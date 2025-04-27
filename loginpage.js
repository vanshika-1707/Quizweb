document.addEventListener('DOMContentLoaded', function() {
    // Form Validation
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
  
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger?.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  
    // Dropdown Menu for Mobile
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
          this.classList.toggle('active');
          e.preventDefault();
        }
      });
    });
  
    // Form Validation Functions
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    }
  
    function validatePassword(password) {
      return password.length >= 6;
    }
  
    if (loginForm) {
      loginForm.addEventListener('submit', function(e) {
        let isValid = true;
