$(document).ready(function(){

	var scents = [
		{
			'name': 'Beijing Home',
			'color': 'brown',
			'shape': '',
			'feeling': 'nostalgia',
			'image': ''
		},

		{
			'name': 'Taipei Home',
			'color': 'red',
			'shape': '',
			'feeling': '',
			'image': ''
		},

		{
			'name': 'New York Home',
			'color': 'beige',
			'shape': '',
			'feeling': '',
			'image': ''
		},

		{
			'name': 'Grandmas House',
			'color': 'green',
			'shape': '',
			'feeling': 'nostalgia',
			'image': ''
		},

		{
			'name': 'Junyis House',
			'color': 'beige',
			'shape': '',
			'feeling': '',
			'image': ''
		},

		{
			'name': 'Kindergarten',
			'color': 'lightblue',
			'shape': '',
			'feeling': 'nostalgia',
			'image': ''
		},

		{
			'name': 'Home Clothes',
			'color': 'grey',
			'shape': '',
			'feeling': '',
			'image': ''
		},

		{
			'name': 'Haneda Airport',
			'color': 'white',
			'shape': '',
			'feeling': 'nostalgia',
			'image': ''
		},

		{
			'name': 'JFK Airport',
			'color': 'white',
			'shape': '',
			'feeling': '',
			'image': ''
		},


		{
			'name': 'Color Pencils',
			'color': 'dark red',
			'shape': '',
			'feeling': 'nostalgia',
			'image': ''
		},

		{
			'name': '7-Eleven',
			'color': 'green',
			'shape': '',
			'feeling': '',
			'image': ''
		},

		{
			'name': 'Temple Incense',
			'color': 'dark red',
			'shape': '',
			'feeling': '',
			'image': ''
		},

		{
			'name': 'Onsen',
			'color': 'clear',
			'shape': '',
			'feeling': '',
			'image': ''
		},

		{
			'name': 'Dads Car',
			'color': 'champagne',
			'shape': '',
			'feeling': 'nostalgia',
			'image': ''
		},

		{
			'name': 'Cardboard',
			'color': 'brown',
			'shape': '',
			'feeling': '',
			'image': ''
		},

		{
			'name': 'Manga Collection',
			'color': 'grey',
			'shape': '',
			'feeling': 'nostalgia',
			'image': ''
		},

		{
			'name': 'Swimming Pool',
			'color': 'blue',
			'shape': '',
			'feeling': '',
			'image': ''
		},

		{
			'name': 'NYC streets during summertime',
			'color': 'black',
			'shape': '',
			'feeling': '',
			'image': ''
		},

		{
			'name': 'Chinese New Years Dinner',
			'color': 'red',
			'shape': '',
			'feeling': '',
			'image': ''
		},

		{
			'name': 'Bamboo Forest',
			'color': 'green',
			'shape': '',
			'feeling': '',
			'image': ''
		},

		{
			'name': 'Tatami',
			'color': 'green',
			'shape': '',
			'feeling': '',
			'image': ''
		},

		{
			'name': 'my wallet',
			'color': 'brown',
			'shape': '',
			'feeling': '',
			'image': ''
		},

		{
			'name': 'Warm Souffle',
			'color': 'cream',
			'shape': '',
			'feeling': '',
			'image': ''
		},

		{
			'name': 'Takeout Thai Food',
			'color': 'green',
			'shape': '',
			'feeling': '',
			'image': ''
		},

		{
			'name': 'Makeup',
			'color': 'black',
			'shape': '',
			'feeling': '',
			'image': ''
		},

		{
			'name': 'Shaksuka',
			'color': 'red',
			'shape': '',
			'feeling': '',
			'image': ''
		},

		{
			'name': 'Mom',
			'color': 'purple',
			'shape': '',
			'feeling': '',
			'image': ''
		},

		{
			'name': 'Dad',
			'color': 'grey',
			'shape': '',
			'feeling': '',
			'image': ''
		},

		{
			'name': 'Cigarettes',
			'color': 'red',
			'shape': '',
			'feeling': '',
			'image': ''
		},

		{
			'name': 'Vodka',
			'color': 'white',
			'shape': '',
			'feeling': '',
			'image': ''
		},

		{
			'name': 'Favorite Hand Soap',
			'color': 'white',
			'shape': '',
			'feeling': 'nostalgia',
			'image': ''
		},

	]

	$('#boxlid').click(function(){
		$('#boxlid').css({'display': 'none'});
		$('#boxbody').append('<div id="boxlidshow"></div>');
		$('#title2').css({'display':'inline', 'opacity': '1', 'animation-name': 'fadeInOpacity','animation-iteration-count': '1','animation-timing-function': 'ease-in','animation-duration': '0.75s'});
		$('#more_scroll').css({'display':'inline', 'opacity': '1', 'animation-name': 'fadeInOpacity','animation-iteration-count': '1','animation-timing-function': 'ease-in','animation-duration': '0.75s'});
		$('#sort_filter').css({'display':'inline', 'opacity': '1', 'animation-name': 'fadeInOpacity','animation-iteration-count': '1','animation-timing-function': 'ease-in','animation-duration': '0.75s'});
	});

	$('#boxlid').on('mouseenter', function(){
		$('#title').css({'color': 'white'});
	});
	$('#boxlid').on('mouseleave', function(){
		$('#title').css({'color': 'black'});
	});

	//code for first 3 vials selected randomly
	for(i=0; i<scents[3]; i++){
		$('#items').append('<img src="images/vial.png" class="scents">')
	}

	//sort by 
	$('#sort_filter').click(function(){

	})

	//more 
	$('#more_scroll').click(function(){
		$('#boxlidshow').css({'display':'none'});
		$('body').css({'overflow': 'visible'});
		for(i=0; i<scents.length; i++){
			var scentsDiv = $('<div/>', {'class': 'scents'})
			.data('scents', scents[i])
			.append('<img src="images/vial.png" class="vials">');
			$('#items').append(scentsDiv);
		}
		$('#more_scroll').css({'display':'none'});
		$('#less').css({'display':'inline', 'opacity': '1', 'animation-name': 'fadeInOpacity','animation-iteration-count': '1','animation-timing-function': 'ease-in','animation-duration': '0.75s'});
	});

	//less 
	$('#less').click(function(){
		$('#less').css({'display':'none'});
		$('#more_scroll').css({'display':'inline'});
	});

	//objects 
	$('.scents').on('mouseenter', function(){
		$('body').css({'background-color': scents[i].color});
		console.log(scents[i].name);
	});
	$('.scents').on('mouseleave', function(){
		$('body').css({'background-color':'white'});
	});

});