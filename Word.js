var Letter = require('./Letter.js');

var words = ['oliver', 'flume', 'yotto', 'vaults'];

var word = words[Math.floor(Math.random()*words.length)];

function Word(word) {
	this.word = word; // current word
	this.letters = []; // letters in the word
	this.guesses = 7; // number of guesses
	this.wrongGuesses = []; // wrong guesses
	console.log(word);
}

Word.prototype.makeAndPushLettersIntoWord = function() {
	for (var i = 0; i < this.word.length; i++) {
		var lett = new Letter(this.word[i]);
		this.letters.push(lett);
	}
}

// display() function comes from Letter.js
Word.prototype.display = function(){
	var str = "";
	for (var i = 0; i < this.letters.length; i++) {
		str = str + this.letters[i].display();
	}

	return str;
}

Word.prototype.updateLetter = function(guess){
	for (var i = 0; i < this.letters.length; i++) {
		if (this.letters[i].letter == guess) this.letters[i].found = true;
	}
}

Word.prototype.checkWon = function(){
	for (var i=0; i < this.letters.length; i++) {
		if (this.letters[i].found == false) return false;
	}

	return true;
}

Word.prototype.isLetterInWord = function(lett){
	return this.word.indexOf(lett) > -1;
}

module.exports = Word;



// To finish this project, I need to display the word properly after each guess, and log how many guesses the user has after each wrong guess.