
$(document).ready(function(){
	/*--- Global Variables ---*/
	var secret;
	var guess;
	/*--- Automatically Start New Game ---*/
	function newGame() {
		secret = Math.floor(Math.random()*100+1);
  		$('#count').text('0');
  		$('.guessBox').empty();
  		$('#feedback').text('Make your Guess!')
  		console.log(secret);
	}

	newGame();

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Start New Game ---*/
  	$('a.new').click(function() {
  		newGame();
  		console.log(secret);
  	});

  	/*--- Hot or Cold the Game ---*/
  	$('#guessButton').click(function() {
  		/*--- Validation ---*/
  		// Still need to prevent NaN
  		if($('#userGuess').val()<1) {
  			alert('Please pick a number between 1 and 100.');
  		} else if($('#userGuess').val()>100){
  			alert('Please pick a number between 1 and 100.');
  		} else {
  			guess = $('#userGuess').val();
  			$('.guessBox').append('<li>' + $('#userGuess').val() + '</li>');
  			$('#count').text(parseInt($('#count').text())+1);
  			$('#userGuess').val('');
  			

  			/*--- Feedback ---*/
  			if (Math.abs(secret-guess)==0) {
  				$('#feedback').text('You Win!');
  				newGame();
  			} else if(Math.abs(secret-guess)<=10) {
  				$('#feedback').text('Scortchin\' Hot');
  			} else if(Math.abs(secret-guess)<=20) {
  				$('#feedback').text('Hot');
  			} else if(Math.abs(secret-guess)<=30) {
  				$('#feedback').text('Warm');
  			} else if(Math.abs(secret-guess)<=50) {
  				$('#feedback').text('Cold');
  			} else {
  				$('#feedback').text('Freezing');
  			}
  			console.log(secret);
  			console.log(guess);
  		} 		
  	});

  	$('form').submit(function(event) {
  		event.preventDefault();
  	});
});


