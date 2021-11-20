/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'anh1': 'anh1.jpg',
  'anh2': 'anh2.jpg'
});


// Define the Characters
monogatari.characters ({
	'y': {
		name: 'Hien',
		color: '#5bcaff'
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene anh1',
		'show notification Welcome',
		{
			'Input': {
				'Text': 'Nhập tên của bạn:',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'Nhập tên cơ mà!'
			}
		},
		'y Chào {{player.name}} Cảm ơn bạn đã đến với SoraYuu!',
		{
			'Choice': {
				'Dialog': 'y Bạn đã sẵn sàng chưa?',
				'Yes': {
					'Text': 'Yes',
					'Do': 'jump Yes'
				},
				'No': {
					'Text': 'No',
					'Do': 'jump No'
				}
			}
		}
	],

	'Yes': [
		'y Câu chuyện bắt đầu.',
		'show scene anh2',
		'y Miyamura Sora là một nhân viên mẫn cán đang làm việc tại bộ phận Công nghệ thuộc công ty sách điện tử Three Start Books.',
		'y Một ngày nọ, khi về đến nhà trong một ngày làm việc vất vả, anh bỗng thấy một chàng trai đang ngủ gật trước cửa nhà mình.',
    'show scene anh3',
		'y Cậu ta vội vã tỉnh giấc',
		'y "Xin chào. Em là Haruno Yuu, nhân viên mới bộ phận Biên tập của Three Star Books."',
		'y "Em có thể vào trong không ạ?"',
		{
			'Choice': {
				'Dialog': 'y Mở cửa cho Yuu vào không?',
				'Yes': {
					'Text': 'Yes',
					'Do': 'jump Yes'
				},
				'No': {
					'Text': 'No',
					'Do': 'jump No'
				}
			},
		'Yes': [

		  ],
		},
		'end'
	],

	'No': [

		'y You can do it now.',

		'show message Help',

		'y Go ahead and create an amazing Game!',
		'y I can’t wait to see what story you’ll tell!',
		'end'
	]
});
