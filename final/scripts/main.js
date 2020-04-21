$(document).ready(function(){

	var scents = [
		{
			'name': 'Beijing home',
			'color': 'brown',
			'shape': ''
		},

		{
			'name': 'Taipei home',
			'color': 'red',
			'shape': ''
		},

		{
			'name': 'New York home',
			'color': 'beige',
			'shape': ''
		},

		{
			'name': 'kindergarten',
			'color': 'baby blue',
			'shape': ''
		}
	]

	$('#boxlid').click(function(){
		$('#boxlid').css({'display': 'none'});
		$('#boxbody').append('<div id="boxlidshow"></div>');
	});
	$('#boxlid').on('mouseenter', function(){
		$('#title').css({'color': 'white'});
	});
	$('#boxlid').on('mouseleave', function(){
		$('#title').css({'color': 'black'});
	});

});