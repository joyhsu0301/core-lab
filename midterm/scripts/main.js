$(document).ready(function(){

	//for all the pages

	$()

	//for homepage venmo.com only

	$('.android').remove();
	$('.iphone').remove();
	$('.signup-choices').remove();
	$('.announcement').remove();
	$('.sign-in').remove();
	$('.contact-us-nav').remove();
	$('.venmo').remove();

	$(document).one('scroll', function(){
		var iphone=document.createElement('img');
		iphone.style.zIndex='5';
		iphone.style.position='absolute';
		iphone.style.top='-3px';
		iphone.style.left='-130px';
		iphone.style.width='500px';
		$(iphone).attr({'src':'https://i.pinimg.com/originals/71/43/4d/71434d054504aa872973bc782550f1a2.png', 'srcset':'https://i.pinimg.com/originals/71/43/4d/71434d054504aa872973bc782550f1a2.png'});
		document.querySelector('.social-proof-wrapper').appendChild(iphone);
		var sleeve=document.createElement('img');
		sleeve.style.zIndex='5';
		sleeve.style.width='1300px';
		sleeve.style.position='absolute';
		sleeve.style.left='-800px';
		sleeve.style.top='180px';
		$(sleeve).attr({'src':'https://d2w9rnfcy7mm78.cloudfront.net/6594518/large_cfcb92ab183515376cf0433e9f00172b.png?1585234044?bc=0', 'srcset':'https://d2w9rnfcy7mm78.cloudfront.net/6594518/large_cfcb92ab183515376cf0433e9f00172b.png?1585234044?bc=0'});
		document.querySelector('.social-proof-wrapper').appendChild(sleeve);
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
		$(logo).attr({'src':'https://cdn1.venmo.com/marketing/images/branding/downloads/venmo_logo_blue.svg', 'srcset':'https://cdn1.venmo.com/marketing/images/branding/downloads/venmo_logo_blue.svg'});
		document.querySelector('.headline').appendChild(logo);
	});	

	$('footer').css({'background-image':'url(https://s.abcnews.com/images/US/WireAP_8bd6cc4aae664c918e6c881dc60d3652_16x9_992.jpg)'});
	$('header').css({'background-image':'url(https://s.abcnews.com/images/US/WireAP_8bd6cc4aae664c918e6c881dc60d3652_16x9_992.jpg)'});

});
