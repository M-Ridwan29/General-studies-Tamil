// TNPSC General Tamil 2012-2025 Test Practice Application Logic
// Inspired by modern AWS Certification Exam & Practice Platforms

const AppState = {
  currentView: 'dashboard', // 'dashboard' | 'test' | 'bookmarks' | 'mistakes'
  testMode: 'exam',         // 'exam' (timed) | 'practice' (instant study)
  currentSet: null,
  questions: [],
  currentIndex: 0,
  userAnswers: {},          // { qNo: 'A' | 'B' | 'C' | 'D' | 'E' }
  flaggedQuestions: {},     // { qNo: boolean }
  visitedQuestions: new Set(),
  checkedQuestions: new Set(), // questions where answer has been revealed
  examTimer: null,
  timerSecondsLeft: 0,
  isPaused: false,
  selectedYear: 'all',
  searchQuery: '',
  theme: localStorage.getItem('tnpsc_theme') || 'light',
  bookmarks: JSON.parse(localStorage.getItem('tnpsc_bookmarks') || '[]'),
  mistakes: JSON.parse(localStorage.getItem('tnpsc_mistakes') || '[]'),
  history: JSON.parse(localStorage.getItem('tnpsc_history') || '[]')
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderDashboard();
  setupEventListeners();
  updateBookmarkAndMistakeBadges();
});

// Theme handling
function initTheme() {
  document.documentElement.setAttribute('data-theme', AppState.theme);
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.innerHTML = AppState.theme === 'dark' ? '☀️' : '🌙';
  }
}

function toggleTheme() {
  AppState.theme = AppState.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('tnpsc_theme', AppState.theme);
  initTheme();
}

// Event Listeners
function setupEventListeners() {
  // Brand click -> dashboard
  document.getElementById('brandLogo').addEventListener('click', () => {
    if (AppState.currentView === 'test') {
      if (confirm('தேர்விலிருந்து வெளியேற விரும்புகிறீர்களா? (Are you sure you want to exit test?)')) {
        clearInterval(AppState.examTimer);
        switchView('dashboard');
      }
    } else {
      switchView('dashboard');
    }
  });

  // Theme toggle
  document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);

  // Search input
  const searchInput = document.getElementById('setSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      AppState.searchQuery = e.target.value.toLowerCase();
      renderSetsGrid();
    });
  }

  // Dashboard Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const tab = e.currentTarget.dataset.tab;
      handleTabSwitch(tab);
    });
  });

  // Year filters
  document.querySelectorAll('.year-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      document.querySelectorAll('.year-pill').forEach(p => p.classList.remove('active'));
      e.currentTarget.classList.add('active');
      AppState.selectedYear = e.currentTarget.dataset.year;
      renderSetsGrid();
    });
  });

  // Test Navigation Controls
  document.getElementById('prevQuestionBtn').addEventListener('click', prevQuestion);
  document.getElementById('nextQuestionBtn').addEventListener('click', nextQuestion);
  document.getElementById('flagQuestionBtn').addEventListener('click', toggleFlagCurrentQuestion);
  document.getElementById('clearResponseBtn').addEventListener('click', clearCurrentResponse);
  document.getElementById('endExamBtn').addEventListener('click', promptSubmitExam);
  document.getElementById('revealAnswerBtn').addEventListener('click', toggleRevealAnswer);
  // Modal Submit Controls
  document.getElementById('confirmSubmitBtn').addEventListener('click', finalizeExam);
  document.getElementById('cancelSubmitBtn').addEventListener('click', closeModal);
  document.getElementById('closeResultBtn').addEventListener('click', () => {
    closeResultModal();
    switchView('dashboard');
  });
  document.getElementById('reviewExamBtn').addEventListener('click', () => {
    closeResultModal();
    // Switch to practice mode for reviewing answers
    AppState.testMode = 'practice';
    document.getElementById('testModeBadge').innerText = 'பயிற்சி முறை (Review Mode)';
    document.getElementById('revealAnswerBtn').style.display = 'inline-flex';
    // Reveal all answers in review mode
    AppState.questions.forEach(q => AppState.checkedQuestions.add(q.qNo));
    renderCurrentQuestion();
  });

  // Keyboard Shortcuts
  document.addEventListener('keydown', (e) => {
    if (AppState.currentView !== 'test') return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'n') {
      nextQuestion();
    } else if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'p') {
      prevQuestion();
    } else if (e.key.toLowerCase() === 'f') {
      toggleFlagCurrentQuestion();
    } else if (['1', '2', '3', '4', '5'].includes(e.key)) {
      const optionKeys = ['A', 'B', 'C', 'D', 'E'];
      selectOption(optionKeys[parseInt(e.key) - 1]);
    } else if (['a', 'b', 'c', 'd', 'e'].includes(e.key.toLowerCase())) {
      selectOption(e.key.toUpperCase());
    }
  });
}

// View Switching
function switchView(viewName) {
  AppState.currentView = viewName;
  document.getElementById('dashboardView').style.display = viewName === 'dashboard' ? 'block' : 'none';
  document.getElementById('testView').style.display = viewName === 'test' ? 'block' : 'none';

  const testHeader = document.getElementById('testHeaderElements');
  const endExamBtn = document.getElementById('endExamBtn');
  if (testHeader) {
    testHeader.style.display = viewName === 'test' ? 'flex' : 'none';
  }
  if (endExamBtn) {
    endExamBtn.style.display = viewName === 'test' ? 'inline-flex' : 'none';
  }

  if (viewName === 'dashboard') {
    renderSetsGrid();
    updateBookmarkAndMistakeBadges();
  }
}

// Tab Switching (Sets vs Bookmarks vs Mistakes)
function handleTabSwitch(tab) {
  const container = document.getElementById('setsGrid');
  if (tab === 'sets') {
    document.getElementById('filterBar').style.display = 'flex';
    renderSetsGrid();
  } else if (tab === 'bookmarks') {
    document.getElementById('filterBar').style.display = 'none';
    renderBookmarksList();
  } else if (tab === 'mistakes') {
    document.getElementById('filterBar').style.display = 'none';
    renderMistakesList();
  }
}

// Dashboard Rendering
function renderDashboard() {
  renderSetsGrid();
}

function renderSetsGrid() {
  const grid = document.getElementById('setsGrid');
  grid.innerHTML = '';

  const filteredSets = EXAM_SETS.filter(set => {
    const matchesYear = AppState.selectedYear === 'all' || String(set.year) === AppState.selectedYear;
    const matchesQuery = !AppState.searchQuery ||
      set.title.toLowerCase().includes(AppState.searchQuery) ||
      set.tamilTitle.toLowerCase().includes(AppState.searchQuery) ||
      set.code.toLowerCase().includes(AppState.searchQuery) ||
      String(set.year).includes(AppState.searchQuery);
    return matchesYear && matchesQuery;
  });

  if (filteredSets.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <h3>வினாத்தாள்கள் கிடைக்கவில்லை (No question sets matched)</h3>
        <p>தேடல் சொல்லை மாற்றி மீண்டும் முயற்சிக்கவும்.</p>
      </div>
    `;
    return;
  }

  filteredSets.forEach((set, index) => {
    const card = document.createElement('div');
    card.className = 'set-card';
    card.innerHTML = `
      <div>
        <div class="set-card-header">
          <span class="set-year-badge">${set.year} (${set.category})</span>
          <span class="set-code-badge">${set.code}</span>
        </div>
        <h3 class="set-title">${set.title}</h3>
        <p class="set-tamil-title">${set.tamilTitle}</p>
        <div class="set-meta">
          <span>📝 <strong>${set.totalQuestions}</strong> வினாக்கள்</span>
          <span>⏱️ <strong>${set.durationMinutes}</strong> நிமிடங்கள்</span>
          <span>📄 பக். <strong>${set.startPage} - ${set.endPage}</strong></span>
        </div>
      </div>
      <div class="set-actions">
        <button class="btn btn-primary" onclick="startExam('${set.id}', 'exam')">
          🚀 தேர்வு (Exam Mode)
        </button>
        <button class="btn btn-outline" onclick="startExam('${set.id}', 'practice')">
          📖 பயிற்சி (Practice)
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Render Bookmarks
function renderBookmarksList() {
  const grid = document.getElementById('setsGrid');
  grid.innerHTML = '';

  if (AppState.bookmarks.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem; color: var(--text-muted);">
        <h3>முக்கிய வினாக்கள் ஏதும் சேமிக்கப்படவில்லை (No Bookmarks Saved)</h3>
        <p>தேர்வு அல்லது பயிற்சியின் போது 'Bookmark' பொத்தானை அழுத்தி கடினமான வினாக்களைச் சேமிக்கலாம்.</p>
      </div>
    `;
    return;
  }

  AppState.bookmarks.forEach(bm => {
    const card = document.createElement('div');
    card.className = 'set-card';
    card.innerHTML = `
      <div>
        <div class="set-card-header">
          <span class="set-year-badge">${bm.year}</span>
          <span class="set-code-badge">${bm.paperCode} - வினா ${bm.qNo}</span>
        </div>
        <h3 class="set-title tamil-text">${bm.question}</h3>
        <p class="set-tamil-title">பக்கம்: ${bm.page} | தலைப்பு: ${bm.topic || 'பொதுத் தமிழ்'}</p>
        <div class="set-meta">
          <span>சரியான விடை: <strong>(${bm.answer})</strong></span>
        </div>
      </div>
      <div class="set-actions">
        <button class="btn btn-primary" onclick="practiceSingleQuestion('${bm.setId}', ${bm.qNo})">
          மீளப் பயிற்சி (Practice)
        </button>
        <button class="btn btn-outline" onclick="removeBookmark(${bm.qNo}, '${bm.setId}')">
          நீக்கு (Remove)
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Render Mistake Bank
function renderMistakesList() {
  const grid = document.getElementById('setsGrid');
  grid.innerHTML = '';

  if (AppState.mistakes.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem; color: var(--text-muted);">
        <h3>தவறு வங்கி காலியாக உள்ளது (No Mistakes Recorded)</h3>
        <p>தேர்வில் நீங்கள் தவறாகப் பதிலளிக்கும் வினாக்கள் தானாகவே இங்கு வந்து சேரும்.</p>
      </div>
    `;
    return;
  }

  AppState.mistakes.forEach(m => {
    const card = document.createElement('div');
    card.className = 'set-card';
    card.style.borderColor = 'rgba(239, 68, 68, 0.4)';
    card.innerHTML = `
      <div>
        <div class="set-card-header">
          <span class="set-year-badge" style="background: rgba(239,68,68,0.15); color: #ef4444;">தவறானது</span>
          <span class="set-code-badge">${m.paperCode} - வினா ${m.qNo}</span>
        </div>
        <h3 class="set-title tamil-text">${m.question}</h3>
        <p class="set-tamil-title">உங்கள் பதில்: <strong style="color: #ef4444;">(${m.userChoice})</strong> | சரியான விடை: <strong style="color: #10b981;">(${m.answer})</strong></p>
        <div class="set-meta">
          <span>பக்கம்: <strong>${m.page}</strong></span>
          <span>நாள்: <strong>${new Date(m.timestamp).toLocaleDateString()}</strong></span>
        </div>
      </div>
      <div class="set-actions">
        <button class="btn btn-primary" onclick="practiceSingleQuestion('${m.setId}', ${m.qNo})">
          மீண்டும் பயிற்சி (Retest)
        </button>
        <button class="btn btn-outline" onclick="removeMistake(${m.qNo}, '${m.setId}')">
          நீக்கு (Clear)
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Start Exam
function startExam(setId, mode = 'exam') {
  AppState.currentSet = EXAM_SETS.find(s => s.id === setId) || EXAM_SETS[0];
  AppState.testMode = mode;
  AppState.questions = getQuestionsForExamSet(setId);
  AppState.currentIndex = 0;
  AppState.userAnswers = {};
  AppState.flaggedQuestions = {};
  AppState.visitedQuestions = new Set();
  AppState.checkedQuestions = new Set();
  AppState.visitedQuestions.add(1);

  // UI Setup
  document.getElementById('currentExamTitle').innerText = AppState.currentSet.title;
  document.getElementById('testModeBadge').innerText = mode === 'exam' ? '⏱️ மாதிரித் தேர்வு (Exam Mode)' : '📖 பயிற்சி முறை (Practice Mode)';
  document.getElementById('revealAnswerBtn').style.display = mode === 'practice' ? 'inline-flex' : 'none';

  // Timer Setup
  if (mode === 'exam') {
    AppState.timerSecondsLeft = (AppState.currentSet.durationMinutes || 90) * 60;
    startTimer();
  } else {
    clearInterval(AppState.examTimer);
    document.getElementById('examTimerBox').innerText = 'பயிற்சி (Study)';
  }

  renderQuestionPalette();
  renderCurrentQuestion();
  switchView('test');
}

// Timer Functions
function startTimer() {
  clearInterval(AppState.examTimer);
  updateTimerDisplay();

  AppState.examTimer = setInterval(() => {
    if (AppState.timerSecondsLeft > 0) {
      AppState.timerSecondsLeft--;
      updateTimerDisplay();
      if (AppState.timerSecondsLeft === 600) { // 10 mins warning
        document.getElementById('examTimerBox').classList.add('warning');
        showToast('எச்சரிக்கை: இன்னும் 10 நிமிடங்களே உள்ளன! (10 Minutes Remaining!)');
      }
    } else {
      clearInterval(AppState.examTimer);
      alert('நேரம் முடிவடைந்தது! உங்கள் தேர்வு சமர்ப்பிக்கப்படுகிறது. (Time is up! Submitting exam.)');
      finalizeExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const timerBox = document.getElementById('examTimerBox');
  const mins = Math.floor(AppState.timerSecondsLeft / 60);
  const secs = AppState.timerSecondsLeft % 60;
  timerBox.innerText = `⏱️ ${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Render Current Question
function renderCurrentQuestion() {
  const q = AppState.questions[AppState.currentIndex];
  if (!q) return;

  AppState.visitedQuestions.add(q.qNo);

  // Update Question Header
  document.getElementById('questionBadge').innerText = `வினா எண்: ${q.qNo} / ${AppState.questions.length}`;
  
  // Flag button state
  const flagBtn = document.getElementById('flagQuestionBtn');
  const isFlagged = !!AppState.flaggedQuestions[q.qNo];
  flagBtn.className = isFlagged ? 'btn-flag flagged' : 'btn-flag';
  flagBtn.innerHTML = isFlagged ? '🚩 குறிக்கப்பட்டுள்ளது (Flagged)' : '🏳️ மீள்பார்வைக்குக் குறி (Flag)';

  // Bookmark button state
  const isBookmarked = AppState.bookmarks.some(b => b.qNo === q.qNo && b.setId === q.setId);
  const bmBtn = document.getElementById('bookmarkBtn');
  if (bmBtn) {
    bmBtn.innerHTML = isBookmarked ? '⭐ சேமிக்கப்பட்டது' : '☆ Bookmark';
    bmBtn.onclick = () => toggleBookmarkCurrentQuestion(q);
  }

  // Question Text
  document.getElementById('questionText').innerText = q.question;

  // Options
  const optionsContainer = document.getElementById('optionsContainer');
  optionsContainer.innerHTML = '';

  const selectedAnswer = AppState.userAnswers[q.qNo];
  const isPracticeMode = AppState.testMode === 'practice';
  const isChecked = isPracticeMode && AppState.checkedQuestions.has(q.qNo);

  ['A', 'B', 'C', 'D', 'E'].forEach(optKey => {
    if (q.options && q.options[optKey]) {
      const optDiv = document.createElement('div');
      optDiv.className = 'option-item';
      if (selectedAnswer === optKey) {
        optDiv.classList.add('selected');
      }
      if (isChecked) {
        if (optKey === q.answer) {
          optDiv.classList.add('correct-answer');
        } else if (selectedAnswer === optKey && selectedAnswer !== q.answer) {
          optDiv.classList.add('wrong-answer');
        }
      }

      optDiv.innerHTML = `
        <div class="option-key">${optKey}</div>
        <div class="option-text">${q.options[optKey]}</div>
      `;
      optDiv.addEventListener('click', () => selectOption(optKey));
      optionsContainer.appendChild(optDiv);
    }
  });

  // Explanation
  const expCard = document.getElementById('explanationCard');
  const expText = document.getElementById('explanationText');
  const revealBtn = document.getElementById('revealAnswerBtn');

  if (isChecked) {
    expCard.classList.add('show');
    expText.innerText = q.explanation || `சரியான விடை: (${q.answer})`;
    if (revealBtn) {
      revealBtn.innerText = 'விடையை மறை (Hide Answer)';
      revealBtn.className = 'btn btn-outline';
    }
  } else {
    expCard.classList.remove('show');
    expText.innerText = '';
    if (revealBtn) {
      revealBtn.innerText = 'விடை சரிபார் (Check Answer)';
      revealBtn.className = 'btn btn-success';
    }
  }

  // Navigation buttons state
  document.getElementById('prevQuestionBtn').disabled = AppState.currentIndex === 0;
  document.getElementById('nextQuestionBtn').innerText = AppState.currentIndex === AppState.questions.length - 1 ? 'முடிக்க (Finish)' : 'அடுத்த வினா (Next) →';

  updatePaletteItem(q.qNo);
}

// Select an option (Keep answer hidden until user decides to check)
function selectOption(key) {
  const q = AppState.questions[AppState.currentIndex];
  AppState.userAnswers[q.qNo] = key;
  renderCurrentQuestion();
}

// Clear current response
function clearCurrentResponse() {
  const q = AppState.questions[AppState.currentIndex];
  delete AppState.userAnswers[q.qNo];
  AppState.checkedQuestions.delete(q.qNo);
  renderCurrentQuestion();
}

// Toggle Flag
function toggleFlagCurrentQuestion() {
  const q = AppState.questions[AppState.currentIndex];
  AppState.flaggedQuestions[q.qNo] = !AppState.flaggedQuestions[q.qNo];
  renderCurrentQuestion();
}

// Toggle Reveal / Check Answer
function toggleRevealAnswer() {
  const q = AppState.questions[AppState.currentIndex];
  if (AppState.checkedQuestions.has(q.qNo)) {
    AppState.checkedQuestions.delete(q.qNo);
  } else {
    AppState.checkedQuestions.add(q.qNo);
    const userChoice = AppState.userAnswers[q.qNo];
    if (userChoice && userChoice !== q.answer) {
      recordMistake(q, userChoice);
    }
  }
  renderCurrentQuestion();
}

// Navigation
function nextQuestion() {
  if (AppState.currentIndex < AppState.questions.length - 1) {
    AppState.currentIndex++;
    renderCurrentQuestion();
  } else {
    promptSubmitExam();
  }
}

function prevQuestion() {
  if (AppState.currentIndex > 0) {
    AppState.currentIndex--;
    renderCurrentQuestion();
  }
}

function jumpToQuestion(qNo) {
  const idx = AppState.questions.findIndex(q => q.qNo === qNo);
  if (idx !== -1) {
    AppState.currentIndex = idx;
    renderCurrentQuestion();
  }
}

// Render Palette
function renderQuestionPalette() {
  const palette = document.getElementById('paletteGrid');
  palette.innerHTML = '';

  AppState.questions.forEach(q => {
    const btn = document.createElement('button');
    btn.className = 'palette-btn';
    btn.id = `palBtn_${q.qNo}`;
    btn.innerText = q.qNo;
    btn.addEventListener('click', () => jumpToQuestion(q.qNo));
    palette.appendChild(btn);
    updatePaletteItem(q.qNo);
  });
}

function updatePaletteItem(qNo) {
  const btn = document.getElementById(`palBtn_${qNo}`);
  if (!btn) return;

  const isCurrent = AppState.questions[AppState.currentIndex]?.qNo === qNo;
  const isAnswered = !!AppState.userAnswers[qNo];
  const isFlagged = !!AppState.flaggedQuestions[qNo];
  const isVisited = AppState.visitedQuestions.has(qNo);

  btn.className = 'palette-btn';
  if (isCurrent) btn.classList.add('current');

  if (isFlagged && isAnswered) {
    btn.classList.add('review-answered');
  } else if (isFlagged) {
    btn.classList.add('review');
  } else if (isAnswered) {
    btn.classList.add('answered');
  } else if (isVisited) {
    btn.classList.add('unanswered');
  }
}

// Submit Prompt Modal
function promptSubmitExam() {
  const total = AppState.questions.length;
  const answered = Object.keys(AppState.userAnswers).length;
  const flagged = Object.keys(AppState.flaggedQuestions).filter(k => AppState.flaggedQuestions[k]).length;
  const unanswered = total - answered;

  document.getElementById('modalTotalQuestions').innerText = total;
  document.getElementById('modalAnswered').innerText = answered;
  document.getElementById('modalUnanswered').innerText = unanswered;
  document.getElementById('modalFlagged').innerText = flagged;

  document.getElementById('submitModalOverlay').classList.add('show');
}

function closeModal() {
  document.getElementById('submitModalOverlay').classList.remove('show');
}

// Finalize Exam & Show Scorecard
function finalizeExam() {
  closeModal();
  clearInterval(AppState.examTimer);

  let correctCount = 0;
  let incorrectCount = 0;
  const total = AppState.questions.length;

  AppState.questions.forEach(q => {
    const userChoice = AppState.userAnswers[q.qNo];
    if (userChoice) {
      if (userChoice === q.answer) {
        correctCount++;
      } else {
        incorrectCount++;
        recordMistake(q, userChoice);
      }
    }
  });

  const unanswered = total - (correctCount + incorrectCount);
  const percentage = Math.round((correctCount / total) * 100);

  // Update Scorecard Modal
  document.getElementById('finalScoreVal').innerText = correctCount;
  document.getElementById('finalScoreTotal').innerText = `/ ${total} (${percentage}%)`;
  document.getElementById('resCorrectCount').innerText = correctCount;
  document.getElementById('resIncorrectCount').innerText = incorrectCount;
  document.getElementById('resUnansweredCount').innerText = unanswered;

  // Save in history
  AppState.history.push({
    setId: AppState.currentSet.id,
    setTitle: AppState.currentSet.title,
    date: new Date().toISOString(),
    score: correctCount,
    total: total,
    percentage: percentage
  });
  localStorage.setItem('tnpsc_history', JSON.stringify(AppState.history));

  document.getElementById('resultModalOverlay').classList.add('show');
}

function closeResultModal() {
  document.getElementById('resultModalOverlay').classList.remove('show');
}

// Bookmark Handling
function toggleBookmarkCurrentQuestion(q) {
  const existingIdx = AppState.bookmarks.findIndex(b => b.qNo === q.qNo && b.setId === q.setId);
  if (existingIdx !== -1) {
    AppState.bookmarks.splice(existingIdx, 1);
    showToast('வினா சேமிப்பிலிருந்து நீக்கப்பட்டது (Bookmark removed)');
  } else {
    AppState.bookmarks.push({
      qNo: q.qNo,
      setId: q.setId,
      paperCode: q.paperCode,
      year: q.year,
      question: q.question,
      answer: q.answer,
      page: q.page,
      topic: q.topic
    });
    showToast('வினா சேமிக்கப்பட்டது! (Bookmark added)');
  }
  localStorage.setItem('tnpsc_bookmarks', JSON.stringify(AppState.bookmarks));
  updateBookmarkAndMistakeBadges();
  renderCurrentQuestion();
}

function removeBookmark(qNo, setId) {
  AppState.bookmarks = AppState.bookmarks.filter(b => !(b.qNo === qNo && b.setId === setId));
  localStorage.setItem('tnpsc_bookmarks', JSON.stringify(AppState.bookmarks));
  renderBookmarksList();
  updateBookmarkAndMistakeBadges();
}

// Mistake Bank Handling
function recordMistake(q, userChoice) {
  const exists = AppState.mistakes.some(m => m.qNo === q.qNo && m.setId === q.setId);
  if (!exists) {
    AppState.mistakes.push({
      qNo: q.qNo,
      setId: q.setId,
      paperCode: q.paperCode,
      question: q.question,
      userChoice: userChoice,
      answer: q.answer,
      page: q.page,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('tnpsc_mistakes', JSON.stringify(AppState.mistakes));
    updateBookmarkAndMistakeBadges();
  }
}

function removeMistake(qNo, setId) {
  AppState.mistakes = AppState.mistakes.filter(m => !(m.qNo === qNo && m.setId === setId));
  localStorage.setItem('tnpsc_mistakes', JSON.stringify(AppState.mistakes));
  renderMistakesList();
  updateBookmarkAndMistakeBadges();
}

function updateBookmarkAndMistakeBadges() {
  const bmBadge = document.getElementById('bookmarksCountBadge');
  const misBadge = document.getElementById('mistakesCountBadge');
  if (bmBadge) bmBadge.innerText = AppState.bookmarks.length;
  if (misBadge) misBadge.innerText = AppState.mistakes.length;
}

// Single Question Practice (from Bookmarks / Mistakes)
function practiceSingleQuestion(setId, qNo) {
  startExam(setId, 'practice');
  jumpToQuestion(qNo);
}

// Toast notification
function showToast(msg) {
  const toast = document.getElementById('toastMsg');
  if (toast) {
    toast.innerText = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
  }
}
