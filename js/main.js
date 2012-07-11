$(function(){

$('.tabs').tabs('.tabs-content');

$('.faq-q').on('click', 'a', function(e){
	e.preventDefault();

	var $this = $(this),
		$question = $this.parent(),
		$answer = $question.siblings('.faq-a').first(),
		bg = $this.css('background');

	$this.css('background', 'none');

	console.log($question);

	$answer.css({
		left: 500
	});

	$question.animate({
		left: 500
	}, 500, function(){
		$answer.fadeIn();
	});

	
});

});

