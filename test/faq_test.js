(function($){
$(function(){

	module('A', {
		setup: function(){
			$('.faq-q:first').trigger('click');
			$('.faq-q:eq(3)').trigger('click');
			this.link = $('.faq-q:eq(2)').trigger('click');
			this.block = this.link.closest('.faq-block');
			this.otherLinks = $('.faq-q').not(this.link);
			this.otherBlocks = $('.faq-block').not(this.block);
		}
	});

	test('clicked has active class', 1, function(){
		ok(this.block.hasClass('active'));
	});

	test('no other element has active class', 1, function(){
		equal(this.otherBlocks.filter('.active').length, 0);
	});

	test('clicked has no vertical bg', 1, function(){
		equal(this.link.css('background'), '');
	});

	test('all other elements have vertical bg', 1, function(){
		equal(this.otherLinks.filter('.no-vertical').length, 0);
	});

});
}(jQuery));