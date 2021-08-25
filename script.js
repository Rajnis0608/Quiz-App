var questions = [{
	question: "Which type of JavaScript language is______",
	choices: ["Object-Oriented","Object-Based","Assembly-language","High-level"],
	correctAnswer: 1
}, {
	question:"Which one of the following also known as Conditional Expression:",
	choices: ["Alternative to if-else", "Switch statement", "If-then-else statement", "immediate if"],
	correctAnswer: 3

}, {
	question: "The U+0201Cfunction and var are known as:",
	choices: ["Keywords","Data types","Declaration statements","Prototypes"],
	correctAnswer: 2
}, {
	question: "Which of the following number object function returns the value of the number?",
	choices: ["toString()","valueOf()","toLocaleString()","toPrecision()"],
	correctAnswer: 1
}, {
	question: "Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters?",
	choices: ["slice()","split()","substr()","search()"],
	correctAnswer: 2
}, {
	question: 'Choose the correct snippet from the following to check if the variable "a" is not equal the "NULL":',
	choices: ["if(a!==null)","if (a!)","if(a!null)","if(a!=null)"],
	correctAnswer: 0
}, {
	question: "In JavaScript, what will be used for calling the function definition expression:",
	choices: ["Function prototype","Function literal","Function calling","Function declaration"],
	correctAnswer: 1
}, {
	question: "Which one of the following is an ternary operator:",
	choices: ["?",":","-","+"],
	correctAnswer: 0
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function() {
	displayCurrentQuestion();
	$(this).find(".quizMessage").hide();
	$(this).find(".nextButton").on("click",function(){
		if(!quizOver) {
			value = $("input[type='radio']:checked").val();
			if(value == undefined) {
				$(document).find(".quizMessage").text("Please select an answer");
				$(document).find(".quizMessage").show();
			} else {
				$(document).find(".quizMessage").hide();
				if(value == questions[currentQuestion].correctAnswer){
					correctAnswers++;
				}
				currentQuestion++;
				if(currentQuestion < questions.length){
					displayCurrentQuestion();
				} else {
					displayScore();
					$(document).find(".nextButton").text("Play Again?");
					quizOver = true;
				}
			}
		} else {
			quizOver = false;
			$(document).find(".nextButton").text("Next Question");
			resetQuiz();
			displayCurrentQuestion();
			hideScore();
		}
	});
});

function displayCurrentQuestion() {
	console.log("In display current Question");

	var question = questions[currentQuestion].question;
	var questionClass = $(document).find(".quizContainer > .question");
	var choiceList = $(document).find(".quizContainer > .choiceList");
	var numChoices = questions[currentQuestion].choices.length;

	//Set the questionClass text to the current question
	$(questionClass).text(question);

	//Remove all current <li> elements (if any)
	$(choiceList).find("li").remove();

	var choice;
	for(i = 0;i < numChoices; i++){
		choice = questions[currentQuestion].choices[i];
		$('<li><input type="radio" value=' + i + ' name="dynradio"/>' + choice + '</li>').appendTo(choiceList);
	}
}

function resetQuiz() {
	currentQuestion = 0;
	correctAnswers = 0;
	hideScore();
}

function displayScore() {
	$(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
	$(document).find(".quizContainer > .result").show();
}

function hideScore() {
	$(document).find(".result").hide();
}