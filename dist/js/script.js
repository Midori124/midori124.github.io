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
		title: 'Xin chào!',
		body: 'Đây là SoraYuu world',
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
	'theme': 'theme.mp3',
	'cook': 'cook.mp3',
	'chopping': 'chopping.mp3',
	'putplate': 'putplate.mp3',
	'theme01': 'theme01.mp3',
	'sayonara': 'sayonara.mp3',
	'another': 'another.mp3',
	'ending1': 'ending1.mp3',
	'ending2': 'ending2.mp3',
	'ending3': 'ending3.mp3',
	'ending4': 'ending4.mp3',
	'ending5': 'ending5.mp3',
	'ending6': 'ending6.mp3',
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
	'hourse': 'hourse.png',
	'anh1': 'anh1.jpg',
  'sora': 'sora.jpg',
	'yuu1': 'anh4.png',
	'room': 'yuu_room.png',
	'soralook': 'soralook.png',
	'sit': 'sit.png',
	'cook': 'cook.png',
	'food': 'food.png',
	'yuu2': 'yuu2.png',
	'yuu3': 'yuu3.png',
	'yuusad': 'yuusad.png',
	'yuulook': 'yuulook.png',
	'yuucry1': 'yuucry1.png',
	'yuucry2': 'yuucry2.png',
	'out': 'out.png',
	'eat': 'eat.png',
	'soraroom': 'anh6.png',
	'door': 'door.jpg',
	'tv': 'tv.jpg',
	'sorasad': 'sorasad.png',
});


// Define the Characters
monogatari.characters ({
	'h': {
		name: 'Hien',
		color: '#ff006a'
	},
	's': {
		name: 'Người đàn ông',
		color: '#0254ec'
	},
	'y': {
		name: 'Cậu trai',
		color: '#ff0000'
	},
	n : {
	},
	ptv : {
		name: "Tiếng TV",
		color: '#ffffff'
	}

});

monogatari.script ({
	// The game starts here.
	'Start': [
		// 'play music theme',
		'show scene anh1',
		// 'show notification Welcome',
		// {
		// 	'Input': {
		// 		'Text': 'Cho mình biết tên bạn nhé?',
		// 		'Validation': function (input) {
		// 			return input.trim ().length > 0;
		// 		},
		// 		'Save': function (input) {
		// 			this.storage ({
		// 				player: {
		// 					name: input
		// 				}
		// 			});
		// 			return true;
		// 		},
		// 		'Revert': function () {
		// 			this.storage ({
		// 				player: {
		// 					name: ''
		// 				}
		// 			});
		// 		},
		// 		'Warning': 'Nhập tên cơ mà!'
		// 	}
		// },
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
		'show scene hourse',
		// 'n Một ngày nọ, khi trở về nhà trong một ngày làm việc vất vả, người đàn ông bỗng thấy một chàng trai đang ngồi trước cửa nhà mình.',
	  // 's Ai đây? Sao cậu ta lại ở đây giờ này? Trước cửa nhà mình? ',
		'show scene yuu1',
		// 'n Anh còn kịp định thần, cậu trai đã lên tiếng trước... ',
		'y "Sao anh về muộn thế..."',
		// 'n Cùng với vẻ mặt có chút giận dỗi.',
		// 'n Anh có chút ngỡ ngàng.',
		// 's Cái thái độ này là sao? Mình quen cậu ta à?',
		// 's Mình thậm chí còn chưa gặp cậu ta bao giờ mà?',
		// 'n Anh còn chưa kịp bình tâm, câu trai đã lại một lần nữa lên tiếng',
		'y "Sao anh còn đứng như trời trồng ở đó làm gì."',
		'y "Mau mở cửa cho em vào với, lạnh chết đi được."',
		{
			'Choice': {
				'Dialog': 'Có mở cửa cho cậu ấy không?',
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
		'y "Anh ngồi đi, chờ em chút"',
		'n Rồi cậu ấy tiến về phía bếp và bắt đầu chuẩn bị bữa ăn.',
		'show scene cook',
		'play music chopping',
		'y "Hôm nay anh lại phải làm thêm à?"',
		'stop music chopping',
		'play music cook',
		'y "Anh lại làm hộ phần người khác đúng không!"',
		'y "Anh thật là... Lúc nào cũng tốt bụng như thế."',
		'show scene #fffff with fadeIn',
		'n Anh cảm thấy bối rối.',
		'n Một cậu thanh niên lạ mặt bước vào nhà và nấu ăn cho anh.',
		'n Nghĩ thế nào thì chuyện này cũng không bình thường.',
		'stop music cook',
		'play music theme01',
		'show scene soralook',
		'n Nhưng không hiểu sao trái tim anh cảm thấy bình yên đến lạ.',
		'n Một bầu không khí ấm áp bao trùm căn phòng.',
		'show scene food',
		'play music putplate',
		'stop music putplate',
		'y "Xong rồi. Tuy chỉ vài món đơn giản thôi nhưng mà..."',
		'n Thật kỳ lạ, những món ăn này phù hợp với khẩu vị của anh đến khó tin.',
		'show scene yuu2',
		'y "Anh thấy thế nào... Có ngon không?"',
		'n Anh chầm chậm gật đầu.',
		'show scene yuu3',
		'y "Tốt quá rồi."',
		'n Gương mặt Yuu tràn ngập ý cười dịu dàng.',
		'show scene yuusad',
		'y "Gần đây anh không chịu ăn uống đầy đủ đúng không?"',
		'y "Công việc có bận rộn thế nào thì cũng phải ăn chứ!"',
		'y "Không thì lấy sức đâu mà làm việc."',
		'n Cuộc trò chuyện diễn ra suôn sẻ đến bất ngờ.',
		'n Cứ như thể nó đã lặp đi lặp lại nhiều lần vậy.',
		'y "Anh nhớ phải ăn uống đầy đủ đấy nhé!"',
		'y "Nhớ đấy, Sora-kun chỉ biết hứa xuông thôi à!"',
		'stop music theme01',
		'show scene #000000',
		'play music another',
		'n Anh bàng hoàng ngước lên nhìn cậu trai.',
		'show scene yuulook',
		'y "Sao anh nhìn em như vật thể lạ vậy?"',
		's "..."',
		's "Sao..."',
		's "Sao... cậu biết tên tôi?"',
		'y "Anh hỏi gì lạ vậy? Đùa chẳng vui chút nào!"',
		's "..."',
		'n Cậu thở dài.',
		'y "Miyamura Sora."',
		'y "30 tuổi, sinh ngày xx/xx/1991. Quê ở Gunma."',
		'y "Nhân viên công ty Three Star Books."',
		'y "Thích đọc sách, nấu ăn, đi suối nước nóng."',
		's "..."',
		'y "Hmmm!"',
		'y "Sora-kun làm việc quá sức rồi đó!"',
		'show scene #000000',
		'n Sau khi ăn xong, cậu ấy đứng dậy thu dọn bát đĩa và tiến về phía bồn rửa.',
		'n Xong xuôi đâu đấy, cậu thu dọn đồ và tiến về phía cửa.',
		'show scene out',
		'y "Muộn rồi, anh nghỉ ngơi đi."',
		'y "Hẹn mai gặp lại!"',
		'y "Còn chuyện kia... Cô ấy chắc sẽ tự quyết định."',
		'n Rồi cậu ấy vội vã ra khỏi căn phòng.',
		'n Anh quay vào phòng, bất giác nhìn vào điện thoại.',
		'n Không biết từ khi nào mà ngày tháng đã thay đổi mất rồi.',
		'show scene #fffff',
		'n Anh vội vã chạy ra ngoài...',
		'n Nhưng dường như bóng hình cậu trai kia đã tan biến vào hư không.',
		'n Cùng cuộc gặp gỡ kỳ lạ ngày hôm đó...',
		'stop music another',
		'show scene #fffff',
		'n Ngày hôm sau',
		'n Anh tiếp tục đi làm.',
		'show scene eat',
		'n Nhưng trong đầu anh chỉ toàn vang vọng cuộc trò chuyện hôm qua...',
		'n Anh không thể ngừng suy nghĩ về cậu trai kỳ lạ đó.',
		's Có lẽ mình nên gọi điện cho Shoji chăng?',
		{
			'Choice': {
				'Dialog': 'Có gọi điện Shoji không?',
				'Talk': {
					'Text': 'Gọi điện cho Shoji',
					'Do': 'jump Talk'
				},
				'Dont': {
					'Text': 'Không gọi điện.',
					'Do': 'jump Dont'
				}
			},
		},
		'end'
	],

	'Close': [
		'show scene soraroom',
		'n Anh mở cửa, nhanh chóng bước vào rồi ngay lập tức đóng sầm cửa lại.',
		's "Bỏ mặc cậu trai ngơ ngác trước cửa."',
		'show scene door',
		'play music knock',
		'n Tuy vậy, cậu trai ngoài kia hình như chưa có ý định từ bỏ.',
		'y "Này này, anh làm cái trò gì vậy?"',
		'play music knock',
		'n Cậu ta không ngừng gõ cửa',
		'y "...!"',
		'y "...!"',
		'play music knock',
		'y "...!"',
		'y "Làm ơn đi mà..."',
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
		'n ENDING 6 (Bad ending) "CẬU TA LÀ AI?"',
		'stop music suspense',
		'end'
	],

	'Talk' : [
		'show scene shoji',

	],

	'Dont' : [
		'show scene hourse',
		'n Tối hôm đó, khi người đàn ông trở về nhà.',
		'show scene yuu1',
		'y "Hôm nay anh về muộn thế!"',
		'y "Anh muốn ăn gì nào?"',
		'show scene #fffff',
		'n Ngày lại ngày trôi qua.',
		'n Tối nào cậu trai ấy cũng đến nhà anh.',
		'show scene yuulook',
		'y "Bảo không shock thì cũng không đúng."',
		'y "Nhưng em hiểu được mà."',
		'y "Vì Sora-kun đã nói là không nhận ra em mà."',
		'y "Biết làm thế nào được."',
		'y "Chuyện mất trí nhớ..."',
		'show scene #fffff',
		'n Người đàn ông đã thành thực nói với cậu trai ấy...',
		'n Rằng anh hoàn toàn không nhớ cậu là ai.',
		'n Để tìm lại những ký ức đã mất...',
		'n Anh đã thử ngồi trò chuyện cùng cậu trai ấy.',
		'show scene yuucry1',
		'y "Những chuyện tăm tối ngày xưa, em không muốn nhắc lại nữa."',
		'y "Em của ngày hôm nay đã thay đổi rồi."',
		'y "Có lẽ là nhờ Sora-kun chăng?"',
		'y "Vì sao ấy hả?"',
		'y "Hì. Em không nói đâu!"',
		'y "Nhờ có Sora-kun mà em phát hiện ra những điều mình muốn làm, những nơi em muốn đến."',
		'y "Thật tốt vì em đã quyết định ở bên anh."',
		'y "Chỉ cần có Sora-kun ở bên."',
		'show scene yuucry2',
		'y "Nhưng chuyện này không phải một sớm một chiều đã nhận ra đâu nhỉ."',
		'y "Sora-kun..."',
		'y "Anh khóc đấy à?"',
		'y "Không phải là..."',
		'y "Anh đã nhớ ra mọi chuyện rồi chứ?"',
		{
			'Choice': {
				'Dialog': 'Chàng trai đã nhớ lại mọi chuyện?',
				'Remember': {
					'Text': 'Đã nhớ ra tất cả',
					'Do': 'jump Remember'
				},
				'NotYet': {
					'Text': 'Vẫn chưa hồi phục trí nhớ',
					'Do': 'jump NotYet'
				}
			},
		}
	],

	'Remember' : [

	],

	'NotYet' : [
		'play music sayonara',
    'show scene sorasad',
		's Tôi vẫn chưa nhớ lại được gì.',
		's Không, đúng hơn là tôi không dám nhớ lại',
		's Những ký ức không mấy tốt đẹp...',
		'stop music sayonara',
		'show scene #fffff with fadeIn',
		'play music tvnoise',
		'show scene tv',
		'ptv "Vào lúc 9h tối ngày xx/xx/xxxx, tại khu nhà xx phường xx thành phố xxx...',
		'ptv "Đã phát hiện một thi thể nam giới',
		'ptv "Người đàn ông đó không phải chủ căn hộ. Có vẻ như đã vài ngày trôi qua sau cái chết của anh ta."',
		'ptv "Nguyên nhân tử vong hiện đang được xác định."',
		'play music suspense',
		'show scene #fffff with fadeIn',
		'n ENDING 5 (Bad ending) "MÃI MÃI BÊN NHAU!"',
		'stop music suspense',
		'end'
	],

});
