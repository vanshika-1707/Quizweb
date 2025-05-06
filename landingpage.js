const heroTyped = document.getElementById('hero-typed');
const headline = "Challenge Your Mind\nwith QuizMaster";
let idx = 0;
function typeHeadline() {
  if (idx < headline.length) {
    if (headline[idx] === "\n") {
      heroTyped.innerHTML += "<br>";
    } else {
      heroTyped.innerHTML += headline[idx];
    }
    idx++;
    setTimeout(typeHeadline, 55);
  }
}
typeHeadline();

// Ripple effect for CTA
document.querySelectorAll('.ripple').forEach(btn => {
  btn.addEventListener('click', function(e) {
    let ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    ripple.style.left = e.offsetX + 'px';
    ripple.style.top = e.offsetY + 'px';
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 500);
  });
});

// Mini Quiz Widget Interactivity
const miniQuiz = document.getElementById('miniQuiz');
const miniQuizFeedback = document.getElementById('miniQuizFeedback');
miniQuiz.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', function() {
    miniQuiz.querySelectorAll('button').forEach(b => b.disabled = true);
    if (this.dataset.correct === "true") {
      this.classList.add('correct');
      miniQuizFeedback.textContent = "Correct! 🎉";
      miniQuizFeedback.style.color = "#10b981";
    } else {
      this.classList.add('incorrect');
      miniQuizFeedback.textContent = "Oops! Try again next time.";
      miniQuizFeedback.style.color = "#ef4444";
      // Highlight correct
      miniQuiz.querySelector('button[data-correct="true"]').classList.add('correct');
    }
  });
});
const floatingQuiz = document.createElement('div');
floatingQuiz.className = 'floating-quiz';
floatingQuiz.innerHTML = `
  <div class="floating-quiz-content">
    <h3>Quick Quiz</h3>
    <p class="floating-question"></p>
    <div class="floating-options"></div>
    <button class="close-quiz">×</button>
  </div>
`;
document.body.appendChild(floatingQuiz);

const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correct: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correct: 1
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Van Gogh", "Picasso", "Da Vinci", "Michelangelo"],
    correct: 2
  }
];

function showRandomQuiz() {
  const randomQuestion = quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
  floatingQuiz.querySelector('.floating-question').textContent = randomQuestion.question;
  
  const optionsDiv = floatingQuiz.querySelector('.floating-options');
  optionsDiv.innerHTML = '';
  
  randomQuestion.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
button.addEventListener('click', () => {
      if (index === randomQuestion.correct) {
        button.classList.add('correct');
        setTimeout(() => floatingQuiz.classList.remove('active'), 1000);
      } else {
        button.classList.add('incorrect');
      }
    });
    optionsDiv.appendChild(button);
  });
  
  floatingQuiz.classList.add('active');
}

// Show floating quiz every 30 seconds
setInterval(showRandomQuiz, 30000);

// Close quiz button
floatingQuiz.querySelector('.close-quiz').addEventListener('click', () => {
  floatingQuiz.classList.remove('active');
});

// Active Users Counter
const userCounter = document.createElement('div');
userCounter.className = 'user-counter';
userCounter.innerHTML = '<span class="counter-number">0</span> users online';
document.querySelector('.hero-left').appendChild(userCounter);

let currentUsers = 0;
function updateUserCounter() {
  currentUsers += Math.floor(Math.random() * 3) - 1;
  currentUsers = Math.max(0, currentUsers);
  userCounter.querySelector('.counter-number').textContent = currentUsers;
  setTimeout(updateUserCounter, 3000);
}
updateUserCounter();

// Smooth Scroll for Navigation
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Hero Illustration Hover Effect
const heroIllustration = document.querySelector('.hero-illustration');
heroIllustration.addEventListener('mouseover', () => {
  heroIllustration.style.transform = 'scale(1.05) rotate(2deg)';
});
heroIllustration.addEventListener('mouseout', () => {
  heroIllustration.style.transform = 'scale(1) rotate(0deg)';
});

// Dynamic Background Animation
const animatedBg = document.querySelector('.animated-bg');
function updateBackground() {
  const hue = (Date.now() / 10000) % 360;
  animatedBg.style.background = `linear-gradient(${hue}deg, #4f46e5, #7c3aed)`;
  requestAnimationFrame(updateBackground);
}
updateBackground();
