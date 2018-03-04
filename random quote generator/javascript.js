function newQuote(){
	var quote = ["Don\'t cry because it\'s over, smile because it happened - Dr. Seuss",
	"I\'m selfish, impatient and a little insecure.\nI make mistakes, I am out of control and at times hard to handle. \nBut if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best - Marilyn Monroe",
	"Be yourself; everyone else is already taken - Oscar Wilde",
	"Two things are infinite: the universe and human stupidity;\nand I\'m not sure about the universe - Albert Einstein",
	"Be who you are and say what you feel,\nbecause those who mind don\'t matter,\nand those who matter don\'t mind - Bernard M. Baruch",
	"So many books, so little time - Frank Zappa",
	"You\'ve gotta dance like there\'s nobody watching,\nLove like you\'ll never be hurt, \nSing like there\'s nobody listening,\nAnd live like it\'s heaven on earth - William W. Purkey",
	"A room without books is like a body without a soul - Marcus Tullius Cicero",
	"You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams. - Dr. Seuss",
	"You only live once, but if you do it right, once is enough - Mae West",
	"Be the change that you wish to see in the world. - Mahatma Gandhi",
	"In three words I can sum up everything I've learned about life: it goes on. - Robert Frost"];
	
	var randomNumber = Math.floor(Math.random() * (quote.length));
	document.getElementById("quoteDisplay").innerHTML = quote[randomNumber];
}