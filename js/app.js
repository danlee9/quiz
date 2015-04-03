$(function() {
	var $label = $('label'),
		$h2 = $('h2'),
		$button = $('button'),
		$img = $('img');
		$answers = $('#q1>ul');

	$answers.hide();

	var count = 0,
		numCorrect = 0,
		gameStart = false;
	
	var question, answers, answerVal, userVal;

	var questionList = [
		'In what city did the former NHL team, the Thrashers, play in?', 
		'Which NFL team is the only one to go through an entire season undefeated?', 
		'What was the best finish by a US team in the FIFA World Cup?', 
		'Who holds the record for most NBA championships won as either a player or coach combined?', 
		'Who was the first player to break Babe Ruth\'s former single season record of 60 home runs?'
	];

	var answersList = [
		{choice: ["Kansas City, MO", "Charleston, SC", "Atlanta, GA", "San Diego, CA"], correct: 3},
		{choice: ["1985 Chicago Bears", "1972 Miami Dolphins", "2007 New England Patriots", "1992 Dallas Cowboys"], correct: 2},
		{choice: ["Third place", "Group Stage", "Quarter-finals", "Round of 16"], correct: 1},
		{choice: ["Phil Jackson", "Bill Russell", "Pat Riley", "Steve Kerr"], correct: 1},
		{choice: ["Barry Bonds", "Hank Aaron", "Mark McGwire", "Roger Maris"], correct: 4}
	];


	function updateQuestion() {
		if (count !== 5) {
			$('input[name="answer"]').attr('checked',false);
			question = questionList[count];
			answers = answersList[count].choice;
			$h2.html(question);
			$.each(answers, function(i, val) {
				$label[i].innerHTML = val;
			});
		} else {
			$h2.html('Congrats on finishing the Quiz! You answered ' + numCorrect + ' out of 5 correct.' + ' Press "Try Again" to start over.');
			$answers.hide();
			$button.html("Try Again");
			numCorrect = 0;
			count = 0;
			gameStart = false;
		}
	}

	function checkAnswer() {
		if (gameStart === true && count !== 5) {
			answerVal = answersList[count].correct;
			userVal = $('input[name="answer"]:checked').val();
			if (answerVal == userVal) {
				console.log("true");
				$img[count].style.opacity = 1;
				numCorrect++;
			} else {
				console.log("false");
			}
			count++
		} else if (gameStart === false) {
			$answers.show();
			$button.html("Submit Answer");
			$img.css("opacity", 0.1);
			gameStart = true;
		}
	}

	$('button').on('click', function() {
		checkAnswer();
		updateQuestion();
	});
})