$(document).ready(function(){

	document.querySelector('#allthetext').style.fontFamily='helvetica';
	document.getElementById('heading').style.fontFamily='helvetica';
	document.getElementById('subheading').style.fontFamily='helvetica';

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


});


