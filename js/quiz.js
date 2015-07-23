function Quiz (questions) {
	this.questions = questions;
	this.badge = 0;
	this.currentQuestionIndex = 0;
}

Quiz.prototype.guess = function(answer) {
	if(this.getCurrentQuestion().isCorrectAnswer(answer)) {
		this.badge++;
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
	displayQuiz: function() {
		if(!quiz.getCurrentQuestion().isCorrectAnswer(quiz.getCurrentQuestion().answer)) {
			var looser = '<h1>GAME OVER</h1>';
			looser += '<h2> You ' + quiz.lostReason;
			printHTML('main', looser);
		} else {
			var quizHTML = '<div id="quizCard" class="col-md-12">';
			quizHTML += '<h1 id="quizTitle">' + quiz.getCurrentQuestion().title + '</h1>';
			quizHTML += '<h2 id="question">' + quiz.getCurrentQuestion().text + '</h2>';
			quizHTML += this.displayChoices();
			quizHTML += '<div id="skipButton" class="col-md-12">';
			quizHTML += '<button id="skip" class="btn btn-lg">Skip question</button>';
			quizHTML += '</div>';
		return quizHTML;             
		}
		 
	},
	displayChoices: function() {
		var choices = quiz.getCurrentQuestion().choices;
		var choicesHTML = '';
		for(var i = 0; i < choices.length; i++) {
			choicesHTML += '<p id="choice' + i + '">';
			choicesHTML += choices[i];
			choicesHTML += '</p>';
			choicesHTML += '<button id="guess' + i + '" class="btn btn-lg">Select Answer</button>';
			/*this.guessHandler('guess' + i, choices[i]);*/	
		};
		return choicesHTML;
	}
};