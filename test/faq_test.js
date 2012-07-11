(function($){
$(function(){

	module('A', {
		setup: function(){
			$('.faq-block:first a').trigger('click');
			$('.faq-block:eq(3) a').trigger('click');
			this.link = $('.faq-block:eq(2) a').trigger('click');
			this.block = this.link.closest('.faq-block');
		}
	});

	test('clicked has active class', 1, function(){
		ok(this.link.hasClass('active'));
	});

	test('no other element has active class', 1, function(){
		equal($('.faq-q a').not(this.link).filter('.active').length, 0);
	});

});
}(jQuery));