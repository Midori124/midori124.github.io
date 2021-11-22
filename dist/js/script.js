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
monogatari.action ('Canvas').objects ({
	stars: {
		layers: ['sky', 'stars'],
		props: {
			drawStar: (ctx, r) => {
				ctx.save();
				ctx.beginPath();
				ctx.moveTo(r, 0);
				for (let i = 0; i < 9; i++) {
					ctx.rotate(Math.PI / 5);
					if (i % 2 === 0) {
						ctx.lineTo((r / 0.525731) * 0.200811, 0);
					} else {
						ctx.lineTo(r, 0);
					}
				}
				ctx.closePath();
				ctx.fill();
				ctx.restore();
			},
			drawSky: (sky) => {
				const width = sky.width;
				const height = sky.height;
				const ctx = sky.getContext('2d');
				ctx.fillRect(0, 0, width, height);
				ctx.translate(width / 2, height / 2);
				// Create a circular clipping path
				ctx.beginPath();
				ctx.arc(0, 0, width * 0.4, 0, Math.PI * 2, true);
				ctx.clip();
				// draw background
				const lingrad = ctx.createLinearGradient(0, -1 * width / 2, 0, height / 2);
				lingrad.addColorStop(0, '#232256');
				lingrad.addColorStop(1, '#143778');
				ctx.fillStyle = lingrad;
				ctx.fillRect(-width/2, -height/2, width, height);
			},
			drawStars: (stars, drawStar) => {
				const width = stars.width;
				const height = stars.height;
				const ctx = stars.getContext('2d');
				// draw stars
				for (var j = 1; j < 50; j++) {
					ctx.save();
					ctx.fillStyle = '#fff';
					ctx.translate(width - Math.floor(Math.random() * width), height - Math.floor(Math.random() * height));
					drawStar(ctx, Math.floor(Math.random() * 4) + 2);
					ctx.restore();
				}
			}
		},
		start: function ({ sky, stars }, props, state, container) {
			let width = 150;
			let height = 150;
			if (container.props.mode === 'background') {
				width = this.width ();
				height = this.height ();
			}
			sky.width = width;
			sky.height = height;
			stars.width = width;
			stars.height = height;
			props.drawSky (sky);
			props.drawStars (stars, props.drawStar);
			return Promise.resolve ();
		},
		stop: ({ sky, stars }, props, state, container) => {
			sky.getContext('2d').clearRect (0, 0, sky.width, sky.height);
			stars.getContext('2d').clearRect (0, 0, stars.width, stars.height);
		},
		resize: function ({ sky, stars }, props, state, container) {
			if (container.props.mode === 'background') {
				const width = this.width ();
				const height = this.height ();
				sky.getContext('2d').clearRect (0, 0, sky.width, sky.height);
				stars.getContext('2d').clearRect (0, 0, stars.width, stars.height);
				sky.width = width;
				sky.height = height;
				stars.width = width;
				stars.height = height;
				props.drawSky (sky);
				props.drawStars (stars, props.drawStar);
			}
		}
	}
});

monogatari.action('Particles').particles({
	'fireflies': {
			'particles': {
					'number': {
							'value': 202,
							'density': {
									'enable': true,
									'value_area': 800
							}
					},
					'color': {
							'value': '#ffffff'
					},
					'shape': {
							'type': 'circle',
							'stroke': {
									'width': 0,
									'color': '#000000'
							},
							'polygon': {
									'nb_sides': 5
							},
							'image': {
									'src': 'img/github.svg',
									'width': 100,
									'height': 100
							}
					},
					'opacity': {
							'value': 0.9299789953020032,
							'random': true,
							'anim': {
									'enable': true,
									'speed': 1,
									'opacity_min': 0,
									'sync': false
							}
					},
					'size': {
							'value': 3,
							'random': true,
							'anim': {
									'enable': false,
									'speed': 4,
									'size_min': 0.3,
									'sync': false
							}
					},
					'line_linked': {
							'enable': false,
							'distance': 150,
							'color': '#ffffff',
							'opacity': 0.4,
							'width': 1
					},
					'move': {
							'enable': true,
							'speed': 3.017060304327615,
							'direction': 'none',
							'random': true,
							'straight': false,
							'out_mode': 'out',
							'bounce': false,
							'attract': {
									'enable': false,
									'rotateX': 1042.21783956259,
									'rotateY': 600
							}
					}
			},
			'interactivity': {
					'detect_on': 'canvas',
					'events': {
							'onhover': {
									'enable': true,
									'mode': 'bubble'
							},
							'onclick': {
									'enable': true,
									'mode': 'repulse'
							},
							'resize': true
					},
					'modes': {
							'grab': {
									'distance': 400,
									'line_linked': {
											'opacity': 1
									}
							},
							'bubble': {
									'distance': 250,
									'size': 0,
									'duration': 2,
									'opacity': 0,
									'speed': 3
							},
							'repulse': {
									'distance': 400,
									'duration': 0.4
							},
							'push': {
									'particles_nb': 4
							},
							'remove': {
									'particles_nb': 2
							}
					}
			},
			'retina_detect': true
	}
});

monogatari.action('Particles').particles({
	'stars': {
		'particles': {
			'number': {
				'value': 355,
				'density': {
					'enable': true,
					'value_area': 789.1476416322727
				}
			},
			'color': {
				'value': '#ffffff'
			},
			'shape': {
				'type': 'circle',
				'stroke': {
					'width': 0,
					'color': '#000000'
				},
				'polygon': {
					'nb_sides': 5
				},
				'image': {
					'src': '',
					'width': 100,
					'height': 100
				}
			},
			'opacity': {
				'value': 0.48927153781200905,
				'random': false,
				'anim': {
					'enable': true,
					'speed': 0.2,
					'opacity_min': 0,
					'sync': false
				}
			},
			'size': {
				'value': 2,
				'random': true,
				'anim': {
					'enable': true,
					'speed': 2,
					'size_min': 0,
					'sync': false
				}
			},
			'line_linked': {
				'enable': false,
				'distance': 150,
				'color': '#ffffff',
				'opacity': 0.4,
				'width': 1
			},
			'move': {
				'enable': true,
				'speed': 0.2,
				'direction': 'none',
				'random': true,
				'straight': false,
				'out_mode': 'out',
				'bounce': false,
				'attract': {
					'enable': false,
					'rotateX': 600,
					'rotateY': 1200
				}
			}
		},
		'interactivity': {
			'detect_on': 'canvas',
			'events': {
				'onhover': {
					'enable': true,
					'mode': 'bubble'
				},
				'onclick': {
					'enable': true,
					'mode': 'push'
				},
				'resize': true
			},
			'modes': {
				'grab': {
					'distance': 400,
					'line_linked': {
						'opacity': 1
					}
				},
				'bubble': {
					'distance': 83.91608391608392,
					'size': 1,
					'duration': 3,
					'opacity': 1,
					'speed': 3
				},
				'repulse': {
					'distance': 200,
					'duration': 0.4
				},
				'push': {
					'particles_nb': 4
				},
				'remove': {
					'particles_nb': 2
				}
			}
		},
		'retina_detect': true
	}
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
	'theme': 'CMtheme.mp3',
	'cook': 'cook.mp3',
	'chopping': 'chopping.mp3',
	'putplate': 'putplate.mp3',
	'theme01': 'theme01.mp3',
	'sayonara': 'sayonara.mp3',
	'life': 'life.mp3',
	'another': 'another.mp3',
	'ending1': 'ending1.mp3',
	'ending2': 'ending2.mp3',
	'ending3': 'ending3.mp3',
	'ending4': 'ending4.mp3',
	'ending5': 'ending5.mp3',
	'ending6': 'ending6.mp3',
	'mysterious': 'mysterious.mp3',
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
	'hourse0': 'hourse0.png',
	'hourse': 'hourse.png',
	'hourse2': 'hourse2.png',
	'anh1': 'anh1.jpg',
  'sora': 'sora.jpg',
	'firstmeet': 'anh4.png',
	'yuu1': 'yuu1.png',
	'room': 'yuu_room.png',
	'soralook': 'soralook.png',
	'sit': 'sit.png',
	'cook': 'cook.png',
	'food': 'food.png',
	'yuu2': 'yuu2.png',
	'yuu3': 'yuu3.png',
	'yuusoft': 'yuusoft.png',
	'yuusad': 'yuusad.png',
	'yuusad2': 'yuusad2.png',
	'yuulook': 'yuulook.png',
	'yuulook2': 'yuulook2.png',
	'yuulook3': 'yuulook3.png',
	'yuulook4': 'yuulook4.png',
	'yuucry1': 'yuucry1.png',
	'yuucry2': 'yuucry2.png',
	'yuucry3': 'yuucry3.png',
	'yuucry4': 'yuucry4.png',
	'yuusmile': 'yuusmile.png',
	'yuusmile2': 'yuusmile2.png',
	'hug': 'hug.png',
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
		color: '#37ff95'
	},
	's': {
		name: 'Người đàn ông',
		color: '#3790ff'
	},
	's2': {
		name: 'Sora',
		color: '#3790ff'
	},
	'y': {
		name: 'Cậu trai',
		color: '#ff7171'
	},
	'y2': {
		name: 'Cậu trai',
		color: '#ff7171'
	},
	n : {
	},
	ptv : {
		name: "Tiếng TV",
		color: '#ffee00'
	}

});

monogatari.script ({
	// The game starts here.
	'Start': [
		// 'play music theme',
		// 'show canvas stars background with fadeIn',
		'show particles fireflies with fadeIn',
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
		'show scene #fffff with fadeIn',
		'h Câu chuyện bắt đầu.',
		'hide particles',
		'play music theme',
		'show scene hourse0 with fadeIn',
		'Mùa thu sắp qua đi. Tiết trời bắt đầu se lạnh.',
		'Người đàn ông rảo bước trên con đường về nhà không một bóng người.',
		'show scene hourse with fadeIn',
		'n Khi về đến nhà...',
		'n Người đàn ông ngạc nhiên khi thấy một chàng trai đứng trước cửa nhà mình.',
		'show scene firstmeet with fadeIn',
		'n ',
		'n Vừa nhìn thấy anh, cậu trai lập tức lên tiếng... ',
		// 'show scene yuu1 with fadeIn',
		'y "Sao anh về muộn thế..."',
		// 'n Vẻ mặt có chút giận dỗi...',
		'n Nhưng giọng nói lại vô cùng dịu dàng...',
		// 'n Anh có chút ngỡ ngàng.',
		// 's Chuyện gì đang xảy ra vậy? Mình quen cậu ta à?',
		// 'n Anh còn chưa kịp bình tâm, câu trai đã lại một lần nữa lên tiếng',
		'y "Sao anh còn đứng như trời trồng ở đó làm gì."',
		'y "Mau mở cửa cho em vào với, lạnh chết đi được."',
		'stop music theme',
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
		'play music theme',
		'show scene room with fadeIn',
		'n ',
		'n Cậu trai bước vào nhà, đặt balo vào 1 góc...',
		'n Rồi tiến về phía bếp bắt đầu chuẩn bị bữa tối.',
		'n Mọi động tác đều vô cùng thuần thục...',
		'n Như thể cậu đã làm nó cả nghìn lần.',
		'y "Anh nghỉ ngơi đi, em làm chút xíu là xong thôi."',
		'show scene cook with fadeIn',
		'play music chopping',
		'y "Hôm nay anh lại phải làm thêm à?"',
		'stop music chopping',
		'play music cook',
		'y "Anh lại làm hộ phần người khác đúng không!"',
		'y "Anh thật là... Lúc nào cũng tốt bụng như thế."',
		'stop music cook',
		'show scene #fffff with fadeIn',
		'n Người đàn ông cảm thấy bối rối.',
		'n Một cậu thanh niên lạ mặt bước vào nhà và nấu ăn cho anh.',
		'n Nghĩ thế nào thì chuyện này cũng không hề bình thường.',
		// 'play music theme01',
		'n ',
		'show scene soralook with fadeIn',
		'n Nhưng không hiểu sao...',
		'n Trái tim anh cảm thấy bình yên đến lạ.',
		'n Một bầu không khí ấm áp bao trùm căn phòng.',
		'show scene food with fadeIn',
		'play music putplate',
		'y "Xong rồi. Tuy chỉ vài món đơn giản thôi nhưng mà..."',
		'y "Xin mời!"',
		'stop music putplate',
		'n Người đàn ông chầm chậm nếm thử các món ăn trên bàn...',
		'n Thật kỳ lạ...',
		'n Những món ăn này phù hợp khẩu vị của anh đến khó tin.',
		'show scene yuulook with fadeIn',
		'y "Ngon không anh?"',
		'n Người đàn ông nhè nhẹ gật đầu.',
		'show scene yuu3 with fadeIn',
		'y "Thế thì tốt quá rồi."',
		'n Gương mặt cậu trai tràn ngập ý cười dịu dàng.',
		'show scene yuusad with fadeIn',
		'y "Gần đây anh không chịu ăn uống đầy đủ đúng không?"',
		'y "Công việc có bận rộn thế nào thì cũng phải ăn chứ!"',
		'y "Không thì lấy sức đâu mà làm việc."',
		'n Cuộc trò chuyện diễn ra suôn sẻ đến bất ngờ.',
		'n Cứ như thể nó đã lặp đi lặp lại nhiều lần vậy.',
		'y "Anh nhớ phải ăn uống đầy đủ đấy nhé!"',
		'y "Nhớ đấy, <span class="redText">Sora-kun</span> chỉ biết hứa xuông thôi à!"',
		'show scene #000000',
		'n ...',
		'n Người đàn ông ngước lên nhìn cậu trai với vẻ mặt khó hiểu.',
		'show scene yuulook with fadeIn',
		'y "Sao anh nhìn em như vật thể lạ vậy?"',
		's "..."',
		's "Tôi không phải là Sora."',
		'y "..."',
		'y "Anh đùa gì lạ vậy? Chẳng vui chút nào!"',
		's "..."',
		'n Cậu thở dài.',
		'y "Anh lại học theo mấy cái trend trên mạng đó hả?"',
		'y "Cái gì mà "Giả vờ mất trí nhớ để thử lòng người yêu" ấy hả?"',
		'y "Sora-kun thật là..."',
		'y "Nếu vậy thì để em gợi lại trí nhớ cho anh ha?"',
		'y "Để xem nào."',
		'y "Bắt đầu từ đâu nhỉ..."',
		'y "Humm..."',
		'y "Miyamura Sora."',
		'y "30 tuổi, sinh ngày xx/xx/1991. Quê ở Gunma."',
		'y "Nhân viên công ty Three Star Books."',
		'y "Thích đọc sách, nấu ăn, đi suối nước nóng."',
		'y "Hài lòng chưa?"',
		's "..."',
		'y "Hmmm!"',
		'y "Sora-kun đáng ghét thật đó!!!"',
		'y "Suốt ngày chỉ biết trêu em thôi!"',
		'show scene #000000',
		'n Sau khi ăn xong, cậu ấy đứng dậy thu dọn bát đĩa và tiến về phía bồn rửa.',
		'n Xong xuôi đâu đấy, cậu thu dọn đồ và tiến về phía cửa.',
		'show scene out with fadeIn',
		'y "Muộn rồi, anh nghỉ ngơi đi."',
		'y "Hẹn mai gặp lại!"',
		// 'y "Còn chuyện kia... <span class="redText">Cô ấy</span> chắc sẽ tự quyết định."',
		'n Rồi cậu ấy vội vã ra về.',
		'show scene #fffff',
		'n Anh đứng bần thần, rồi bất giác nhìn vào điện thoại.',
		'n Dường như chợt nhận ra điều gì đó.',
		// 'play music another',
		'n ...',
		'n Anh vội vã lao ra ngoài...',
		'n Nhưng đã không còn thấy bóng dáng cậu trai kia rồi.',
		'n Như thể cậu ấy đã tan biến vào hư vô.',
		'n ...',
		'n Người đàn ông thất vọng quay lại căn hộ của mình.',
		'n ',
		'n ...',
		'n Một ngày cứ thế trôi qua...',
		'stop music theme',
		'n Một ngày mới lại đến...',
		'show scene eat with fadeIn',
		'n Người đàn ông tiếp tục đi làm như bao ngày khác.',
		'n Nhưng trong đầu anh chỉ toàn hình bóng cậu trai hôm qua...',
		'n Anh không thể ngừng suy nghĩ về cậu trai kỳ lạ đó.',
		's Có lẽ mình nên gọi điện cho Shoji chăng?',
		// 'stop music another',
		{
			'Choice': {
				'Dialog': '',
				'Talk': {
					'Text': 'Gọi điện cho Shoji',
					'Do': 'jump Talk'
				},
				'Dont': {
					'Text': 'Không gọi điện',
					'Do': 'jump Dont'
				}
			},
		},
		'end'
	],

	'Close': [
		// Ending 6: Không mở cửa
		'show scene #fffff with fadeIn',
		'n Người đàn ông mở cửa, vội vã bước vào...',
		'n Rồi ngay lập tức đóng sầm cửa lại.',
		'n Bỏ mặc cậu trai ngơ ngác trước cửa.',
		'show scene door with fadeIn',
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
		'n Người đàn ông mặc kệ tiếng gõ cửa ngày một dồn dập.',
		'n Cho đến khi bên ngoài trở nên tĩnh lặng...',
		'show scene #fffff with fadeIn',
		'n Thời gian dần trôi qua.',
		'n Cuộc sống của anh cứ tiếp diễn như chưa từng xảy ra chuyện gì...',
		'n Anh đã không còn ký ức gì về buổi tối hôm đó.',
		'n Cho đến một ngày...',
		'show scene #fffff with fadeIn',
		'n ',
		'play music tvnoise',
		'show scene tv with fadeIn',
		'play music suspense',
		'n ',
		'ptv "Sau đây là bản tin tiếp theo."',
		'ptv "Vào lúc 9h tối ngày xx/xx/xxxx, ở gần căn hộ xx phường xx thành phố xxx..."',
		'ptv "Đã phát hiện một thi thể nam giới."',
		'ptv "<span class="redText">Nạn nhân được xác nhận là Haruno Yuu, 25 tuổi.</span>"',
		'ptv "Và không phải là chủ căn hộ."',
		'ptv "Có vẻ như đã vài ngày trôi qua sau cái chết của anh ta."',
		'ptv "Nguyên nhân tử vong <span class="redText">hiện vẫn chưa được xác định.</span>"',
		'show scene #fffff with fadeIn',
		'n <span class="redText">ENDING 6 (Bad ending) "CẬU TA LÀ AI?"</span>',
		'n Nếu bạn chưa hiểu chuyện gì đang xảy ra...',
		'n Hãy thay đổi lựa chọn để khám phá cốt truyện và các ending khác nhé.',
		'n Nếu bạn đang buồn vì gặp phải bad ending...',
		'n Thì hãy nhớ rằng Super Rich tập tiếp theo có lẽ sẽ còn tệ hơn cả cái kết này...',
		'n Chúc bạn luôn mạnh mẽ và giữ được cái đầu lạnh.',
		'n Để bảo toàn tính mạng cho cái laptop hay điện thoại của mình.',
		'n Cảm ơn vì đã chơi game :)',
		'stop music suspense',
		'n ',
		'end'
	],

	'Talk' : [
		'show scene shoji',

	],

	'Dont' : [
		// Không gọi điện
		'show scene #fffff',
		'n Tối hôm đó, khi người đàn ông trở về nhà.',
		'show scene firstmeet with fadeIn',
		'y "..."',
		'y "Sao anh về muộn thế!"',
		'y "Hôm nay anh muốn ăn gì nào?"',
		'play music life',
		'show scene #fffff',
		'n ',
		'n Ngày tháng êm đềm trôi qua.',
		'n Tối nào cậu trai ấy cũng đến nhà anh.',
		'n Cả hai cùng ăn tối và trò chuyện vui vẻ.',
		'n Người đàn ông cảm thấy thoải mái với mối quan hệ không rõ ràng này.',
		'n Nhưng lại không thể ngừng suy nghĩ về mọi chuyện...',
		'n Một buổi tối nọ...',
		'show scene yuusad2 with fadeIn',
		'y "Humm..."',
		'y "Bảo không shock thì cũng không đúng."',
		'y "Nhưng em hiểu được mà."',
		'y "Vì Sora-kun đã nói là không nhận ra em mà."',
		'y "Biết làm thế nào được."',
		'show scene #fffff with fadeIn',
		'n Người đàn ông không muốn phải giả vờ đóng vai anh chàng Sora nào đó nữa...',
		'n Anh quyết định thành thật thú nhận với cậu trai...',
		'n Rằng anh thực sự không phải là Miyamura Sora.',
		'n Anh chưa từng nghe qua cái tên đó.',
		'n Và anh cũng không biết cậu là ai.',
		'n Cậu lặng lẽ mỉm cười, dường như không quá để ý đến những lời anh nói...',
		'show scene yuusoft with fadeIn',
		'y "Những chuyện không mấy tốt đẹp ngày xưa..."',
		'y "Đúng là chẳng ai muốn nhớ lại nhỉ."',
		'y "Em cũng ghét bản thân mình trước đây lắm."',
		'y "Một kẻ tự ty, lúc nào cũng tự đáng giá thấp bản thân."',
		'y "Đã gây cho anh không ít phiền hà..."',
		'y "Nhưng em của ngày hôm nay đã thay đổi rồi."',
		'y "Có lẽ là nhờ Sora-kun chăng?"',
		'y "Vì sao ấy hả?"',
		'y "Hì. Em không nói đâu!"',
		'y "Từ khi hẹn hò, tụi mình đã cùng đi du lịch rất nhiều nơi..."',
		'y "Hokkaido, Fukuoka, Osaka,..."',
		'y "À còn cả suối nước nóng ở quê anh nữa."',
		'y "Nhưng mà lần đó..."',
		'y "Tụi mình không may chọn nhầm nhà tắm thả hoa quả..."',
		'y "Vì bị dị ứng nên em không xuống tắm được."',
		'y "Thành ra cả hai đứa đành đi nhà tắm hơi..."',
		'y "Còn nữa, lần đầu tiên em vào bếp..."',
		'y "Vì không để ý chảo tempura mà suýt gây hoả hoạn."',
		'y "..."',
		'show scene yuucry2 with fadeIn',
		'y "Em của trước đây chỉ toàn sống cho qua ngày."',
		'y "Nhờ có Sora-kun mà em phát hiện ra..."',
		'y "Những điều mình muốn làm..."',
		'y "Những nơi em muốn đến..."',
		'y "Thật tốt vì em đã quyết định ở bên anh."',
		'y "<span class="redText">Chỉ cần có Sora-kun ở bên.</span>"',
		'y "Nhưng chuyện này không phải một sớm một chiều đã nhận ra đâu nhỉ."',
		'y "..."',
		'y "Sora-kun..."',
		'y "Anh khóc đấy à?"',
		'y "Không phải là..."',
		'y "..."',
		'y "..."',
		'y "Anh đã nhớ ra mọi chuyện phải không?"',
		'y "..."',
		'y "... nhỉ?"',
		'stop music life',
		{
			'Choice': {
				'Dialog': '',
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
		// Ending 4: không gọi điện, có nhớ
		// 'stop music life',
		'show particles stars with fadeIn',
		'show scene #fffff',
		's2 Ký ức ùa về trong tâm trí tôi...',
		's2 <span class="redText">Haruno Yuu, người yêu bé nhỏ của tôi...</span>',
		's2 Lần đầu tiên gặp em ấy trước cửa thang máy công ty...',
		's2 Ngày tôi lấy hết dũng khí tỏ tình...',
		's2 Cái gật đầu ngại ngùng...',
		's2 Và gương mặt hạnh phúc của em ấy khi đó...',
		's2 Ngày hai đứa dọn về sống chung trong căn hộ này...',
		's2 Những ký ức vô cùng tươi đẹp...',
		's2 <span class="redText">Và cả vụ tai nạn đó...</span>',
		'play music ending4',
		's2 Tôi đã nhớ lại tất cả...',
		'hide particles',
		'show scene yuucry4 with fadeIn',
		'y2 "Em đã ngạc nhiên lắm đó..."',
		'y2 "Dẫu biết rằng anh không còn tồn tại trên cõi gian này..."',
		'y2 "Em biết bản thân mình thật ngốc nghếch..."',
		'y2 "Ngày ngày đứng đợi trước căn hộ chúng mình từng chung sống..."',
		'y2 "Hi vọng ngày nào đó sẽ gặp lại anh nơi đây..."',
		'y2 "Và rồi anh đã thực sự quay về..."',
		'y2 "Nhưng đã quên đi tất cả..."',
		'y2 "Quên em... Quên cả bản thân mình..."',
		'show particles fireflies with fadeIn',
		'show scene #fffff', 
		'y2 "A..."',
		'y2 "Có phải anh quay về lần cuối..."',
		'y2 "Để gặp em phải không?"',
		'y2 "Cảm ơn anh..."',
		'show scene hug with fadeIn',
		's2 Tôi lặng lẽ ôm em ấy thật chặt...',
		's2 <i>Xin lỗi đã bỏ em lại một mình...</i>',
		's2 <i>Em hãy sống thật mạnh mẽ khi không có anh ở bên nhé?</i>',
		's2 <i>Cảm ơn em vì tất cả...</i>',
		'show scene yuusmile2 with fadeIn',
		'y2 "Em nhớ anh, Sora-kun..."',
		's2 Em ấy dường như đang mỉm cười.',
		's2 Nước mắt tôi không thể ngừng rơi.',
		's2 Người yêu bé nhỏ của tôi...',
		's2 Em ấy mới tuyệt vời làm sao...',
		'show scene #fffff with fadeIn',
		's2 Ngày hôm sau...',
		'show scene hourse2 with fadeIn',
		's2 Không còn bóng hình em ấy trước căn hộ của chúng tôi...',
		's2 Tôi không khỏi cảm thấy có chút nuối tiếc...',
		's2 Nhưng cũng thật nhẹ nhõm...',
		's2 Có lẽ đã đến lúc rồi nhỉ...',
		's2 <i>Haruno Yuu...</i>',
		's2 <i>Tạm biệt em, ánh mặt trời dịu dàng của tôi...</i>',
		's2 <i>Con đường phía trước, hãy cố gắng cả phần của anh nữa nhé.</i>',
		's2 <i>Hẹn gặp lại em một ngày nào đó.</i>',
		's2 <i>Nếu có kiếp sau...</i>',
		's2 <i>Tôi nguyện một lần nữa ở bên em...</i>',
		'show scene #fffff with fadeIn',
		'n <span class="redText">ENDING 4 (True ending) "Người yêu của tôi."</span>',
		'hide particles',
		'end'
	],

	'NotYet' : [ 
		// Ending 5: không gọi điện, không nhớ
		'show scene #fffff',
		'n ',
		'play music ending5',
		'n Không.',
		'n Người đàn ông chưa hề nhớ lại được gì.',
		'n Không, đúng hơn là anh ta <span class="redText">không dám nhớ lại.</span>',
		'n Bởi vì...',
		'n Những ký ức không mấy tươi sáng đó...',
		'n Một khi chúng quay trở lại...',
		'n Sẽ là dấu chấm hết cho mối quan hệ dễ chịu này...',
		'show scene yuusmile with fadeIn',
		'y "Anh vẫn..."',
		'y "Anh vẫn chưa nhớ lại à?"',
		'y "..."',
		's "..."',
		'y "Thế hả..."',
		'y "Em hiểu rồi..."',
		'y "Cũng chẳng còn cách nào khác nhỉ..."',
		'n Cậu trai mỉm cười trong nước mắt...',
		'n Nhìn vẻ mặt đượm buồn của cậu ấy...',
		'n Trái tim người đàn ông như quặn lại...',
		'y "Không sao đâu..."',
		'y "Không cần phải xin lỗi em đâu..."',
		'y "Em cảm thấy rất vui."',
		'y "Từ bây giờ..."',
		'y "Chúng ta sẽ <span class="redText">mãi mãi bên nhau</span> nhé."',
		'show scene #fffff with fadeIn',
		'n ',
		'n Thế nhưng ngày hôm sau, khi anh trở về nhà...',
		'n Đã không còn hình bóng cậu trai đứng chờ anh mỗi ngày.',
		'n Và những ngày sau đó cũng vậy.',
		'n Cậu trai cứ như thể đã biến mất khỏi thế gian này.',
		'n Người đàn ông cảm thấy có chút trống rỗng...',
		'n ',
		'n Và rồi một ngày...',
		'n ',
		'play music tvnoise',
		'n ',
		'show scene tv with fadeIn',
		'ptv "Sau đây là bản tin tiếp theo."',
		'ptv "Vào lúc 9h tối ngày xx/xx/xxxx, tại căn hộ xx phường xx thành phố xxx..."',
		'ptv "Đã phát hiện hai thi thể nam giới."',
		'ptv "<span class="redText">Nạn nhân được xác nhận là Haruno Yuu, 25 tuổi.</span>"',
		'ptv "<span class="redText">Và Miyamura Sora, 30 tuổi.</span>"',
		'ptv "Có vẻ như đã vài ngày trôi qua sau cái chết của họ."',
		'ptv "Nguyên nhân tử vong bước đầu được xác định là do <span class="redText">tự tử...</span>"',
		'show scene #fffff with fadeIn',
		'n ',
		'n <span class="redText">ENDING 5 "MÃI MÃI BÊN NHAU!"</span>',
		'end'
	],

});
