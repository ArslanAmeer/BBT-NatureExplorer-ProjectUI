function ReadMore(textsClass, charCount, buttonClass) {
	// Readmore Text for ABOUT US Section
	var showChar = charCount;
	$('.' + textsClass).each(function() {
		var content = $(this).html();
		if (content.length > showChar) {
			var c = content.substr(0, showChar);
			var h = content.substr(showChar, content.length - showChar);
			var html =
				c +
				'<span class="moreellipses">' +
				'...' +
				'&nbsp;</span><span class="morecontent d-none"><span>' +
				h +
				'</span>&nbsp;&nbsp;</span>';
			$(this).html(html);
		}
	});
	$('.' + buttonClass).click(function() {
		$(this)
			.prev('.detail-text')
			.find('p span.moreellipses')
			.toggleClass('d-none');
		$(this)
			.prev('.detail-text')
			.find('p span.morecontent')
			.toggleClass('d-none');
		if ($(this).hasClass('toggled')) {
			$(this).removeClass('toggled');
			$(this).html('Read More+');
		} else {
			$(this).addClass('toggled');
			$(this).html('Read Less-');
		}
	});
}
