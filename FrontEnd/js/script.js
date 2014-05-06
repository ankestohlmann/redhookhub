$(document).ready(function(){
	var checkCSSfile = $('#navigation ul li').css("display");
	if (checkCSSfile == 'none')
	{
		$('#navigation').hover(function(){
			$('#navigation ul li').css("display", "block");
		});

		$('#navigation').mouseleave(function(){
			$('#navigation ul li').css("display", "none");
		});
	}
});