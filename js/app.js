$(function() {
	var $label = $('label'),
		$h2 = $('h2'),
		$button = $('button'),
		$img = $('img');
		$answers = $('#q1>ul');

	$answers.hide();

	var count = 0,
		correct = 0,
		gameStart = false;
	
	var question, answers, answerVal, userVal;

	var questionList = ['Question 1', 'Question 2', 'Question 3', 'Question 4', 
	'Question 5'];

	var answersList = [
		["One", "Two", "Three", "Four"],
		["ABC", "ADSF", "CHanges", "Test This OUT"],
		["Something", "WOah", "Coolio", "Work IT"],
		["WORK WORK", "More Work?", "Ye ye ye", "Hi there"],
		["Testing", "Code", "more", "STUFF"]
	];

	var answerValList = [3, 2, 1, 1, 4];


	function updateQuestion() {
		if (count !== 5) {
			$('input[name="answer"]').attr('checked',false);
			question = questionList[count];
			answers = answersList[count];
			$h2.html(question);
			$.each(answers, function(i, val) {
				$label[i].innerHTML = val;
			});
		} else {
			$h2.html('You answered ' + correct + ' out of 5 correct.' +
			' Press "Try Again" to start over!');
			$answers.hide();
			$button.html("Try Again");
			correct = 0;
			count = 0;
			gameStart = false;
		}
	}

	function checkAnswer() {
		if (gameStart === true && count !== 5) {
			answerVal = answerValList[count];
			userVal = $('input[name="answer"]:checked').val();
			if (answerVal == userVal) {
				console.log("true");
				$img[count].style.opacity = 1;
				correct++;
			} else {
				console.log("false");
			}
			count++
		}
	}


	$('button').on('click', function() {
		checkAnswer();
		if (gameStart === false) {
			$answers.show();
			$button.html("Submit Answer");
			$img.css("opacity", 0.1);
			gameStart = true;
		}
		updateQuestion();
	});
})