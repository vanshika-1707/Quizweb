const emojis = document.querySelectorAll('.emoji');
const ratingInput = document.getElementById('ratingInput');
const feedbackForm = document.getElementById('feedbackForm');
const feedbackSuccess = document.getElementById('feedbackSuccess');

// Emoji rating selection
emojis.forEach(emoji => {
  emoji.addEventListener('click', function() {
    emojis.forEach(e => e.classList.remove('selected'));
    this.classList.add('selected');
    ratingInput.value = this.getAttribute('data-value');
  });
});

// Form submission
feedbackForm.addEventListener('submit', function(e) {
  e.preventDefault();
  if (!ratingInput.value) {
    alert('Please select your satisfaction rating.');
    return;
  }
  feedbackForm.style.display = 'none';
  feedbackSuccess.style.display = 'block';
});
