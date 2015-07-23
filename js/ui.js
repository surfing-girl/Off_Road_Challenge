var questions = [
	new Question('W lesie', 'Jak uwolnić samochód z kamienia?', ['Użyć lewarka', 'Gazować i wtedy samochód się zsunie'], 'Użyć lewarka'),
	new Question('Zjazd ze zbocza', 'Jak prawidlowo zjechac ze stromego zbocza?', ['Na wprost z 2 biegiem', 'Zygzakiem na hamulcu'], 'Na wprost z 2 biegiem'),
	new Question('Ugrzązłeś w bagnie', 'Jak najlatwiej sie wydostac?', ['wolac o pomoc', 'uzyc wyciagarki'], 'uzyc wyciagarki')
];
var dice = new Dice(3);
var quiz = new Quiz(questions);



function printHTML (id, text) {
	var element = document.getElementById(id);
	element.innerHTML = text;
}

var dice_button = document.getElementById("diceButton");

dice_button.onclick = function() {
	var result = dice.roll();
	printHTML('dice', result); 
};

QuizUI.updateQuiz();
