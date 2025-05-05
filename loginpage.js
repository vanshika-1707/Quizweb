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
 if (!validateEmail(emailInput.value)) {
          emailError.textContent = 'Please enter a valid email address';
          emailInput.classList.add('error');
          isValid = false;
        } else {
          emailError.textContent = '';
          emailInput.classList.remove('error');
        }
        
        // Validate Password
        if (!validatePassword(passwordInput.value)) {
          passwordError.textContent = 'Password must be at least 6 characters';
          passwordInput.classList.add('error');
          isValid = false;
        } else {
          passwordError.textContent = '';
          passwordInput.classList.remove('error');
        }
        
        if (!isValid) {
          e.preventDefault();
        } else {
          // For demo purposes - normally this would submit to a server
          e.preventDefault();
          showLoginSuccess();
        }
      });
    }
  
    // Show Login Success Message
    function showLoginSuccess() {
      const loginBtn = document.querySelector('.login-btn');
      loginBtn.textContent = 'Logging in...';
      
      setTimeout(() => {
        loginBtn.textContent = 'SUCCESS!';
        loginBtn.style.backgroundColor = '#10B981';
        
        // Redirect to quizpage.html after successful login
        setTimeout(() => {
          window.location.href = './quizpage.html';
        }, 1000);
      }, 1500);
    }
  
    // Add interactive animations
    function addInteractiveEffects() {
      // Form fields animation
      const formInputs = document.querySelectorAll('input[type="email"], input[type="password"]');
      
      formInputs.forEach(input => {
        input.addEventListener('focus', function() {
          this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
          if (this.value === '') {
            this.parentElement.classList.remove('focused');
          }
        });
      });
      
      // Quiz categories hover effect
      const categoryLinks = document.querySelectorAll('.dropdown-content a');
      
      categoryLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
          this.style.transform = 'translateX(5px)';
        });
        
        link.addEventListener('mouseleave', function() {
          this.style.transform = 'translateX(0)';
        });
      });
    }
    
    addInteractiveEffects();
    
    // Quiz related functionality
    const quizLinks = document.querySelectorAll('.dropdown-content a');
    
    quizLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // This would normally navigate to the quiz page
        // For demo, we'll just log the action
        console.log(`Selected: ${this.textContent}`);
        
        // For "Start Quiz" option, we could show a quiz selector
        if (this.textContent === 'Start Quiz') {
          e.preventDefault();
          alert('Quiz selection coming soon!');
        }
      });
    });
  });
