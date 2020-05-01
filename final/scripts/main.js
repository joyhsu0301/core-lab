$(document).ready(function(){

	var scents = [
		{
			'name': 'Beijing Home',
			'color': 'peru',
			'feeling': 'nostalgia',
			'image': 'https://pngimg.com/uploads/sofa/sofa_PNG6955.png',
			'width': '100',
			'height': '50'
		},

		{
			'name': 'Taipei Home',
			'color': 'blanchedalmond',
			'feeling': 'vacation',
			'image': 'http://www.pngmart.com/files/11/Firewood-Sacked-Transparent-PNG.png',
			'width': '100',
			'height': '66'
		},

		{
			'name': 'New York Home',
			'color': 'beige',
			'feeling': 'comfort',
			'image': 'images/ein.png',
			'width': '76',
			'height': '100'
		},

		{
			'name': 'Grandmas House',
			'color': 'sienna',
			'feeling': 'nostalgia',
			'image': 'images/buddha.png',
			'width': '80',
			'height': '100'
		},

		{
			'name': 'Junyis House',
			'color': 'cornsilk',
			'feeling': 'happy',
			'image': 'images/plates.png',
			'width': '100',
			'height': '100'
		},

		{
			'name': 'Kindergarten',
			'color': 'lightblue',
			'feeling': 'nostalgia',
			'image': 'images/kid.png',
			'width': '65',
			'height': '100'
		},

		{
			'name': 'Home Clothes',
			'color': 'palevioletred',
			'feeling': 'comfort',
			'image': 'images/tshirt.png',
			'width': '100',
			'height': '100'
		},

		{
			'name': 'Haneda Airport',
			'color': 'white',
			'feeling': 'nostalgia',
			'image': 'images/tiat.png',
			'width': '100',
			'height': '100'
		},

		{
			'name': 'JFK Airport',
			'color': 'white',
			'feeling': 'sad',
			'image': 'images/hands.png',
			'width': '100',
			'height': '80'
		},


		{
			'name': 'Color Pencils',
			'color': 'darkred',
			'feeling': 'nostalgia',
			'image': 'images/pencils.png',
			'width': '60',
			'height': '100'
		},

		{
			'name': '7-Eleven',
			'color': 'green',
			'feeling': 'otherworldly',
			'image': 'images/oden.png',
			'width': '100',
			'height': '80'
		},

		{
			'name': 'Temple Incense',
			'color': 'darkred',
			'feeling': 'otherworldly',
			'image': 'images/incense.png',
			'width': '70',
			'height': '100'
		},

		{
			'name': 'Onsen',
			'color': 'lightyellow',
			'feeling': 'relaxed',
			'image': 'https://b.kisscc0.com/20190326/qaq/kisscc0-hot-spring-computer-icons-onsen-spa-red-onsen-mark-5c9a3803b07ac2.7596500315536107557229.png',
			'width': '100',
			'height': '70'
		},

		{
			'name': 'Dads Car',
			'color': 'blanchedalmond',
			'feeling': 'nostalgia',
			'image': 'images/car.png',
			'width': '70',
			'height': '100'
		},

		{
			'name': 'Cardboard',
			'color': 'peru',
			'feeling': 'nostalgia',
			'image': 'images/cardboard.png',
			'width': '100',
			'height': '50'
		},

		{
			'name': 'Manga Collection',
			'color': 'lightgray',
			'feeling': 'comfort',
			'image': 'https://upload.wikimedia.org/wikipedia/en/5/50/Cardcaptor_Sakura_vol1_cover.jpg',
			'width': '65',
			'height': '100'
		},

		{
			'name': 'Swimming Pool',
			'color': 'deepskyblue',
			'feeling': 'vacation',
			'image': 'https://pluspng.com/img-png/swimming-goggles-png-swb-1m-sm-y-png-842.png',
			'width': '100',
			'height': '60'
		},

		{
			'name': 'NYC streets',
			'color': 'darkslategray',
			'feeling': 'gross',
			'image': 'images/trash.png',
			'width': '90',
			'height': '100'
		},

		{
			'name': 'Chinese New Years Dinner',
			'color': 'crimson',
			'feeling': 'comfort',
			'image': 'images/fish.png',
			'width': '100',
			'height': '100'
		},

		{
			'name': 'Bamboo Forest',
			'color': 'limegreen',
			'feeling': 'relaxed',
			'image': 'images/bamboo.png',
			'width': '70',
			'height': '100'
		},

		{
			'name': 'Tatami',
			'color': 'limegreen',
			'feeling': 'comfort',
			'image': 'images/table.png',
			'width': '100',
			'height': '75'
		},

		{
			'name': 'My Wallet',
			'color': 'saddlebrown',
			'feeling': 'comfort',
			'image': 'images/wallet.png',
			'width': '100',
			'height': '65'
		},

		{
			'name': 'Warm Souffle',
			'color': 'burlywood',
			'feeling': 'happy',
			'image': 'images/souffle.png',
			'width': '80',
			'height': '80'
		},

		{
			'name': 'Takeout Thai Food',
			'color': 'limegreen',
			'feeling': 'hungry',
			'image': 'images/box.png',
			'width': '100',
			'height': '100'
		},

		{
			'name': 'Makeup',
			'color': 'dimgray',
			'feeling': 'sad',
			'image': 'images/makeup.png',
			'width': '140',
			'height': '100'
		},

		{
			'name': 'Shakshuka',
			'color': 'firebrick',
			'feeling': 'hungry',
			'image': 'images/shakshuka.png',
			'width': '80',
			'height': '80'
		},

		{
			'name': 'Mom',
			'color': 'purple',
			'feeling': 'comfort',
			'image': 'https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Jewelry-and-Diamonds-PNG/Transparent_Wedding_Rings_Clipart.png?m=1507172105',
			'width': '80',
			'height': '80'
		},

		{
			'name': 'Dad',
			'color': 'darkseagreen',
			'feeling': 'comfort',
			'image': 'images/cardholder.png',
			'width': '100',
			'height': '100'
		},

		{
			'name': 'Cigarettes',
			'color': 'gray',
			'feeling': 'relaxed',
			'image': 'images/melvius.png',
			'width': '60',
			'height': '90'
		},

		{
			'name': 'Vodka',
			'color': 'white',
			'feeling': 'gross',
			'image': 'images/vodka.png',
			'width': '50',
			'height': '110'
		},

		{
			'name': 'Favorite Hand Soap',
			'color': 'white',
			'feeling': 'nostalgia',
			'image': 'https://cdn5.hermo.my/product_images/malls/42915_senka-perfect-whip-for-body-500ml_440_280_1564998412.png',
			'width': '180',
			'height': '100'
		},

		{
			'name': 'Aesop Hand Cream',
			'color': 'green',
			'feeling': 'happy',
			'image': 'images/lotion.png',
			'width': '110',
			'height': '110'
		}, 

		{
			'name': '75% Alcohol Spray',
			'color': 'white',
			'feeling': 'comfort',
			'image': 'images/spray.png',
			'width': '70',
			'height': '120'
		}, 

		{
			'name': 'Oil Paint',
			'color': 'oldlace',
			'feeling': 'nostalgia',
			'image': 'images/gamsol.png',
			'width': '100',
			'height': '100'
		}, 

		{
			'name': 'Mint',
			'color': 'limegreen',
			'feeling': 'relaxed',
			'image': 'images/mint.png',
			'width': '35',
			'height': '70'
		},

		{
			'name': 'Scrunched Up Tissue',
			'color': 'oldlace',
			'feeling': 'indifferent',
			'image': 'https://lh3.googleusercontent.com/proxy/BrYsdU77qpIdVpMx4O4qrF0xaA7sKRKY7iOtqew20KpBdXU9jbjGcrJRu-dEWVcXwedVBERrMh8Pb2WghsZ2hTrSmWRlqC347XH8Tr8-WzMgH-543DA',
			'width': '100',
			'height': '100'
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
			$('#image_farm').append('<img src="'+$(this).data("randomscent").image+'" style="top: '+positiontop+'px; left: '+positionleft+'px; width: '+$(this).data("randomscent").width+'px; height: '+$(this).data("randomscent").height+'px; position: fixed;">');
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
		$('#image_farm').empty();
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
					$('#image_farm').append('<img src="'+$(this).data("scents").image+'" style="top: '+positiontop+'px; left: '+positionleft+'px; width: '+$(this).data("scents").width+'px; height: '+$(this).data("scents").height+'px; position: fixed;">');
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