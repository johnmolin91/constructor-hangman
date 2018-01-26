var inquirer = require("inquirer");
var Word = require('./Word.js');
var Letter = require('./Letter.js');

var words = ['oliver', 'flume', 'yotto', 'vaults'];

var word = words[Math.floor(Math.random()*words.length)];

var play = new Word(word);
var guessesNum = 7;

var playGame = function() {
	inquirer.prompt([{
		type:"input",
		name:"guess",
		message:"What is your next guess?"
	}]).then(function(answers){
		if (play.isLetterInWord(answers.guess)){
			play.updateLetter(answers.guess);
		};
		if ((play.isLetterInWord(answers.guess == false))){
			console.log("That letter was not in the word. Choose another.");
			guessesNum -= 1;
			console.log(guessesNum);
		};

		play.makeAndPushLettersIntoWord();
			play.checkWon();
			play.display();
			playGame();
	});
};

playGame();