$(function(){

$('.tabs').tabs('.tabs-content');

$('.faq-q').on('click', 'a', function(e){
	e.preventDefault();

	var $this = $(this),
		$links = $('.faq-q > a'),
		$block = $this.closest('.faq-block');

	$links.removeClass('active');
	var bg = $this.addClass('active').css('background');

	$this.css('background', 'none');

});
});

