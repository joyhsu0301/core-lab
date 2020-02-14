$(document).ready(function(){
	//alert('testing');

	//shadows under gifs
	$('.reading').bind('mouseenter', function(){
		$('.shadow').addClass('shadowr');
		$('.textr').addClass('textshow');
	})

	$('.reading').bind('mouseleave', function(){
		$('.shadow').removeClass('shadowr');
		$('.textr').removeClass('textshow');
	})
 
 	$('.homework').bind('mouseenter', function(){
		$('.shadow').addClass('shadowh');
		$('.texth').addClass('textshow');
	})

	$('.homework').bind('mouseleave', function(){
		$('.shadow').removeClass('shadowh');
		$('.texth').removeClass('textshow');
	})

	$('.homework2').bind('mouseenter', function(){
		$('.shadow').addClass('shadowh2');
		$('.texth2').addClass('textshow');
	})

	$('.homework2').bind('mouseleave', function(){
		$('.shadow').removeClass('shadowh2');
		$('.texth2').removeClass('textshow');
	})
	
	$('.homework3').bind('mouseenter', function(){
		$('.shadow').addClass('shadowh3');
		$('.texth3').addClass('textshow');
	})

	$('.homework3').bind('mouseleave', function(){
		$('.shadow').removeClass('shadowh3');
		$('.texth3').removeClass('textshow');
	})

});