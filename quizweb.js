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
