function Quiz (questions) {
	this.questions = questions;
	this.badge = 0;
	this.currentQuestionIndex = 0;
}

Quiz.prototype.guess = function(answer) {
	if(this.getCurrentQuestion().isCorrectAnswer(answer)) {
		this.badge++;
		QuizUI.removeQuiz('quiz', 'quizCard');
	};
	this.currentQuestionIndex++;
};

Quiz.prototype.getCurrentQuestion = function() {
	return this.questions[this.currentQuestionIndex];
};

Quiz.prototype.hasEnded = function() {
	return this.currentQuestionIndex >= this.questions.length;
};


function Question (title, text, choices, answer) {
	this.title = title;
	this.text = text;
	this.choices = choices;
	this.answer = answer;
};

Question.prototype.isCorrectAnswer = function(choice) {
	return this.answer === choice;
};

var QuizUI = {
	updateQuiz: function() {
		if(!quiz.getCurrentQuestion().isCorrectAnswer(quiz.getCurrentQuestion().answer)) {
			var looser = '<h1>GAME OVER</h1>';
			looser += '<h2> You ' + quiz.lostReason;
			document.getElementById('main').innerHTML = looser;
		} else {
			document.getElementById('quizTitle').innerHTML = quiz.getCurrentQuestion().title;
			document.getElementById('question').innerHTML = quiz.getCurrentQuestion().text;
			this.addChoices();        
		}
		 
	},
	addChoices: function() {
		var choicesDiv = document.getElementById("choices");
		var choices = quiz.getCurrentQuestion().choices;
		var choicesHTML = '';
		for(var i = 0; i < choices.length; i++) {			
			choicesHTML += '<p id="choice' + i + '">';
			choicesHTML += choices[i];
			choicesHTML += '</p>';
			choicesHTML += '<button id="guess' + i + '" class="btn btn-lg">Select Answer</button>';
		};
		choicesDiv.innerHTML += choicesHTML;
		this.uphandlersDisplayChoices();
		this.skipHandler();
	},
	uphandlersDisplayChoices: function() {
		var choices = quiz.getCurrentQuestion().choices;
		for(var i = 0; i < choices.length; i++) {
			this.guessHandler('guess' + i, choices[i]);	
		};
	},
	guessHandler: function(id, guess) {
		var button = document.getElementById(id);
		button.onclick = function() {
			quiz.guess(guess);
		};
	},
	removeQuiz: function(parentId, childId) {
		var parent = document.getElementById(parentId);
		var child = document.getElementById(childId);
		parent.removeChild(child);
	},
	skipHandler: function() {
		var skip = document.getElementById('skip');
		var referenceToQuizUI = this;
		skip.onclick = function() {
			referenceToQuizUI.removeQuiz('quiz', 'quizCard');
		};
	}
};