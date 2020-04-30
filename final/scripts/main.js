$(document).ready(function(){

	var scents = [
		{
			'name': 'Beijing Home',
			'color': 'peru',
			'feeling': 'nostalgia',
			'image': ''
		},

		{
			'name': 'Taipei Home',
			'color': 'blanchedalmond',
			'feeling': 'vacation',
			'image': ''
		},

		{
			'name': 'New York Home',
			'color': 'beige',
			'feeling': 'comfort',
			'image': ''
		},

		{
			'name': 'Grandmas House',
			'color': 'sienna',
			'feeling': 'nostalgia',
			'image': ''
		},

		{
			'name': 'Junyis House',
			'color': 'cornsilk',
			'feeling': 'happy',
			'image': ''
		},

		{
			'name': 'Kindergarten',
			'color': 'lightblue',
			'feeling': 'nostalgia',
			'image': ''
		},

		{
			'name': 'Home Clothes',
			'color': 'palevioletred',
			'feeling': 'comfort',
			'image': ''
		},

		{
			'name': 'Haneda Airport',
			'color': 'white',
			'feeling': 'nostalgia',
			'image': ''
		},

		{
			'name': 'JFK Airport',
			'color': 'white',
			'feeling': 'sad',
			'image': ''
		},


		{
			'name': 'Color Pencils',
			'color': 'darkred',
			'feeling': 'nostalgia',
			'image': ''
		},

		{
			'name': '7-Eleven',
			'color': 'green',
			'feeling': 'otherworldly',
			'image': ''
		},

		{
			'name': 'Temple Incense',
			'color': 'darkred',
			'feeling': 'otherworldly',
			'image': ''
		},

		{
			'name': 'Onsen',
			'color': 'lightyellow',
			'feeling': 'relaxed',
			'image': ''
		},

		{
			'name': 'Dads Car',
			'color': 'blanchedalmond',
			'feeling': 'nostalgia',
			'image': ''
		},

		{
			'name': 'Cardboard',
			'color': 'peru',
			'feeling': 'nostalgia',
			'image': ''
		},

		{
			'name': 'Manga Collection',
			'color': 'lightgray',
			'feeling': 'comfort',
			'image': ''
		},

		{
			'name': 'Swimming Pool',
			'color': 'deepskyblue',
			'feeling': 'vacation',
			'image': ''
		},

		{
			'name': 'NYC streets',
			'color': 'darkslategray',
			'feeling': 'gross',
			'image': ''
		},

		{
			'name': 'Chinese New Years Dinner',
			'color': 'crimson',
			'feeling': 'comfort',
			'image': ''
		},

		{
			'name': 'Bamboo Forest',
			'color': 'limegreen',
			'feeling': 'relaxed',
			'image': ''
		},

		{
			'name': 'Tatami',
			'color': 'limegreen',
			'feeling': 'comfort',
			'image': ''
		},

		{
			'name': 'My Wallet',
			'color': 'saddlebrown',
			'feeling': 'comfort',
			'image': ''
		},

		{
			'name': 'Warm Souffle',
			'color': 'burlywood',
			'feeling': 'happy',
			'image': ''
		},

		{
			'name': 'Takeout Thai Food',
			'color': 'limegreen',
			'feeling': 'hungry',
			'image': ''
		},

		{
			'name': 'Makeup',
			'color': 'dimgray',
			'feeling': 'sad',
			'image': ''
		},

		{
			'name': 'Shakshuka',
			'color': 'firebrick',
			'feeling': 'hungry',
			'image': ''
		},

		{
			'name': 'Mom',
			'color': 'purple',
			'feeling': 'comfort',
			'image': ''
		},

		{
			'name': 'Dad',
			'color': 'darkseagreen',
			'feeling': 'comfort',
			'image': ''
		},

		{
			'name': 'Cigarettes',
			'color': 'gray',
			'feeling': 'relaxed',
			'image': ''
		},

		{
			'name': 'Vodka',
			'color': 'white',
			'feeling': 'gross',
			'image': ''
		},

		{
			'name': 'Favorite Hand Soap',
			'color': 'white',
			'feeling': 'nostalgia',
			'image': ''
		},

		{
			'name': 'Aesop Hand Cream',
			'color': 'green',
			'feeling': 'happy',
			'image': ''
		}, 

		{
			'name': '75% Alcohol Spray',
			'color': 'white',
			'feeling': 'comfort',
			'image': ''
		}, 

		{
			'name': 'Oil Paint',
			'color': 'oldlace',
			'feeling': 'nostalgia',
			'image': ''
		}, 

		{
			'name': 'Mint',
			'color': 'limegreen',
			'feeling': 'relaxed',
			'image': ''
		},

		{
			'name': 'Scrunched Up Tissue',
			'color': 'oldlace',
			'feeling': 'indifferent',
			'image': ''
		}

	]

	var colors = [
		{
			'name': 'R',
			'image': ''
		},

		{
			'name': 'O',
			'image': ''
		},

		{
			'name': 'Y',
			'image': ''
		},

		{
			'name': 'G',
			'image': ''
		},

		{
			'name': 'B',
			'image': ''
		},

		{
			'name': 'I',
			'image': ''
		},

		{
			'name': 'V',
			'image': ''
		}


	]

	var feelings = [
		{

		},

		{

		},

		{

		},

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
	var scentsCopy = scents.slice(0);

	for(i=0; i<3; i++){
		var randomScent = scentsCopy[Math.floor(Math.random()*scentsCopy.length)];
		scentsCopy.splice(randomScent, 1);
		var scentDiv = $('<div/>', {'class': 'scents'})
		.data('randomscent', scentsCopy)
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

	//sort by 
	$('#sort_filter').data('clicked', false).click(function(){
		if($(this).data('clicked') === false) {
			for(i=0; i<scents.length; i++){
				var scentsDiv = $('<div/>', {'class': 'scents'})
				.data('scents', scents[i])
				.append('<img src="images/vial.png" class="vials">')
				.on('mouseenter', function(){
					$('body').css({'background-color': $(this).data("scents").color});
					console.log($(this).data("scents").name);
					$('body').append('<h1 id="scent_name" style="display: inline; left: 60%; z-index: 100">' + $(this).data("scents").name + '</h1>');
				})
				.on('mouseleave', function(){
					$('#scent_name').remove();
				});
				$('#grid_items').append(scentsDiv);
				$(this).data('clicked', true);
			}
		} else{
			$('body').css({'background-color':'white'});
		}
		$('body').css({'overflow-y':'visible'});
		$('#title2').css({'display': 'none'});
		$('body').css({'background-color': 'white'});
		$('#items').css({'display':'none'});
		$('#random_items').css({'display':'none'});
		$('#grid_items').css({'display':'flex'});
		$('#more_scroll').css({'display': 'none'});
		$('#less').css({'display': 'none'});
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
	$('#color_click').data('clicked', false).click(function(){
		$('body').css({'background-color': 'white'});
		$('#grid_items').css({'display': 'none'});
		$('#color_items').css({'display': 'flex'});

	});

	$('#feeling_click').data('clicked', false).click(function(){
	});

	$('#package_click').click(function(){

	});

	//more 
	$('#more_scroll').data('clicked', false).click(function(){
		if($(this).data('clicked') === false) {
			for(i=0; i<scents.length; i++){
				var scentsDiv = $('<div/>', {'class': 'scents'})
				.data('scents', scents[i])
				.append('<img src="images/vial.png" class="vials">')
				.on('mouseenter', function(){
					$('body').css({'background-color': $(this).data("scents").color});
					console.log($(this).data("scents").name);
					$('body').append('<h1 id="scent_name" style="display: inline; z-index: 100;">' + $(this).data("scents").name + '</h1>');
				})
				.on('mouseleave', function(){
					$('#scent_name').remove();
				});
				$('#items').append(scentsDiv);
				$(this).data('clicked', true);
			}
		} else{
			$('body').css({'background-color':'white'});
		}
		$('#more_scroll').css({'display':'none'});
		$('#less').css({'display':'inline', 'opacity': '1', 'animation-name': 'fadeInOpacity','animation-iteration-count': '1','animation-timing-function': 'ease-in','animation-duration': '0.75s'});
		$('#items').css({'display':'flex'});
		$('#random_items').css({'display': 'none'});
		$('body').css({'overflow': 'visible'});
	});

	//less 
	$('#less').click(function(){
		$('#less').css({'display':'none'});
		$('#more_scroll').css({'display':'inline'});
		$('#items').css({'display':'none'});
		$('#random_items').css({'display': 'flex'});
	});


});