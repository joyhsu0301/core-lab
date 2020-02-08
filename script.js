$(document).ready(function(){
	//alert('testing');

	//shadows under gifs
	$('.reading').bind('mouseenter', function(){
		$('.shadow').addClass('shadowr');
		$('.textr').addClass('textrr');
	})

	$('.reading').bind('mouseleave', function(){
		$('.shadow').removeClass('shadowr');
		$('.textr').removeClass('textrr');
	})
 
 	$('.homework').bind('mouseenter', function(){
		$('.shadow').addClass('shadowh');
		$('.texth').addClass('texthh');
	})

	$('.homework').bind('mouseleave', function(){
		$('.shadow').removeClass('shadowh');
		$('.texth').removeClass('texthh');
	})
	

});