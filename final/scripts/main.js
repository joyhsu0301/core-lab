$(document).ready(function(){

	var scents = [
		{
			'name': 'Beijing Home',
			'color': 'peru',
			'feeling': 'nostalgia',
			'image': 'https://www.pngfind.com/pngs/m/357-3570347_aesthetic-clipart-tumblr-transparent-overlay-aesthetic-stars-png.png'
		},

		{
			'name': 'Taipei Home',
			'color': 'blanchedalmond',
			'feeling': 'vacation',
			'image': 'https://www.pngfind.com/pngs/m/357-3570347_aesthetic-clipart-tumblr-transparent-overlay-aesthetic-stars-png.png'
		},

		{
			'name': 'New York Home',
			'color': 'beige',
			'feeling': 'comfort',
			'image': 'https://www.pngfind.com/pngs/m/357-3570347_aesthetic-clipart-tumblr-transparent-overlay-aesthetic-stars-png.png'
		},

		{
			'name': 'Grandmas House',
			'color': 'sienna',
			'feeling': 'nostalgia',
			'image': 'https://www.pngfind.com/pngs/m/357-3570347_aesthetic-clipart-tumblr-transparent-overlay-aesthetic-stars-png.png'
		},

		{
			'name': 'Junyis House',
			'color': 'cornsilk',
			'feeling': 'happy',
			'image': 'https://www.pngfind.com/pngs/m/357-3570347_aesthetic-clipart-tumblr-transparent-overlay-aesthetic-stars-png.png'
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

	//onclick of each scent 

	//code for first 3 vials selected randomly
	var scentsCopy = scents.slice(0);

	for(i=0; i<3; i++){
		var randomScent = scentsCopy[Math.floor(Math.random()*scentsCopy.length)];
		var index = scentsCopy.indexOf(randomScent);
		scentsCopy.splice(index, 1);
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
		})
		.click(function(){
			positiontop = Math.random()*1000;
			positionleft = Math.random()*1000;
			$('#image_farm').append('<img class="scents_image" style="top: '+positiontop+'px; left: '+positionleft+'px; position: fixed; src="' + $(this).data("randomscent").image + '">');
		});
		$('#random_items').append(scentDiv);
	}

	//sort by 
	$('#sort_filter').click(function(){
		if($('#color_click').data('clicked') === true) {
			$('#grid_items').css({'display': 'flex'});
			$('#color_items').css({'display': 'inline'});
		}
		$('body').css({'overflow-y':'visible'});
		$('#title2').css({'display': 'none'});
		$('body').css({'background-color': 'white'});
		$('#items').css({'display':'none'});
		$('#random_items').css({'display':'none'});
		$('#more_scroll').css({'display': 'none'});
		$('#less').css({'display': 'none'});
		$('.sidenav').css({'width':'100%'});
		$('#sort_filter').css({'display': 'none'});
		$('#image_farm').css({'display': 'none'});
		$('#clear').css({'display': 'none'});
	});

	$('#close').click(function(){
		$('.sidenav').css({'width':'0px'});
		$('#sort_filter').css({'display': 'inline'});
		$('#random_items').css({'display': 'flex'});
		$('#more_scroll').css({'display': 'inline'});
		$('#title2').css({'display': 'inline'});
		$('#grid_items').css({'display': 'none'});
		$('#color_items').css({'display': 'none'});
		$('#image_farm').css({'display': 'inline'});
	});

	//filter
	function searchByColor(color) {
		var filteredArray = scents.filter(scent => scents.color === color).name;
		return filteredArray;
	}
	function searchByFeeling(feeling) {
		var filteredArray = scents.filter(scent => scents.feeling === feeling).name;
		return filteredArray;
	}

	$('#color_click').data('clicked', false).click(function(){
		if($(this).data('clicked') === false) {
			for(i=0; i<scents.length; i++){
				var scentsDiv = $('<div/>', {'class': 'scents'})
				.data('scents', scents[i])
				.append('<img src="images/vial.png" class="vials">')
				.on('mouseenter', function(){
					$('.sidenav').css({'background-color': $(this).data("scents").color});
					console.log($(this).data("scents").name);
					$('.sidenav').append('<h1 id="scent_name" style="display: inline; top: 180px; z-index: 200">' + $(this).data("scents").name + '</h1>');
				})
				.on('mouseleave', function(){
					$('#scent_name').remove();
				});
				$('#grid_items').append(scentsDiv);
			}
			$('#color_click').css({'left': '-100px', 'transform': 'rotate(90deg)', 'margin-top': '-150px'});
			$('#feeling_click').css({'left': '-100px', 'transform': 'rotate(90deg)', 'margin-top': '170px'});
			$('#package_click').css({'left': '-100px', 'transform': 'rotate(90deg)', 'margin-top': '190px'});
			$('#color_items').css({'display': 'inline'});
			$('#red').css({'text-decoration': 'line-through'}).data('clicked', true);
			$(this).data('clicked', true);
		} 
	});

	$('#color_items').on('mouseenter', function(){
		$('#red').click(function(){
			console.log(searchByColor('darkred', 'crimson', 'firebrick'));
		});
	});

	$('#feeling_click').data('clicked', false).click(function(){

	});

	$('#package_click').data('clicked', false).click(function(){

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
				})
				.click(function(){
				positiontop = Math.random()*1000;
				positionleft = Math.random()*1000;
				$('#image_farm').append('<img class="scents_image" style="top: '+positiontop+'px; left: '+positionleft+'px; position: fixed; src="' + $(this).data("scents").image + '">');
				});
				$('#items').append(scentsDiv);
				$(this).data('clicked', true);
			}
		} else{
			$('body').css({'background-color':'white'});
		}
		$('#more_scroll').css({'display':'none'});
		$('#title2').css({'display': 'none'});
		$('#clear').css({'display': 'inline'});
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

	//clear and click me
	$('#clear').click(function(){
		$('#image_farm').empty();
	});
	$('.scents').on('mouseenter', function(){
		$('#title2').css({'display': 'none'});
		$('#clickme').css({'display': 'inline'});
		$('#clear').css({'display': 'none'});
	});
	$('.scents').on('mouseleave', function(){
		$('#clear').css({'display': 'inline'});
		$('#clickme').css({'display': 'none'});
	});


});