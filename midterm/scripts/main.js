$(document).ready(function(){

	$('.android').remove();
	$('.iphone').remove();
	$('.signup-choices').remove();
	$('.announcement').remove();
	$('.sign-in').remove();
	$('.contact-us-nav').remove();
	$('footer').remove();

	$(document).on('scroll', function(){
		$('.hide-mobile').css({'padding':'0px'});
		$('.hide-mobile').ready(function(){
			$('li>a').each(function(index, element){
			var data = $(this).replaceWith('👇');
			return index < 0;
			});
			$('li>a').each(function(index, element){
			var data = $(this).replaceWith('👇');
			return index == 1;
			});
			$('li>a').each(function(index, element){
			var data = $(this).replaceWith('👇');
			return index == 2;
			});
			$('li>a').each(function(index, element){
			var data = $(this).replaceWith('👇');
			return index == 3;
			});
		});
	});

	$(document).one('scroll', function(){
		$('.venmo').remove();
		var iphone=document.createElement('img');
		iphone.style.zIndex='5';
		iphone.style.position='absolute';
		iphone.style.top='-3px';
		iphone.style.left='-130px';
		iphone.style.width='500px';
		$(iphone).attr({'src':'https://i.pinimg.com/originals/71/43/4d/71434d054504aa872973bc782550f1a2.png', 'srcset':'https://i.pinimg.com/originals/71/43/4d/71434d054504aa872973bc782550f1a2.png'})
			.hide()
			.fadeIn('200');
		document.querySelector('.social-proof-wrapper').append(iphone);

		var sleeve=document.createElement('img');
		sleeve.style.zIndex='5';
		sleeve.style.width='1300px';
		sleeve.style.position='absolute';
		sleeve.style.left='-800px';
		sleeve.style.top='180px';
		$(sleeve).attr({'src':'https://d2w9rnfcy7mm78.cloudfront.net/6594518/large_cfcb92ab183515376cf0433e9f00172b.png?1585234044?bc=0', 'srcset':'https://d2w9rnfcy7mm78.cloudfront.net/6594518/large_cfcb92ab183515376cf0433e9f00172b.png?1585234044?bc=0'})
			.hide()
			.fadeIn('200');
		document.querySelector('.social-proof-wrapper').append(sleeve);

		var iphone2=document.createElement('img');
		iphone2.style.zIndex='5';
		iphone2.style.position='absolute';
		iphone2.style.top='600px';
		iphone2.style.left='560px';
		iphone2.style.width='1000px';
		$(iphone2).attr({'src':'https://i.ya-webdesign.com/images/blank-smartphone-png.png', 'srcset':'https://i.ya-webdesign.com/images/blank-smartphone-png.png'});
		document.querySelector('.social-proof-wrapper').appendChild(iphone2);
	});

	$(document).on('scroll', function(){
		$('h1').css({'text-decoration':'line-through'});
		var logo=document.createElement('img');
		logo.style.zIndex='6';
		logo.style.position='absolute';
		logo.style.left='80px';
		logo.style.top='-5px';
		logo.style.width='500px';
		logo.style.transform='rotate(-25deg)';
		$(logo).attr({'src':'https://cdn1.venmo.com/marketing/images/branding/downloads/venmo_logo_blue.svg', 'srcset':'https://cdn1.venmo.com/marketing/images/branding/downloads/venmo_logo_blue.svg'})
			.hide()
			.fadeIn('200');
		document.querySelector('.headline').append(logo);
	});	

});
