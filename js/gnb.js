function chk() {
	if (cc == 1) {
		$("#gnb ul li ul").slideDown(100);
	} else {
		$("#gnb ul li ul").slideUp(150);
	}
}

// $('#gnb>ul>li').mouseover(function () {
// 	setTimeout(chk, 100);
// 	cc = 1;
// 	$(this).addClass('active');
// });

$('#gnb>ul>li').on('mouseover', function () {
	setTimeout(chk, 100);
	cc = 1;
	$(this).addClass('active');
});


$('#gnb').mouseout(function () {
	setTimeout(chk, 400);
	cc = 0;
	$('#gnb ul li').removeClass('active');
});

$('#gnb ul li a').focus(function () {
	setTimeout(chk, 100);
	cc = 1;
	$(this).parent().addClass('active');
});

$('#gnb ul li a').blur(function () {
	setTimeout(chk, 100);
	cc = 0;
	$('#gnb ul li').removeClass('active');
});

