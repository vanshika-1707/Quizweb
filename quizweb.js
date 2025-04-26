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
