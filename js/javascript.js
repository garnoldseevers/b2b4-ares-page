$('document').ready(function(){
	in_the_news_slider();
	companies_slider();});

function in_the_news_slider(){
	$('#in-the-news .content-wrapper .image-container').animate({
		left: "-140px"
	},500,"swing",function(){
		// move the image that just moved off screen back to the end of the loop
		$('#in-the-news .content-wrapper .image-container').append($('#in-the-news .content-wrapper img:first-child'));
		$('#in-the-news .image-container').css('left','30px');
		// repeat
		$next_slide = setTimeout("in_the_news_slider()",2500);
	});
}
function companies_slider(){
	$('#companies .content-wrapper .image-container').animate({
		left: "-140px"
	},500,"swing",function(){
		// move the image that just moved off screen back to the end of the loop
		$('#companies .content-wrapper .image-container').append($('#companies .content-wrapper img:first-child'));
		$('#companies .image-container').css('left','30px');
		// repeat
		$next_slide = setTimeout("companies_slider()",2500);
	});
}