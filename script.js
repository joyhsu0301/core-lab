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
 	
 	//homework1

 	$('.homework').bind('mouseenter', function(){
		$('.shadow').addClass('shadowh');
		$('.texth').addClass('textshow');
	})

	$('.homework').bind('mouseleave', function(){
		$('.shadow').removeClass('shadowh');
		$('.texth').removeClass('textshow');
	})

	//homework2

	$('.homework2').bind('mouseenter', function(){
		$('.shadow').addClass('shadowh2');
		$('.texth2').addClass('textshow');
	})

	$('.homework2').bind('mouseleave', function(){
		$('.shadow').removeClass('shadowh2');
		$('.texth2').removeClass('textshow');
	})

	//homework3
	
	$('.homework3').bind('mouseenter', function(){
		$('.shadow').addClass('shadowh3');
		$('.texth3').addClass('textshow');
	})

	$('.homework3').bind('mouseleave', function(){
		$('.shadow').removeClass('shadowh3');
		$('.texth3').removeClass('textshow');
	})

	//homework4

	$('.homework4').bind('mouseenter', function(){
		$('.shadow').addClass('shadowh4');
		$('.texth4').addClass('textshow');
	})

	$('.homework4').bind('mouseleave', function(){
		$('.shadow').removeClass('shadowh4');
		$('.texth4').removeClass('textshow');
	})

	//homework5

	$('.homework5').bind('mouseenter', function(){
		$('.shadow').addClass('shadowh5');
		$('.texth5').addClass('textshow');
	})

	$('.homework5').bind('mouseleave', function(){
		$('.shadow').removeClass('shadowh5');
		$('.texth5').removeClass('textshow');
	})

	//midterm

	$('.midterm').bind('mouseenter', function(){
		$('.shadow').addClass('shadowh6');
		$('.texth6').addClass('textshow');
		$('.disclaimer').addClass('textshow');
	})

	$('.midterm').bind('mouseleave', function(){
		$('.shadow').removeClass('shadowh6');
		$('.texth6').removeClass('textshow');
		$('.disclaimer').removeClass('textshow');
	})


});