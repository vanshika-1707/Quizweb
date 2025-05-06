// Demo data for user's quizzes (replace with server data in real projects)
const quizzes = [
    {
      id: 1,
      title: "JavaScript Basics",
      category: "Technology",
      created: "2025-04-20",
      attempts: 3,
      bestScore: 90,
      progress: 100,
    },
    {
      id: 2,
      title: "World History",
      category: "History",
      created: "2025-04-10",
      attempts: 1,
      bestScore: 70,
      progress: 50,
    },
    {
      id: 3,
      title: "Science Facts",
      category: "Science",
      created: "2025-03-28",
      attempts: 0,
      bestScore: null,
      progress: 0,
    }
  ];
  function renderQuizzes() {
    const quizList = document.getElementById('quizList');
    const noQuizzes = document.getElementById('noQuizzes');
    quizList.innerHTML = '';
  
    if (quizzes.length === 0) {
      quizList.style.display = "none";
      noQuizzes.style.display = "block";
      return;
    }
    quizList.style.display = "grid";
    noQuizzes.style.display = "none";
  
    quizzes.forEach((quiz, idx) => {
      const card = document.createElement('div');
      card.className = 'quiz-card';
  
      card.innerHTML = `
        <div class="quiz-title-row">
          <div class="quiz-title">${quiz.title}</div>
          <div class="quiz-category">${quiz.category}</div>
        </div>
        <div class="quiz-meta">Created: ${quiz.created}</div>
        <div class="quiz-meta">Attempts: ${quiz.attempts} | Best Score: ${quiz.bestScore !== null ? quiz.bestScore + "%" : "N/A"}</div>
        <div class="quiz-progress-bar">
          <div class="quiz-progress" style="width: ${quiz.progress}%"></div>
        </div>
        <div class="quiz-actions">
          <button class="view-btn" onclick="viewQuiz(${quiz.id})">View</button>
          <button class="edit-btn" onclick="editQuiz(${quiz.id})">Edit</button>
          <button class="delete-btn" onclick="deleteQuiz(${quiz.id}, this)">Delete</button>
        </div>
      `;
      quizList.appendChild(card);
    });
  }
    // Button actions (demo)
  function viewQuiz(id) {
    alert("View Quiz ID: " + id);
    // window.location.href = view-quiz.html?id=${id};
  }
  function editQuiz(id) {
    alert("Edit Quiz ID: " + id);
    // window.location.href = edit-quiz.html?id=${id};
  }
  function deleteQuiz(id, btn) {
    if (confirm("Are you sure you want to delete this quiz?")) {
      // Remove from quizzes array (in real app, send request to server)
      const idx = quizzes.findIndex(q => q.id === id);
      if (idx !== -1) quizzes.splice(idx, 1);
      renderQuizzes();
    }
  }
  
  // Render on page load
  document.addEventListener('DOMContentLoaded', renderQuizzes);
  

