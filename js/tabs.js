$.fn.tabs = function(control){
	var element = $(this);
	control = $(control);

	element.on('click', 'a', function(e){
		e.preventDefault();

		var cur = $(this).parent(),
			tabName = $(this).parent().data('tab'),
			previousTabName = element.find('.active').data('tab');

		if(tabName == previousTabName) return false;

		element.find(">[data-tab]").removeClass('active');
		cur.addClass('active');

		control.find(">[data-tab]").hide().removeClass('active');
		control.find(">[data-tab=" + tabName + "]").addClass('active').stop(true, true).fadeIn(500);
	});

	element.find(">[data-tab].active a").trigger('click');
};