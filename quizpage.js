document.addEventListener('DOMContentLoaded', function() {
    // Quiz questions
    const quizQuestions = [
      {
        question: "Which programming language is primarily used for client-side web development?",
        options: ["Java", "Python", "JavaScript", "Ruby"],
        answer: 2
      },
      {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Multi Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"],
        answer: 0
      },
      {
        question: "Which of the following is NOT a JavaScript framework or library?",
        options: ["React", "Angular", "Django", "Vue"],
        answer: 2
      },
      {
        question: "Which CSS property is used to change the text color of an element?",
        options: ["text-color", "color", "font-color", "text-style"],
        answer: 1
      },
      {
        question: "What does CSS stand for?",
        options: ["Creative Style Sheets", "Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
        answer: 2
      },
      {
        question: "Which HTML tag is used to create an unordered list?",
        options: ["<ol>", "<li>", "<ul>", "<list>"],
        answer: 2
      },
      {
        question: "Which method is used to add elements at the end of an array in JavaScript?",
        options: ["push()", "append()", "add()", "insert()"],
        answer: 0
      },
      {
        question: "In CSS, which property is used to control the space between elements?",
        options: ["spacing", "margin", "padding", "border"],
        answer: 1
      },
      {
        question: "Which of the following is a valid way to comment in JavaScript?",
        options: ["# This is a comment", "// This is a comment", "<!-- This is a comment -->", "** This is a comment **"],
        answer: 1
      },
      {
        question: "Which attribute is used to provide a unique name to an HTML element?",
        options: ["class", "id", "name", "title"],
        answer: 1
      },
      {
        question: "Which of these is NOT a valid JavaScript data type?",
        options: ["String", "Boolean", "Float", "Undefined"],
        answer: 2
      },
      {
        question: "Which CSS property is used to make text bold?",
        options: ["text-weight", "font-weight", "text-style", "font-style"],
        answer: 1
      },
      {
        question: "Which symbol is used for single-line comments in CSS?",
        options: ["//", "/* */", "#", "<!---->"],
        answer: 1
      },
      {
        question: "In JavaScript, which function is used to parse a string to an integer?",
        options: ["Integer.parse()", "parseInteger()", "parseInt()", "toInt()"],
        answer: 2
      },
      {
        question: "Which HTML tag is used to define a table?",
        options: ["<table>", "<tab>", "<tb>", "<tr>"],
        answer: 0
      },
      {
        question: "Which CSS property is used to create rounded corners?",
        options: ["corner-radius", "border-round", "border-radius", "rounded-corners"],
        answer: 2
      },
      {
        question: "Which JavaScript method is used to remove the last element from an array?",
        options: ["pop()", "remove()", "delete()", "splice()"],
        answer: 0
      },
      {
        question: "What does the 'z-index' property control in CSS?",
        options: ["Text size", "Element width", "Element stacking order", "Background color"],
        answer: 2
      },
      {
        question: "Which HTML tag is used to add a JavaScript file to a webpage?",
        options: ["<javascript>", "<js>", "<scripting>", "<script>"],
        answer: 3
      },
      {
        question: "Which method is used to round a number to the nearest integer in JavaScript?",
        options: ["Math.floor()", "Math.round()", "Math.ceil()", "Math.random()"],
        answer: 1
      }
    ];
    // DOM elements
    const quizContainer = document.getElementById('quiz-container');
    const resultsContainer = document.getElementById('results-container');
    const progressBar = document.getElementById('progress-bar');
    const questionNumber = document.getElementById('question-number');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const scoreValue = document.getElementById('score-value');
    const scoreMessage = document.getElementById('score-message');
    const reviewContainer = document.getElementById('review-container');
    const retryBtn = document.getElementById('retry-btn');
    const homeBtn = document.getElementById('home-btn');
    const timer = document.getElementById('timer');
  
    // Quiz state
    let currentQuestionIndex = 0;
    let userAnswers = new Array(quizQuestions.length).fill(null);
    let startTime;
    let timerInterval;
  
    // Initialize quiz
    function initQuiz() {
      startTime = new Date();
      timerInterval = setInterval(updateTimer, 1000);
      showQuestion(currentQuestionIndex);
      updateProgressBar();
      
      // Add event listeners
      prevBtn.addEventListener('click', goToPreviousQuestion);
      nextBtn.addEventListener('click', goToNextQuestion);
      submitBtn.addEventListener('click', submitQuiz);
      retryBtn.addEventListener('click', retryQuiz);
      homeBtn.addEventListener('click', () => window.location.href = 'index.html');
    }
  
    // Show current question
    function showQuestion(index) {
      const question = quizQuestions[index];
      questionText.textContent = question.question;
      questionNumber.textContent = Question ${index + 1} of ${quizQuestions.length};
      
      // Clear options
      optionsContainer.innerHTML = '';
      
      // Add options
      question.options.forEach((option, i) => {
        const optionEl = document.createElement('div');
        optionEl.classList.add('option');
        optionEl.textContent = option;
        
        if (userAnswers[index] === i) {
          optionEl.classList.add('selected');
        }
        
        optionEl.addEventListener('click', () => {
          selectOption(index, i);
        });
        
        optionsContainer.appendChild(optionEl);
      });
      
      // Update navigation buttons
      prevBtn.disabled = index === 0;
      
      if (index === quizQuestions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
      } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
      }
    }
  
    // Select an option
   
// Retry quiz
    function retryQuiz() {
      currentQuestionIndex = 0;
      userAnswers = new Array(quizQuestions.length).fill(null);
      
      // Reset timer
      startTime = new Date();
      timerInterval = setInterval(updateTimer, 1000);
      
      // Show quiz, hide results
      quizContainer.style.display = 'block';
      resultsContainer.style.display = 'none';
      
      // Show first question
      showQuestion(currentQuestionIndex);
      updateProgressBar();
    }
  
    // Initialize the quiz
    initQuiz();
  });
  
