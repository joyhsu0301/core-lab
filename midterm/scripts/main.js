$(document).ready(function(){

	$('.android').remove();
	$('.iphone').remove();
	$('.signup-choices').hide();
	$('.announcement').remove();
	$('.sign-in').remove();
	$('.contact-us-nav').remove();
	$('footer').remove();

	$('.col-md-12').on('mouseenter', function(){
		$('.hide-mobile').hide();
	});
	$('.col-md-12').on('mouseleave', function(){
		$('.hide-mobile').show();
	})

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
		iphone2.style.top='500px';
		iphone2.style.left='560px';
		iphone2.style.width='1000px';
		$(iphone2).attr({'src':'https://i.ya-webdesign.com/images/blank-smartphone-png.png', 'srcset':'https://i.ya-webdesign.com/images/blank-smartphone-png.png'});
		document.querySelector('.social-proof-wrapper').appendChild(iphone2);
		
		$(iphone2).one('mouseenter', function(){
		var note1=document.createElement('img');
		note1.style.zIndex='4';
		note1.style.position='absolute';
		note1.style.top='590px';
		note1.style.left='650px';
		note1.style.width='418px';
		note1.style.height='280px';
		$(note1).attr({'src':'https://d2w9rnfcy7mm78.cloudfront.net/6659081/large_a699a9814cb4aad92d24b5b1f6a34d56.jpg?1585648984?bc=0', 'srcset':'https://d2w9rnfcy7mm78.cloudfront.net/6659081/large_a699a9814cb4aad92d24b5b1f6a34d56.jpg?1585648984?bc=0'})
			.hide()
			.fadeIn('200');
		document.querySelector('.social-proof-wrapper').appendChild(note1);
		});

		var iphone3=document.createElement('img');
		iphone3.style.zIndex='5';
		iphone3.style.position='absolute';
		iphone3.style.top='1000px';
		iphone3.style.left='230px';
		iphone3.style.width='900px';
		$(iphone3).attr({'src':'https://d2w9rnfcy7mm78.cloudfront.net/6657974/large_65abc79f6c82625c9a44d75b1a523fc9.png?1585638214?bc=0', 'srcset':'https://d2w9rnfcy7mm78.cloudfront.net/6657974/large_65abc79f6c82625c9a44d75b1a523fc9.png?1585638214?bc=0'});
		document.querySelector('.social-proof-wrapper').appendChild(iphone3);

		$(iphone3).one('mouseenter', function(){
		var note2=document.createElement('img');
		note2.style.zIndex='4';
		note2.style.position='absolute';
		note2.style.top='1070px';
		note2.style.left='632px';
		note2.style.width='244px';
		note2.style.height='477px';
		$(note2).attr({'src':'https://d2w9rnfcy7mm78.cloudfront.net/6658667/large_0669d9071e1099de5a3bf3c16f40de37.png?1585646374?bc=0', 'srcset':'https://d2w9rnfcy7mm78.cloudfront.net/6658667/large_0669d9071e1099de5a3bf3c16f40de37.png?1585646374?bc=0'})
			.hide()
			.fadeIn('200');
		document.querySelector('.social-proof-wrapper').appendChild(note2);

		$(iphone3).one('click', function(){
		var emoji=document.createElement('img');
		emoji.zIndex='10';
		emoji.style.position='absolute';
		emoji.style.top='800px';
		emoji.style.width='200px';
		emoji.style.transform='rotate(25deg)';
		$(emoji).attr({'src':'https://d2w9rnfcy7mm78.cloudfront.net/6659510/large_69d74e1234883eb258907dd962b8c01d.png?1585651521?bc=0','srcset':'https://d2w9rnfcy7mm78.cloudfront.net/6659510/large_69d74e1234883eb258907dd962b8c01d.png?1585651521?bc=0'});
		document.querySelector('.social-proof-wrapper').appendChild(emoji);
		var emoji2=document.createElement('img');
		emoji2.zIndex='10';
		emoji2.style.position='absolute';
		emoji2.style.top='1000px';
		emoji2.style.width='200px';
		emoji2.style.transform='rotate(-25deg)';
		$(emoji2).attr({'src':'https://d2w9rnfcy7mm78.cloudfront.net/6659510/large_69d74e1234883eb258907dd962b8c01d.png?1585651521?bc=0','srcset':'https://d2w9rnfcy7mm78.cloudfront.net/6659510/large_69d74e1234883eb258907dd962b8c01d.png?1585651521?bc=0'});
		document.querySelector('.social-proof-wrapper').appendChild(emoji2);
		var emoji3=document.createElement('img');
		emoji3.zIndex='10';
		emoji3.style.position='absolute';
		emoji3.style.left='650px';
		emoji3.style.top='900px';
		emoji3.style.width='200px';
		emoji3.style.transform='rotate(-25deg)';
		$(emoji3).attr({'src':'https://d2w9rnfcy7mm78.cloudfront.net/6659510/large_69d74e1234883eb258907dd962b8c01d.png?1585651521?bc=0','srcset':'https://d2w9rnfcy7mm78.cloudfront.net/6659510/large_69d74e1234883eb258907dd962b8c01d.png?1585651521?bc=0'});
		document.querySelector('.social-proof-wrapper').appendChild(emoji3);
		var emoji4=document.createElement('img');
		emoji4.zIndex='10';
		emoji4.style.position='absolute';
		emoji4.style.left='950px';
		emoji4.style.top='900px';
		emoji4.style.width='200px';
		emoji4.style.transform='rotate(45deg)';
		$(emoji4).attr({'src':'https://d2w9rnfcy7mm78.cloudfront.net/6659510/large_69d74e1234883eb258907dd962b8c01d.png?1585651521?bc=0','srcset':'https://d2w9rnfcy7mm78.cloudfront.net/6659510/large_69d74e1234883eb258907dd962b8c01d.png?1585651521?bc=0'});
		document.querySelector('.social-proof-wrapper').appendChild(emoji4);
		var emoji5=document.createElement('img');
		emoji5.zIndex='10';
		emoji5.style.position='absolute';
		emoji5.style.left='760px';
		emoji5.style.top='1500px';
		emoji5.style.width='200px';
		emoji5.style.transform='rotate(45deg)';
		$(emoji5).attr({'src':'https://d2w9rnfcy7mm78.cloudfront.net/6659510/large_69d74e1234883eb258907dd962b8c01d.png?1585651521?bc=0','srcset':'https://d2w9rnfcy7mm78.cloudfront.net/6659510/large_69d74e1234883eb258907dd962b8c01d.png?1585651521?bc=0'});
		document.querySelector('.social-proof-wrapper').appendChild(emoji5);
		var emoji6=document.createElement('img');
		emoji6.zIndex='10';
		emoji6.style.position='absolute';
		emoji6.style.left='300px';
		emoji6.style.top='1250px';
		emoji6.style.width='200px';
		emoji6.style.transform='rotate(45deg)';
		$(emoji6).attr({'src':'https://d2w9rnfcy7mm78.cloudfront.net/6659510/large_69d74e1234883eb258907dd962b8c01d.png?1585651521?bc=0','srcset':'https://d2w9rnfcy7mm78.cloudfront.net/6659510/large_69d74e1234883eb258907dd962b8c01d.png?1585651521?bc=0'});
		document.querySelector('.social-proof-wrapper').appendChild(emoji6);
		var emoji7=document.createElement('img');
		emoji7.zIndex='10';
		emoji7.style.position='absolute';
		emoji7.style.left='940px';
		emoji7.style.top='1250px';
		emoji7.style.width='200px';
		emoji7.style.transform='rotate(25deg)';
		$(emoji7).attr({'src':'https://d2w9rnfcy7mm78.cloudfront.net/6659510/large_69d74e1234883eb258907dd962b8c01d.png?1585651521?bc=0','srcset':'https://d2w9rnfcy7mm78.cloudfront.net/6659510/large_69d74e1234883eb258907dd962b8c01d.png?1585651521?bc=0'});
		document.querySelector('.social-proof-wrapper').appendChild(emoji7);
		var emoji8=document.createElement('img');
		emoji8.zIndex='10';
		emoji8.style.position='absolute';
		emoji8.style.left='990px';
		emoji8.style.top='130px';
		emoji8.style.width='200px';
		emoji8.style.transform='rotate(-25deg)';
		$(emoji8).attr({'src':'https://d2w9rnfcy7mm78.cloudfront.net/6659510/large_69d74e1234883eb258907dd962b8c01d.png?1585651521?bc=0','srcset':'https://d2w9rnfcy7mm78.cloudfront.net/6659510/large_69d74e1234883eb258907dd962b8c01d.png?1585651521?bc=0'});
		document.querySelector('.social-proof-wrapper').appendChild(emoji8);
		var emoji9=document.createElement('img');
		emoji9.zIndex='10';
		emoji9.style.position='absolute';
		emoji9.style.left='190px';
		emoji9.style.top='1630px';
		emoji9.style.width='200px';
		emoji9.style.transform='rotate(-45deg)';
		$(emoji9).attr({'src':'https://d2w9rnfcy7mm78.cloudfront.net/6659510/large_69d74e1234883eb258907dd962b8c01d.png?1585651521?bc=0','srcset':'https://d2w9rnfcy7mm78.cloudfront.net/6659510/large_69d74e1234883eb258907dd962b8c01d.png?1585651521?bc=0'});
		document.querySelector('.social-proof-wrapper').appendChild(emoji9);


		});

		});
	});

	$(document).one('scroll', function(){
		$('h1').hide();

		var textbox=document.createElement('h1');
		var newtext=document.createTextNode('But first, you need to learn some');
		textbox.style.zIndex='6';
		textbox.style.position='absolute';
		textbox.style.left='150px';
		textbox.style.top='-10px';
		textbox.style.textDecoration='none';
		textbox.appendChild(newtext);
		document.querySelector('.headline').append(textbox);
		
		var etiquette=document.createElement('img');
		etiquette.style.zIndex='7';
		etiquette.style.position='absolute';
		etiquette.style.left='240px';
		etiquette.style.top='245px';
		etiquette.style.width='260px';
		$(etiquette).attr({'src':'https://d2w9rnfcy7mm78.cloudfront.net/6657887/large_abd027a7ba8082f6194ff630e43da71c.png?1585637599?bc=0', 'srcset':'https://d2w9rnfcy7mm78.cloudfront.net/6657887/large_abd027a7ba8082f6194ff630e43da71c.png?1585637599?bc=0'})
			.hide()
			.fadeIn('200');
		document.querySelector('.headline').append(etiquette);

		var logo=document.createElement('img');
		logo.style.zIndex='6';
		logo.style.position='absolute';
		logo.style.left='80px';
		logo.style.top='0px';
		logo.style.width='500px';
		$(logo).attr({'src':'https://cdn1.venmo.com/marketing/images/branding/downloads/venmo_logo_blue.svg', 'srcset':'https://cdn1.venmo.com/marketing/images/branding/downloads/venmo_logo_blue.svg'})
			.hide()
			.fadeIn('200');
		document.querySelector('.headline').append(logo);

		var click=document.createElement('span');
		var clicktext=document.createTextNode('click me to hereby confirm that I have learnt these rules!');
		click.style.position='absolute';
		click.style.top='14px';
		click.style.left='40px';
		click.style.color='rgb(51,150,205)';
		click.style.fontWeight='bold';
		click.appendChild(clicktext);
		document.querySelector('header').append(click);

		$(click).click(function(){
			$('.signup-choices').show();
			$(textbox).hide();
			$(etiquette).hide();
			$(logo).hide();
			$(click).remove();
		});
	});	

});
