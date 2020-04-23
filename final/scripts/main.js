$(document).ready(function(){

	var scents = [
		{
			'name': 'Beijing home',
			'color': 'brown',
			'shape': '',
			'feeling': 'nostalgia',
			'image': ''
		},

		{
			'name': 'Taipei home',
			'color': 'red',
			'shape': '',
			'feeling': '',
			'image': ''
		},

		{
			'name': 'New York home',
			'color': 'beige',
			'shape': '',
			'feeling': '',
			'image': ''
		},

		{
			'name': 'kindergarten',
			'color': 'lightblue',
			'shape': '',
			'feeling': 'nostalgia',
			'image': ''
		},

		{
			'name': 'home clothes',
			'color': 'grey',
			'shape': '',
			'feeling': '',
			'image': ''
		},

		{
			'name': 'grandmas house',
			'color': 'green',
			'shape': '',
			'feeling': 'nostalgia',
			'image': ''
		},

		{
			'name': 'haneda airport',
			'color': 'white',
			'shape': '',
			'feeling': 'nostalgia',
			'image': ''
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

	//code for creating the circles
	for(i=0; i<6; i++){
		$('#items').append('<div class="scents"></div>')
	}



});