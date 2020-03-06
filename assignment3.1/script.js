$(document).ready(function(){

	document.querySelector('#allthetext').style.fontFamily='helvetica';
	document.getElementById('heading').style.fontFamily='helvetica';
	document.getElementById('subheading').style.fontFamily='helvetica';

	$('#p1').css({'zIndex':'10'});
	$('#p2').css({'zIndex':'10'});

	$(document).on('mouseenter', function(){
		$('#heading').html('0s & 1s');
		var author = document.createElement('div');
		var text = document.createTextNode('sadie plant');
		author.style.position='absolute';
		author.style.top='20px';
		author.style.right='10px';
		author.style.fontFamily='helvetica';
		author.style.fontSize='33px';
		author.style.fontWeight='bold';
		author.appendChild(text);
		document.body.appendChild(author);
	});

	$('#subheading').on('mouseenter', function(){
		$('#subheading').css({'text-align':'center'});
	});
	
	$('#p1').on('mouseenter', function(){
		$('#subheading').html('try clicking and double clicking the text!');
	});

	$('#p1').on('mouseleave', function(){
		$('#subheading').html('tensions');
	});

	$('p').click(function(){
		$(this).css({'background-color': 'lightblue'});
	});

	$('p').dblclick(function(){
		$(this).css({'width':'450px'});
		$('#p1').css({'position':'absolute', 'left':'100px', 'top':'100px'});
		$('#p2').css({'position':'absolute', 'left':'700px', 'top':'200px'});
		$('#p3').css({'position':'absolute', 'left':'150px', 'top':'600px'});
		$('#p4').css({'position':'absolute', 'left':'800px', 'top':'800px'});
	});

	$(document).on('scroll', function(){
		$('#p1').css({'transform':'rotate(5deg)'});
		$('#p2').css({'transform':'rotate(-15deg)'});
		$('#p3').css({'transform':'rotate(35deg)'});
		$('#p4').css({'transform':'rotate(-25deg)'});
	});

	$('#quote').click(function(){
		$('#p1').toggle();
		$('#p2').toggle();
		$('#p3').toggle();
		$('#p4').toggle();
	});

	$('#quote').on('mouseenter', function(){
		$('#quote').css({'color':'red'});
	});

	$('#quote').on('mouseleave', function(){
		$('#quote').css({'color':'black'});
	});

	$('#p1').dblclick(function(){
		var clickable=document.createElement('div');
		var text=document.createTextNode('click me!');
		clickable.style.position='absolute';
		clickable.style.top='250px';
		clickable.style.zIndex='1';
		clickable.style.left='200px';
		clickable.style.fontFamily='helvetica';
		clickable.style.fontSize='16px';
		clickable.style.fontWeight='bold';
		clickable.appendChild(text);
		document.body.appendChild(clickable);
		$(clickable).on('mouseenter', function(){
			$(clickable).css({'color':'red'});
		});
		$(clickable).on('mouseleave', function(){
			$(clickable).css({'color':'black'});
		});
		$(clickable).click(function(){
			var img1=document.createElement('img');
			img1.src='vr.png';
			img1.style.zIndex='11';
			img1.style.position='absolute';
			img1.style.top='400px';
			img1.style.left='550px';
			document.body.appendChild(img1);
			var img2=document.createElement('img');
			img2.src='phone.png';
			img2.style.zIndex='11';
			img2.style.position='absolute';
			img2.style.top='300px';
			img2.style.left='200px';
			img2.style.width='300px';
			img2.style.height='300px';
			img2.style.transform='rotate(-10deg)';
			document.body.appendChild(img2);
		});
	});


});


