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

