var balls = 
[	
	{
		'name': 'baseball',			
		'color': 'white with red stitching',
		'material': 'cowhide',
		'size': 'small',
		'emoji': '⚾️',
		'image': 'baseball.png'
	},

	{
		'name': 'tennis ball',
		'color': 'neon yellow with one white stripe',
		'material': 'nylon',
		'size': 'small',
		'emoji': '🎾',
		'image': 'tennisball.png'
	},

	{
		'name': 'rugby ball',
		'color': 'brown with whtie stitching',
		'material': 'leather',
		'size': 'medium',
		'emoji': '🏈',
		'image': 'rugbyball.png'
	},

	{
		'name': 'basketball',
		'color': 'orange with black stripes',
		'material': 'leather',
		'size': 'medium',
		'emoji': '🏀',
		'image': 'basketball.png'
	},

	{
		'name': 'volleyball',
		'color': 'white',
		'material': 'leather',
		'size': 'medium',
		'emoji': '🏐',
		'image': 'volleyball.png'
	}

]

// for(var i=0; i<balls.length; i++) {
// 	var ballDivs = $('<div/>', {'class': 'box'})
// 		.data('ball', balls[i])
// 		.html(balls[i].name)
// 		.click(function(){
// 			$(this).append('<img src=" ' +  $(this).data('ball').image + '">')
// 		})

// 	$('#container').append(ballDivs)
// }

$('body').keydown(function(){
	for(i=0; i<balls.length; i++) {
		positiontop = Math.random()*1000;
		positionleft = Math.random()*1000;
		zindex = i;
		$('body').append('<img src="'+balls[i].image+'" style="top: '+positiontop+'px;'+'right: '+positionleft+'px;'+'z-index: '+zindex+';">')
	}
})

	