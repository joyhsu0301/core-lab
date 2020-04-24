$(document).ready(function(){

	var scents = [
		{
			'name': 'Beijing Home',
			'color': 'peru',
			'shape': '',
			'feeling': 'nostalgia',
			'image': ''
		},

		{
			'name': 'Taipei Home',
			'color': 'blanchedalmond',
			'shape': '',
			'feeling': 'vacation',
			'image': ''
		},

		{
			'name': 'New York Home',
			'color': 'beige',
			'shape': '',
			'feeling': 'comfort',
			'image': ''
		},

		{
			'name': 'Grandmas House',
			'color': 'sienna',
			'shape': '',
			'feeling': 'nostalgia',
			'image': ''
		},

		{
			'name': 'Junyis House',
			'color': 'cornsilk',
			'shape': '',
			'feeling': 'happy',
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
			'color': 'palevioletred',
			'shape': '',
			'feeling': 'comfort',
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
			'feeling': 'sad',
			'image': ''
		},


		{
			'name': 'Color Pencils',
			'color': 'darkred',
			'shape': '',
			'feeling': 'nostalgia',
			'image': ''
		},

		{
			'name': '7-Eleven',
			'color': 'green',
			'shape': '',
			'feeling': 'otherworldly',
			'image': ''
		},

		{
			'name': 'Temple Incense',
			'color': 'darkred',
			'shape': '',
			'feeling': 'otherworldly',
			'image': ''
		},

		{
			'name': 'Onsen',
			'color': 'lightyellow',
			'shape': '',
			'feeling': 'relaxed',
			'image': ''
		},

		{
			'name': 'Dads Car',
			'color': 'blanchedalmond',
			'shape': '',
			'feeling': 'nostalgia',
			'image': ''
		},

		{
			'name': 'Cardboard',
			'color': 'peru',
			'shape': '',
			'feeling': 'nostalgia',
			'image': ''
		},

		{
			'name': 'Manga Collection',
			'color': 'lightgray',
			'shape': '',
			'feeling': 'comfort',
			'image': ''
		},

		{
			'name': 'Swimming Pool',
			'color': 'deepskyblue',
			'shape': '',
			'feeling': 'vacation',
			'image': ''
		},

		{
			'name': 'NYC streets',
			'color': 'darkslategray',
			'shape': '',
			'feeling': 'gross',
			'image': ''
		},

		{
			'name': 'Chinese New Years Dinner',
			'color': 'crimson',
			'shape': '',
			'feeling': 'comfort',
			'image': ''
		},

		{
			'name': 'Bamboo Forest',
			'color': 'limegreen',
			'shape': '',
			'feeling': 'relaxed',
			'image': ''
		},

		{
			'name': 'Tatami',
			'color': 'limegreen',
			'shape': '',
			'feeling': 'comfort',
			'image': ''
		},

		{
			'name': 'My Wallet',
			'color': 'saddlebrown',
			'shape': '',
			'feeling': 'comfort',
			'image': ''
		},

		{
			'name': 'Warm Souffle',
			'color': 'burlywood',
			'shape': '',
			'feeling': 'happy',
			'image': ''
		},

		{
			'name': 'Takeout Thai Food',
			'color': 'limegreen',
			'shape': '',
			'feeling': 'hungry',
			'image': ''
		},

		{
			'name': 'Makeup',
			'color': 'dimgray',
			'shape': '',
			'feeling': 'sad',
			'image': ''
		},

		{
			'name': 'Shakshuka',
			'color': 'firebrick',
			'shape': '',
			'feeling': 'hungry',
			'image': ''
		},

		{
			'name': 'Mom',
			'color': 'purple',
			'shape': '',
			'feeling': 'comfort',
			'image': ''
		},

		{
			'name': 'Dad',
			'color': 'darkseagreen',
			'shape': '',
			'feeling': 'comfort',
			'image': ''
		},

		{
			'name': 'Cigarettes',
			'color': 'gray',
			'shape': '',
			'feeling': 'relaxed',
			'image': ''
		},

		{
			'name': 'Vodka',
			'color': 'white',
			'shape': '',
			'feeling': 'gross',
			'image': ''
		},

		{
			'name': 'Favorite Hand Soap',
			'color': 'white',
			'shape': '',
			'feeling': 'nostalgia',
			'image': ''
		},

		{
			'name': 'Aesop Hand Cream',
			'color': 'green',
			'shape': '',
			'feeling': 'happy',
			'image': ''
		}, 

		{
			'name': '75% Alcohol Spray',
			'color': 'white',
			'shape': '',
			'feeling': 'comfort',
			'image': ''
		}, 

		{
			'name': 'Oil Paint',
			'color': 'oldlace',
			'shape': '',
			'feeling': 'nostalgia',
			'image': ''
		}, 

		{
			'name': 'Scrunched Up Tissue',
			'color': 'oldlace',
			'shape': '',
			'feeling': 'indifferent',
			'image': ''
		}

	]

	$('#boxlid').click(function(){
		$('#boxlid').css({'display': 'none'});
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
	for(i=0; i<3; i++){
		var randomScent = scents[Math.floor(Math.random()*scents.length)];
		var scentDiv = $('<div/>', {'class': 'scents'})
		.data('randomscent', randomScent)
		.append('<img src="images/vial.png" class="vials">')
		.on('mouseenter', function(){
			console.log($(this).data("randomscent").name);
			$('body').css({'background-color': $(this).data("randomscent").color});
			$('body').append('<h1 id="scent_name" style="display: inline;">' + $(this).data("randomscent").name + '</h1>');
		})
		.on('mouseleave', function(){
			$('#scent_name').remove();
		});
		$('#random_items').append(scentDiv);
	}

	// for(i=0; i<3; i++){
	// 	var randomScent = scents[Math.floor(Math.random()*scents.length)];
	// 	var scentDiv = $('<div/>', {'class': 'scents'})
	// 	var noRepeat = randomScent.includes('')
	// 	.data('randomscent', randomScent)
	// 	.append('<img src="images/vial.png" class="vials">')
	// 	.on('mouseenter', function(){
	// 		if($(this).data(randomscent).name === noRepeat) {
	// 			console.log($(this).data("randomscent").name);
	// 			$('body').css({'background-color': $(this).data("randomscent").color});
	// 			$('body').append('<h1 id="scent_name" style="display: inline;">' + $(this).data("randomscent").name + '</h1>');
	// 		} else {

	// 		}
	// 	})
	// 	.on('mouseleave', function(){
	// 		$('#scent_name').remove();
	// 	});
	// 	$('#random_items').append(scentDiv);
	// }

	//sort by 
	$('#sort_filter').click(function(){
		$('.sidenav').css({'width':'300px'});
		$('#sort_filter').css({'display': 'none'});
	});
	$('#close').click(function(){
		$('.sidenav').css({'width':'0px'});
		$('#sort_filter').css({'display': 'inline'});
		$('#grid_items').css({'display': 'none'});
		$('#random_items').css({'display': 'flex'});
		$('#more_scroll').css({'display': 'inline'});
		$('#title2').css({'display': 'inline'});
	});

	//filter
	$('#color_click').click(function(){
		$('body').css({'background-color': 'white'});
		$('#items').css({'display':'none'});
		$('#random_items').css({'display':'none'});
		$('#grid_items').css({'display':'flex'});
		$('#more_scroll').css({'display': 'none'});
		$('#less').css({'display': 'none'});
		for(i=0; i<scents.length; i++){
			var scentsDiv = $('<div/>', {'class': 'scents'})
			.data('scents', scents[i])
			.append('<img src="images/vial.png" class="vials">')
			.on('mouseenter', function(){
				$('body').css({'background-color': $(this).data("scents").color});
				console.log($(this).data("scents").name);
				$('body').append('<h1 id="scent_name" style="display: inline; left: 60%;">' + $(this).data("scents").name + '</h1>');
			})
			.on('mouseleave', function(){
				$('#scent_name').remove();
			});
			$('#grid_items').append(scentsDiv);
		}
		$('body').css({'overflow-y':'visible'});
		$('#title2').css({'display': 'none'});
	});
	$('#feeling_click').click(function(){
		$('body').css({'background-color': 'white'});
		$('#items').css({'display':'none'});
		$('#random_items').css({'display':'none'});
		$('#grid_items').css({'display':'flex'});
		$('#more_scroll').css({'display': 'none'});
		$('#less').css({'display': 'none'});
		$('body').css({'overflow-y':'visible'});
		$('#title2').css({'display': 'none'});
		for(i=0; i<scents.length; i++){
			var scentsDiv = $('<div/>', {'class': 'scents'})
			.data('scents', scents[i])
			.append('<img src="images/vial.png" class="vials">')
			.on('mouseenter', function(){
				$('body').css({'background-color': $(this).data("scents").color});
				console.log($(this).data("scents").name);
				$('body').append('<h1 id="scent_name" style="display: inline; left: 60%;">' + $(this).data("scents").name + '</h1>');
			})
			.on('mouseleave', function(){
				$('#scent_name').remove();
			});
			$('#grid_items').append(scentsDiv);
		}
	});

	//more 
	$('#more_scroll').click(function(){
		$('#random_items').css({'display': 'none'});
		$('body').css({'overflow': 'visible'});
		for(i=0; i<scents.length; i++){
			var scentsDiv = $('<div/>', {'class': 'scents'})
			.data('scents', scents[i])
			.append('<img src="images/vial.png" class="vials">')
			.on('mouseenter', function(){
				$('body').css({'background-color': $(this).data("scents").color});
				console.log($(this).data("scents").name);
				$('body').append('<h1 id="scent_name" style="display: inline;">' + $(this).data("scents").name + '</h1>');
			})
			.on('mouseleave', function(){
				$('#scent_name').remove();
			});
			$('#items').append(scentsDiv);
		}
		$('#more_scroll').css({'display':'none'});
		$('#less').css({'display':'inline', 'opacity': '1', 'animation-name': 'fadeInOpacity','animation-iteration-count': '1','animation-timing-function': 'ease-in','animation-duration': '0.75s'});
		$('#items').css({'display':'flex'});
	});

	//less 
	$('#less').click(function(){
		$('#less').css({'display':'none'});
		$('#more_scroll').css({'display':'inline'});
		$('#items').css({'display':'none'});
		$('#random_items').css({'display': 'flex'});
	});


});