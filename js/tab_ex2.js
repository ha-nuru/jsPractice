$('.tab:first-of-type, .tabpanel:first-of-type')
	.addClass('active')
	.attr('tabindex', '0');

$('.tab:first-of-type').attr('aria-selected', 'true');

$('.tab').on('keydown', function (event) {
	event = event || window.event;
	event.preventDefault ? event.preventDefault() : event.returnValue = false;
	var keycode = event.keycode || event.which;

	switch (keycode) {
		case 37: //left errow	
			if (this.previousElementSibling) {
				$(this)
					.attr('tabindex', '-1')
					.prev()
					.attr('tabindex', '0')
					.focus();
			} else {
				$(this)
					.attr('tabindex', '-1');
				$('.tab:last-of-type')
					.attr('tabinex', '0')
					.focus();
			}
			break;
		case 39: //right errow
			if (this.nextElementSibling) {
				$(this).attr('tabindex', '-1')
					.next()
					.attr('tabindex', '0')
					.focus();
			} else {
				$(this).attr('tabindex', '-1');
				$('.tab:first-of-type')
					.attr('tabindex', '-1')
					.focus();
			}
			break;
		case 32: //space
		case 13: //enter
			// 선택된 탭 활성화
			$(this).addClass('active')
				.attr('aria-selected', 'true')
				// 기존 탭 비활성화
				.siblings()
				.removeClass('active')
				.attr('aria-selected', 'false');
			$('#' + $(this).attr('aria-controls'))
				.attr('tabindex', '0')
				.addClass('active')
				.siblings('.tabpanel')
				.attr('tabindex', '-1')
				.removeClass('active')
			break;
	}
});

//탭 패널이동 - 활성화 된 탭에서 tab키 누를 경우 연관된 탭 패널로 이동
$('.tablist').on('keydown', '.active', function (event) {
	event = event || window.event;
	var keycode = event.keycode || event.which;
	if (!event.shiftKey && keycode === 9) {
		event.preventDefault ? event.preventDefault() : event.returnValue = false;
		$('#' + $(this).attr('aria-controls'))
			.attr('tabindex', '0')
			.addClass('active')
			.focus()
			.siblings('.tabpanel')
			.attr('tabindex', '-1')
			.removeClass('active');
	}
})

$('.tab').on('mousedown', function () {
	$(this).addClass('active')
		.attr({ 'tabindex': '0', 'aria-selected': 'true' })
		.focus()
		// 기존 탭 비활성화
		.siblings()
		.removeClass('active')
		.attr({
			'tabindex': '-1',
			'aria-selected': 'false'
		});
	// 연관된 탭 패널 활성화
	$('#' + $(this).attr('aria-controls'))
		.attr('tabindex', '0')
		.addClass('active')
		//기존 탭 패널 비활성화
		.siblings('.tabpanel')
		.attr('tabindex', '-1')
		.removeClass('active');
})




