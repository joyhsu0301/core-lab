$(document).ready(function(){

	var scents = [
		{
			'name': 'Beijing home',
			'color': 'brown',
			'shape': '',
			'image': ''
		},

		{
			'name': 'Taipei home',
			'color': 'red',
			'shape': '',
			'image': ''
		},

		{
			'name': 'New York home',
			'color': 'beige',
			'shape': '',
			'image': ''
		},

		{
			'name': 'kindergarten',
			'color': 'baby blue',
			'shape': '',
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
	var items = ['scent1', 'scent2', 'scent3', 'scent4', 'scent5', 'scent6'] 
	for(i=0; i<items.length; i++){
		$('#items').append('<div class="scents"></div>')
	}

});