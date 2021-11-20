/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Gửi boom cho biên kịch Super Rác #j4f',
		subtitle: 'Trước khi tạm biệt, hãy cùng click vào button bên dưới để góp phần ship boom mắm tôm đến nhà biên kịch SR.',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a></p>
			<p><a href='https://monogatari.io/demo/'>Demo</a></p>
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
	'knock': 'knock.mp3',
	'tvnoise': 'tvnoise.mp3',
	'suspense': 'suspense.mp3',
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
  'sora': 'sora.jpg',
	'yuu1': 'anh4.png',
	'room': 'anh5.png',
	'soraroom': 'anh6.png',
	'door': 'door.jpg',
	'tv': 'tv.jpg',
});


// Define the Characters
monogatari.characters ({
	'h': {
		name: 'Hien',
		color: '#ff006a'
	},
	's': {
		name: 'Sora',
		color: '#0254ec'
	},
	'y': {
		name: 'Yuu',
		color: '#ff0000'
	},
	n : {
	},
	ptv : {
		name: "Phát thanh viên",
		color: '#ffffff'
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
		'h Chào mừng {{player.name}} đến với SoraYuu world!',
		{
			'Choice': {
				'Dialog': 'h Bạn đã sẵn sàng khám phá chưa?',
				'Yes': {
					'Text': 'Let\'s gooo!',
					'Do': 'jump Yes'
				},
				'No': {
					'Text': 'Khoan, dừng khoảng chừng là 2s',
					'Do': 'jump No'
				}
			}
		}
	],

	'Yes': [
		'h Câu chuyện bắt đầu.',
		'show scene sora',
		// 'n Miyamura Sora, một nhân viên phòng Công nghệ công ty Three Start Books.',
		// 'n Một ngày nọ, khi trở về nhà trong một ngày làm việc vất vả, anh bỗng thấy một chàng trai đang ngồi trước cửa nhà mình.',
    // 'show scene yuu1',
	  // 's Ai đây? Sao cậu ta lại ở đây giờ này? Trước cửa nhà anh? ',
		// 'n Sora còn kịp định thần, cậu trai đã lên tiếng trước... ',
		// 'y "Sao anh về muộn thế..."',
		// 'n Cùng với vẻ mặt có chút giận dỗi.',
		// 'n Sora có chút ngỡ ngàng.',
		// 'n Cái thái độ này là sao? Mình quen cậu ta à?',
		// 'n Mình thậm chí còn chưa gặp cậu ta bao giờ mà?',
		// 'n Sora còn chưa kịp bình tâm, câu trai đã lại một lần nữa lên tiếng',
		'y "Sao anh còn đứng như trời trồng ở đó làm gì, mau mở cửa cho em vào với, lạnh chết đi được.',
		{
			'Choice': {
				'Dialog': '',
				'Open': {
					'Text': 'Mở cửa cho cậu ấy vào',
					'Do': 'jump Open'
				},
				'Close': {
					'Text': 'Không cho cậu ta vào',
					'Do': 'jump Close'
				}
			},
		},
		'end'
	],

	'No': [
		'y Hẹn gặp lại khi bạn sẵn sàng!',
		'show message Help',
		'end'
	],

	'Open': [
		'show scene room',
		'n Cả hai cũng bước vào nhà.',

	],

	'Close': [
		'show scene soraroom',
		'n Sora mở cửa, nhanh chóng bước vào rồi ngay lập tức đóng sầm cửa lại.',
		's "Chắc lại bọn lừa đảo thôi."',
		'show scene door',
		'play music knock',
		'n Tuy vậy, cậu trai ngoài kia hình như chưa có ý định từ bỏ.',
		'y "Này này, anh làm cái trò gì vậy?"',
		'play music knock',
		'n Cậu ta không ngừng gõ cửa',
		'y "Mở cửa ra cho em!"',
		'show scene #fffff with fadeIn',
		'n Thời gian dần trôi qua.',
		'play music tvnoise',
		'show scene tv',
		'ptv "Vào lúc 9h tối ngày xx/xx/xxxx, tại khu nhà xx phường xx thành phố xxx...',
		'ptv "Đã phát hiện một thi thể nam giới',
		'ptv "Người đàn ông đó không phải chủ căn hộ. Có vẻ như đã vài ngày trôi qua sau cái chết của anh ta."',
		'ptv "Nguyên nhân tử vong bước đầu được xác định là do tự tử."',
		'play music suspense',
		'show scene #fffff with fadeIn',
		'show scene #fffff with fadeIn',
		'n ENDING 6 "CẬU TA LÀ AI?" (Bad ending)',
		'n Thực ra Yuu là một sinh viên nghèo. Do không chịu được áp lực cuộc sống, cậu ấy đã tự kết liễu đời mình',
		'end'
	],
});
