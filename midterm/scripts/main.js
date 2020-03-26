$(document).ready(function(){

	$('.android').remove();
	$('.iphone').remove();

	$(document).one('scroll', function(){
		var iphone=document.createElement('img');
		iphone.style.zIndex='5';
		iphone.style.position='absolute';
		iphone.style.top='-3px';
		iphone.style.left='-130px';
		iphone.style.width='500px';
		$(iphone).attr({'src':'https://i.pinimg.com/originals/71/43/4d/71434d054504aa872973bc782550f1a2.png', 'srcset':'https://i.pinimg.com/originals/71/43/4d/71434d054504aa872973bc782550f1a2.png'});
		document.querySelector('.social-proof-wrapper').appendChild(iphone);
	})

	$(document).on('scroll', function(){
		$('h1').css({'text-decoration':'line-through'});
	});	

});
