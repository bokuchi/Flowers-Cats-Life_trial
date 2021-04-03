$(function() {
	
	function toggleChangeBtn() {
		var slideIndex = $('.slide').index($('.active'));
		$('.change-btn').show();
		if (slideIndex == 0) {
			$('.prev-btn').hide();
		} else if (slideIndex == $('.slide').length -1) {
			$('.next-btn').hide();
		}
	}
	
// スライドのインデックスボタン／クリックしたボタンの画像を表示する
	$('.index-btn').click(function() {
		$('.active').removeClass('active');
		var clickedINdex = $('.index-btn').index($(this));
		$('.slide').eq(clickedINdex).addClass('active');
		toggleChangeBtn();
	});

// スライドのチェンジボタン／画像を1枚送りで表示する
	$('.change-btn').click(function() {
		var $displaySlide = $('.active');
		$displaySlide.removeClass('active');
		if ($(this).hasClass('next-btn')) {
			$displaySlide.next().addClass('active');
		} else {
			$displaySlide.prev().addClass('active');
		}
		toggleChangeBtn();
	});
	
});