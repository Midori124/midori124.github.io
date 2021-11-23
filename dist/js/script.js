/* global monogatari */

monogatari.component ('main-screen').template (() => {
	return `
			<h1>SoraYuu</h1>
	`;
});

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

monogatari.action ('message').messages ({
	'SampleWriting':{
			title: 'Some sample writing',
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
							'value': '#fff000'
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

monogatari.action('Particles').particles({
	'snow': {
		'particles': {
			'number': {
				'value': 400,
				'density': {
					'enable': true,
					'value_area': 800
				}
			},
			'color': {
				'value': '#fff'
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
					'src': 'http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png',
					'width': 100,
					'height': 100
				}
			},
			'opacity': {
				'value': 0.5,
				'random': true,
				'anim': {
					'enable': false,
					'speed': 1,
					'opacity_min': 0.1,
					'sync': false
				}
			},
			'size': {
				'value': 5,
				'random': true,
				'anim': {
					'enable': false,
					'speed': 20,
					'size_min': 0.1,
					'sync': false
				}
			},
			'line_linked': {
				'enable': false,
				'distance': 500,
				'color': '#ffffff',
				'opacity': 0.4,
				'width': 2
			},
			'move': {
				'enable': true,
				'speed': 2,
				'direction': 'bottom',
				'random': false,
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
					'mode': 'repulse'
				},
				'resize': true
			},
			'modes': {
				'grab': {
					'distance': 400,
					'line_linked': {
						'opacity': 0.5
					}
				},
				'bubble': {
					'distance': 400,
					'size': 4,
					'duration': 0.3,
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
	'life': 'life.mp3',
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
	'yuusoft2': 'yuusoft2.png',
	'yuusad': 'yuusad.png',
	'yuusad2': 'yuusad2.png',
	'yuulook': 'yuulook.png',
	'yuulook2': 'yuulook2.png',
	'yuucry2': 'yuucry2.png',
	'yuucry3': 'yuucry3.png',
	'yuucry4': 'yuucry4.png',
	'yuusmile': 'yuusmile.png',
	'yuusmile2': 'yuusmile2.png',
	'yuusmile3': 'yuusmile3.png',
	'hug': 'hug.png',
	'out': 'out.png',
	'eat': 'eat.png',
	'soraroom': 'anh6.png',
	'door': 'door.jpg',
	'tv': 'tv.jpg',
	'sorasad': 'sorasad.png',
	'shoji': 'shoji.png',
	'scary1': 'scary1.png',
	'scary2': 'scary2.png',
	'yuuhorror': 'yuuhorror.png',
	'yuuhorror': 'yuuhorror.png',
	'horror': 'horror.png',
	'meetagain': 'meetagain.png',
	'vhs': 'vhs.png',
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
		name: 'Yuu',
		color: '#ff7171'
	},
	n : {
	},
	ptv : {
		name: "Tiếng TV",
		color: '#ffee00'
	},
	j : {
		name: "Shoji",
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
					'Text': 'Mình chưa sẵn sàng',
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
		'show scene hourse0',
		'Người đàn ông rảo bước trên con đường về nhà không một bóng người.',
		'show scene #000 with fadeIn',
		'Khi về đến nhà...',
		'show scene hourse with fadeIn',
		'Người đàn ông ngạc nhiên khi thấy một chàng trai đứng trước cửa nhà mình.',
		'show scene firstmeet with fadeIn',
		'Vừa nhìn thấy anh, cậu trai lập tức lên tiếng... ',
		// 'show scene yuu1 with fadeIn',
		'y "Sao anh về muộn thế..."',
		// 'Vẻ mặt có chút giận dỗi...',
		'Nhưng giọng nói lại vô cùng dịu dàng...',
		// 'Anh có chút ngỡ ngàng.',
		// 'Chuyện gì đang xảy ra vậy? Cậu ta là ai?',
		// 'Người đàn ông còn chưa kịp bình tâm, câu trai đã lại một lần nữa lên tiếng.',
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
					'Text': 'Có quen đâu mà cho vào!',
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
		'show scene #fffff with fadeIn',
		'Cậu trai bước vào nhà, đặt balo vào 1 góc...',
		'Rồi tiến về phía bếp bắt đầu chuẩn bị bữa tối.',
		'Mọi động tác đều vô cùng thuần thục...',
		'Như thể cậu đã làm nó cả nghìn lần.',
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
		'Người đàn ông cảm thấy bối rối.',
		'Một cậu thanh niên lạ mặt bước vào nhà và nấu ăn cho anh.',
		'Nghĩ thế nào thì chuyện này cũng không hề bình thường.',
		'show scene soralook with fadeIn',
		'Nhưng không hiểu sao...',
		'Trái tim anh cảm thấy bình yên đến lạ.',
		'Một bầu không khí ấm áp bao trùm căn phòng.',
		'show scene food with fadeIn',
		'play music putplate',
		'y "Xong rồi. Tuy chỉ vài món đơn giản thôi nhưng mà..."',
		'y "Xin mời!"',
		'stop music putplate',
		'Người đàn ông chậm rã nếm thử các món ăn trên bàn...',
		'Thật kỳ lạ...',
		'Những món ăn này phù hợp khẩu vị của anh đến khó tin.',
		'show scene yuulook with fadeIn',
		'y "Ngon không anh?"',
		'Người đàn ông nhè nhẹ gật đầu.',
		'show scene yuu3 with fadeIn',
		'y "Thế thì tốt quá rồi."',
		'Gương mặt cậu trai tràn ngập sự vui sướng.',
		'show scene yuusad with fadeIn',
		'y "Gần đây anh không chịu ăn uống đầy đủ đúng không?"',
		'y "Công việc có bận rộn thế nào thì cũng phải ăn chứ!"',
		'y "Không thì lấy sức đâu mà làm việc."',
		'Cuộc trò chuyện diễn ra suôn sẻ đến bất ngờ.',
		'Cứ như thể nó đã lặp đi lặp lại nhiều lần vậy.',
		'y "Anh nhớ phải ăn uống đầy đủ đấy nhé!"',
		'y "Nhớ đấy, <span class="redText">Sora-kun</span> chỉ biết hứa xuông thôi à!"',
		'stop music theme',
		'show scene #000000',
		'...',
		'Người đàn ông ngước lên nhìn cậu trai với vẻ mặt khó hiểu.',
		'y "Sao anh nhìn em như vật thể lạ vậy?"',
		's "..."',
		's "Tôi không phải là Sora."',
		'y "..."',
		'y "Anh đùa gì lạ vậy? Chẳng vui chút nào!"',
		's "..."',
		'y "..."',
		'show scene yuusad with fadeIn',
		'play music theme',
		'Cậu trai thở dài.',
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
		'Sau khi ăn xong, cậu ấy đứng dậy thu dọn bát đĩa và tiến về phía bồn rửa.',
		'Xong xuôi đâu đấy, cậu thu dọn đồ và tiến về phía cửa.',
		'show scene out with fadeIn',
		'y "Muộn rồi, anh nghỉ ngơi đi."',
		'show scene out',
		'y "Hẹn mai gặp lại!"',
		'show scene out',
		// 'y "Còn chuyện kia... <span class="redText">Cô ấy</span> chắc sẽ tự quyết định."',
		'Rồi cậu ấy vội vã ra về.',
		'show scene #fffff',
		'Anh đứng bần thần, rồi bất giác nhìn vào điện thoại.',
		'Dường như chợt nhận ra điều gì đó.',
		'...',
		'Anh vội vã lao ra ngoài...',
		'Nhưng đã không còn thấy bóng dáng cậu trai kia rồi.',
		'Người đàn ông buồn bã quay lại căn hộ của mình.',
		'',
		'Một ngày cứ thế trôi qua...',
		'Một ngày mới lại đến...',
		'show scene eat with fadeIn',
		'Người đàn ông tiếp tục đi làm như bao ngày khác.',
		'show scene eat',
		'Nhưng trong đầu anh chỉ toàn hình bóng cậu trai hôm qua...',
		'show scene eat',
		'Anh không thể ngừng suy nghĩ về cậu trai kỳ lạ đó.',
		'show scene eat',
		's Có lẽ mình nên gọi điện cho Shoji chăng?',
		'stop music theme',
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
		'Người đàn ông mở cửa, vội vã bước vào...',
		'Rồi ngay lập tức đóng sầm cửa lại.',
		'Bỏ mặc cậu trai ngơ ngác trước cửa.',
		'show scene door with fadeIn',
		'play music knock',
		'Tuy vậy, cậu trai ngoài kia hình như chưa có ý định từ bỏ.',
		'show scene door',
		'y "Này này, anh làm cái trò gì vậy?"',
		'show scene door',
		'play music knock',
		'show scene door',
		'Cậu ta không ngừng gõ cửa',
		'show scene door',
		'y "...!"',
		'show scene door',
		'y "...!"',
		'play music knock',
		'show scene door',
		'y "...!"',
		'show scene door',
		'y "Làm ơn đi mà..."',
		'show scene door',
		'Người đàn ông mặc kệ tiếng gõ cửa ngày một dồn dập.',
		'show scene door',
		'Cho đến khi bên ngoài trở nên tĩnh lặng...',
		'show scene #fffff',
		'Ngày từng ngày trôi qua.',
		'Cuộc sống của anh cứ tiếp diễn như chưa từng xảy ra chuyện gì...',
		'Anh đã không còn ký ức gì về buổi tối hôm đó.',
		'play music ending5',
		'Cho đến một ngày...',
		'',
		'play music tvnoise',
		'show scene tv with fadeIn',
		'',
		'ptv "Sau đây là bản tin tiếp theo."',
		'ptv "Vào lúc 9h tối ngày xx/xx/xxxx, ở gần căn hộ xx phường xx thành phố xxx..."',
		'ptv "Đã phát hiện một thi thể nam giới."',
		'ptv <span class="redText">"Nạn nhân được xác nhận là Haruno Yuu, 25 tuổi."</span>',
		'ptv "Có vẻ như đã vài ngày trôi qua sau cái chết của anh ta."',
		'ptv "Nguyên nhân tử vong <span class="redText">hiện vẫn chưa được xác định."</span>',
		'show scene #fffff with fadeIn',
		'<span class="redText">ENDING 1 (Bad ending) "CẬU TA LÀ AI?"</span>',
		'Nếu bạn chưa hiểu chuyện gì đang xảy ra...',
		'Hãy thay đổi lựa chọn để khám phá cốt truyện và các ending khác nhé.',
		'Nếu bạn đang buồn vì gặp phải bad ending...',
		'Thì hãy nhớ rằng Super Rich tập tiếp theo có lẽ sẽ còn tệ hơn cả cái kết này...',
		'Chúc bạn luôn mạnh mẽ và giữ được cái đầu lạnh.',
		'Để bảo toàn tính mạng cho cái laptop hay điện thoại của mình.',
		'Cảm ơn vì đã chơi game :)',
		'stop music ending5',
		'',
		'end'
	],

	'Talk' : [
		// Có gọi điện
		'show scene shoji with fadeIn',
		'j "Alo."',
		'show scene shoji',
		'j "Ừ."',
		'show scene shoji',
		'j "Tôi dạo này vẫn thế. Bận tối mắt."',
		'show scene shoji',
		'j "Hôm nào anh em mình đi nhậu một bữa cái nhể."',
		'show scene shoji',
		'j "Thế có chuyện gì mà gọi giờ này?"',
		{
			'Choice': {
				'Dialog': '',
				'Told': {
					'Text': 'Kể cho Shoji chuyện hôm qua',
					'Do': 'jump Told'
				},
				'NotTold': {
					'Text': 'Nói chuyện khác',
					'Do': 'jump NotTold'
				}
			},
		},
		'end'
	],

	'Dont' : [
		// Không gọi điện
		'play music theme',
		'show scene #fffff',
		'Tối hôm đó, khi người đàn ông trở về nhà.',
		'show scene firstmeet with fadeIn',
		'y "A..."',
		'show scene firstmeet',
		'y "Sao anh về muộn thế!"',
		'show scene firstmeet',
		'y "Hôm nay anh muốn ăn gì nào?"',
		'show scene #fffff',
		'',
		'Kể từ ngày hôm đó.',
		'Tối nào cậu trai ấy cũng đến nhà anh.',
		'Cả hai cùng ăn tối và trò chuyện vui vẻ.',
		'Người đàn ông cảm thấy thoải mái với mối quan hệ không rõ ràng này.',
		'Nhưng vẫn không thể giải toả khúc mắc trong lòng...',
		'Một buổi tối nọ...',
		'show scene yuusoft2 with fadeIn',
		'y "Humm..."',
		'y "Bảo không shock thì cũng không đúng."',
		'show scene yuusoft2',
		'y "Nhưng em hiểu được mà."',
		'show scene yuusoft2',
		'y "Vì Sora-kun đã nói là không nhận ra em mà."',
		'show scene yuusoft2',
		'y "Biết làm thế nào được."',
		'show scene #fffff with fadeIn',
		'Người đàn ông <span class="redText">không muốn phải giả vờ đóng vai anh chàng Sora nào đó</span> nữa...',
		'Anh quyết định thành thật thú nhận với cậu trai...',
		'Rằng anh thực sự không phải là Sora.',
		'Anh chưa từng nghe qua cái tên đó.',
		'Và anh cũng không biết cậu là ai.',
		'Cậu lặng lẽ mỉm cười, dường như không quá để ý đến những lời anh nói...',
		'show scene yuusoft2 with fadeIn',
		'y "Những chuyện không mấy tốt đẹp ngày xưa..."',
		'show scene yuusoft2',
		'y "Đúng là chẳng ai muốn nhớ lại nhỉ."',
		'show scene yuusoft2',
		'y "Em cũng ghét bản thân mình trước đây lắm."',
		'show scene yuusoft2',
		'y "Một kẻ tự ty, lúc nào cũng tự đánh giá thấp bản thân."',
		'show scene yuusoft2',
		'y "Đã gây cho anh không ít phiền hà..."',
		'show scene yuusoft2',
		'y "Nhưng em của ngày hôm nay đã thay đổi rồi."',
		'show scene yuusoft2',
		'y "Có lẽ là nhờ Sora-kun chăng?"',
		'show scene yuusoft2',
		'y "Vì sao ấy hả?"',
		'show scene yuusoft2',
		'y "Hì. Em không nói đâu!"',
		'show scene yuusoft2',
		'y "Từ khi hẹn hò, tụi mình đã cùng đi du lịch rất nhiều nơi..."',
		'show scene yuusoft2',
		'y "Hokkaido, Fukuoka, Osaka,..."',
		'show scene yuusoft2',
		'y "À còn cả suối nước nóng ở quê anh nữa."',
		'show scene yuusoft2',
		'y "Nhưng mà lần đó..."',
		'show scene yuusoft2',
		'y "Tụi mình không may chọn nhầm nhà tắm thả hoa quả..."',
		'show scene yuusoft2',
		'y "Vì bị dị ứng nên em không xuống tắm được."',
		'show scene yuusoft2',
		'y "Thành ra cả hai đứa đành đi nhà tắm hơi..."',
		'show scene yuusoft2',
		'y "Có lần em trổ tài nấu nướng..."',
		'show scene yuusoft2',
		'y "..."',
		'show scene yuusoft2',
		'y "Mà thôi quên chuyện đó đi..."',
		'show scene yuusoft2',
		'y "..."',
		'show scene yuucry2 with fadeIn',
		'y "Em của trước đây chỉ toàn sống cho qua ngày."',
		'show scene yuucry2',
		'y "Nhờ có Sora-kun mà em phát hiện ra..."',
		'show scene yuucry2',
		'y "Những điều mình muốn làm..."',
		'show scene yuucry2',
		'y "Những nơi em muốn đến..."',
		'show scene yuucry2',
		'y "Thật tốt vì em đã quyết định ở bên anh."',
		'show scene yuucry2',
		'y <span class="redText">"Chỉ cần có Sora-kun ở bên."</span>',
		'show scene yuucry2',
		'y "Nhưng có những chuyện xảy ra mà ta chẳng thể lường trước được nhỉ."',
		'show scene yuulook2',
		'y "..."',
		'show scene yuulook2',
		'y "Sora-kun..."',
		'show scene yuulook2',
		'y "Anh khóc đấy à?"',
		'show scene yuulook2',
		'y "Có lẽ nào..."',
		'y "Anh đã...?"',
		'y "..."',
		'y "Anh đã nhớ ra mọi chuyện?"',
		'y "... nhỉ?"',
		'stop music theme',
		{
			'Choice': {
				'Dialog': '',
				'Remember': {
					'Text': 'Đã nhớ ra tất cả',
					'Do': 'jump Remember'
				},
				'NotYet': {
					'Text': 'Vẫn chưa nhớ lại gì',
					'Do': 'jump NotYet'
				}
			},
		}
	],

	'Remember' : [
		// Ending 4: không gọi điện, có nhớ
		// 'stop music life',
		'show particles fireflies with fadeIn',
		'show scene #fffff',
		's2 Ký ức ùa về trong tâm trí tôi...',
		's2 <span class="redText">Haruno Yuu, người yêu bé nhỏ của tôi...</span>',
		's2 Lần đầu tiên gặp em ấy trước cửa thang máy công ty...',
		's2 Em ấy ở đó, dịu dàng như ánh nắng xuân...',
		's2 Sưởi ấm tâm hồn lạnh lẽo của tôi...',
		's2 Ngày tôi lấy hết dũng khí tỏ tình...',
		's2 Ngày hai đứa dọn về sống chung trong căn hộ này...',
		's2 Những tháng ngày tươi đẹp đó...',
		'play music ending4',
		's2 <span class="redText">Và cả vụ tai nạn đó...</span>',
		's2 Tôi đã nhớ lại tất cả...',
		's2 Tất cả...',
		'hide particles',
		'show particles fireflies with fadeIn',
		'show scene yuucry4 with fadeIn',
		'y2 "Em đã ngạc nhiên lắm đó..."',
		'show scene yuucry4',
		'y2 "Dẫu biết rằng anh không còn tồn tại trên cõi gian này..."',
		'show scene yuucry4',
		'y2 "Em biết bản thân mình thật ngốc nghếch..."',
		'show scene yuucry4',
		'y2 "Ngày ngày đứng đợi trước căn hộ chúng mình từng chung sống..."',
		'show scene yuucry4',
		'y2 "Hi vọng ngày nào đó sẽ gặp lại anh nơi đây..."',
		'show scene yuucry4',
		'y2 "Và rồi anh đã thực sự quay về..."',
		'show scene yuucry4',
		'y2 "Nhưng đã quên đi tất cả..."',
		'show scene yuucry4',
		'y2 "Quên em... Quên cả bản thân mình..."',
		'show scene yuucry4',
		'show particles fireflies with fadeIn',
		'show scene #fffff', 
		'y2 "A..."',
		'y2 "Có phải anh quay về lần cuối..."',
		'y2 "Để gặp em phải không?"',
		'y2 "Cảm ơn anh..."',
		'show scene hug with fadeIn',
		's2 Tôi lặng lẽ ôm em ấy thật chặt...',
		'show scene hug',
		's2 <i>Xin lỗi đã bỏ em lại một mình...</i>',
		'show scene hug',
		's2 <i>Em hãy sống thật mạnh mẽ khi không có anh ở bên nhé?</i>',
		'show scene hug',
		's2 <i>Cảm ơn em vì tất cả...</i>',
		'show scene yuusmile2 with fadeIn',
		's2 Em ấy dường như đang mỉm cười.',
		'show scene yuusmile2',
		's2 Nước mắt tôi không thể ngừng rơi.',
		'show scene yuusmile2',
		's2 Người yêu bé nhỏ của tôi...',
		'show scene yuusmile2',
		's2 Ánh mặt trời của tôi...',
		'show scene yuusmile2',
		's2 Em mới tuyệt vời làm sao...',
		'show scene #fffff',
		'Ngày hôm sau...',
		'show scene hourse2 with fadeIn',
		's2 Không còn bóng hình em ấy trước căn hộ của chúng tôi...',
		'show scene hourse2',
		's2 Tôi không khỏi cảm thấy có chút nuối tiếc...',
		'show scene hourse2',
		's2 Nhưng cũng thật thanh thản...',
		'show scene hourse2',
		's2 Có lẽ đã đến lúc lên đường rồi nhỉ...',
		'show scene #fffff',
		'centered <span class="sun"><i>Haruno Yuu...</i>',
		'show scene #fffff',
		'centered <span class="sun"><i>Tạm biệt em, ánh mặt trời dịu dàng của tôi...</i>',
		'show scene #fffff',
		'centered <span class="sun"><i>Con đường phía trước, hãy cố gắng cả phần của anh nữa nhé.</i>',
		'show scene #fffff',
		'centered <span class="sun"><i>Hẹn gặp lại em một ngày nào đó.</i>',
		'show scene #fffff',
		'centered <span class="sun"><i>Nếu có kiếp sau...</i>',
		'show scene #fffff',
		'centered <span class="sun"><i>Tôi nguyện một lần nữa ở bên em...</i>',
		'show scene #fffff with fadeIn',
		'centered <span class="redText">ENDING 6 (True ending) "ÁNH MẶT TRỜI CỦA TÔI"</span>',
		'show scene #fffff',
		'centered <span class="thank">Thanks for playing!',
		'hide particles',
		'end'
	],

	'NotYet' : [ 
		// Ending 5: không gọi điện, không nhớ
		'show scene #fffff',
		'',
		'play music theme',
		'Không.',
		'Người đàn ông chưa hề nhớ lại được gì.',
		'Không, đúng hơn là anh ta <span class="redText">không dám nhớ lại.</span>',
		'Bởi vì...',
		'Những ký ức không mấy tươi sáng đó...',
		'Một khi chúng quay trở lại...',
		'Sẽ là dấu chấm hết cho mối quan hệ dễ chịu này...',
		'show scene yuusoft2 with fadeIn',
		'y "Anh vẫn..."',
		'show scene yuusoft2',
		'y "Anh vẫn chưa nhớ lại à?"',
		'show scene yuusoft2',
		'y "..."',
		'show scene yuusoft2',
		's "..."',
		'show scene yuusoft2',
		'y "Thế hả..."',
		'show scene yuusoft2',
		'y "Em hiểu rồi..."',
		'show scene yuusoft2',
		'y "Cũng chẳng còn cách nào khác nhỉ..."',
		'show scene yuusoft2',
		'Cậu trai mỉm cười trong nước mắt...',
		'show scene yuusoft2',
		'Nhìn vẻ mặt đượm buồn của cậu ấy...',
		'show scene yuusoft2',
		'Trái tim người đàn ông như quặn lại...',
		'show scene yuusoft2',
		'y "Không sao đâu..."',
		'show scene yuusoft2',
		'y "Không cần phải xin lỗi em đâu..."',
		'show scene yuusoft2',
		'y "Em cảm thấy rất vui."',
		'show scene yuusoft2',
		'y "Từ bây giờ..."',
		'show scene yuusoft2',
		'y "Ngày nào mình cũng sẽ gặp nhau anh nhé?"',
		'show scene yuusoft2',
		'y "Chúng ta sẽ <span class="redText">mãi mãi bên nhau dù có thế nào</span>."',
		'stop music theme',
		'show scene #fffff with fadeIn',
		'',
		'Thế nhưng ngày hôm sau, khi anh trở về nhà...',
		'Đã không còn hình bóng cậu trai đứng chờ anh mỗi ngày.',
		'Và những ngày sau đó cũng vậy.',
		'Cậu trai cứ như thể đã biến mất khỏi thế gian này.',
		'show scene hourse0 with fadeIn',
		'Thời gian cứ thế trôi đi.',
		'show scene hourse0',
		'Người đàn ông cũng đã hoàn toàn quên cậu trai ngày đó.',
		'show scene hourse0',
		'Nhưng anh vẫn luôn có cảm giác thật kỳ lạ...',
		'show scene hourse0',
		'<span class="redText">Như thể có ai đó dõi theo mình từng ngày...',
		'show scene #fffff',
		'Rồi một ngày nọ...',
		'play music ending5',
		'',
		'play music tvnoise',
		'show scene tv with fadeIn',
		'ptv "Sau đây là bản tin tiếp theo."',
		'ptv "Vào lúc 9h tối ngày xx/xx/xxxx, tại căn hộ xx phường xx thành phố xxx..."',
		'ptv "Đã phát hiện hai thi thể nam giới."',
		'ptv <span class="redText">"Nạn nhân được xác nhận là Haruno Yuu, 25 tuổi."</span>',
		'ptv <span class="redText">"Và Miyamura Sora, 30 tuổi."</span>',
		'ptv "Có vẻ như đã vài ngày trôi qua sau cái chết của họ."',
		'ptv "Nguyên nhân tử vong bước đầu được xác định là do <span class="redText">tự tử..."</span>',
		'show scene #fffff with fadeIn',
		'',
		'<span class="redText">ENDING 5 "MÃI MÃI BÊN NHAU DÙ CÓ THẾ NÀO!"</span>',
		'centered <span class="thank">Thanks for playing!',
		'end'
	],

	'Told' : [
		// Có gọi điện, có kể
		'show scene shoji with fadeIn',
		'play music ending5',
		'j "Một cậu trai lạ mặt xuất hiện ở cửa nhà cậu hôm qua hả?"',
		'j "Nghe có mùi kinh dị vậy!"',
		'j "Cái gì? Cậu còn cho cậu ta vào trong nhà hả!?"',
		'j "Cậu ta còn nấu ăn cho cậu!?"',
		'j "Thế thì sao?"',
		'j "Ông lại tính phát cơm chó đấy à?"',
		'j "Người yêu ông ngày nào chả nấu ăn cho ông."',
		'j "Gì cơ?"',
		'j "Không có bồ á?"',
		'j "Ông bị làm sao đấy?"',
		'j <span class="redText">"Dạo trước chả khoe mẽ với bọn này về em bồ đáng yêu mới tán được còn gì?"</span>',
		'j <span class="redText">"Còn biết nấu mấy món ông thích nữa."</span>',
		'j <span class="redText">"Suốt ngày "Tôi hạnh phúc lắm", "Tôi vui chết đi được", nhức hết cả đầu."</span>',
		'j <span class="redText">"Tính khoe cơm chó thì nói nhanh đi."</span>',
		'j <span class="redText">"Hay lại cãi nhau vụ giặt đồ hả?"</span>',
		'j "Cái gì? Không nhớ gì á?"',
		'j "Ông sướng quá hoá rồ rồi à?"',
		'j "Về làm lành với em bồ đi."',
		'j "Tôi cúp máy đây."',
		'show scene #fffff with fadeIn',
		'Người đàn ông càng cảm thấy bối rối.',
		'Chuyện gì đang xảy ra vậy?',
		'Phải chăng... thực sự có phần ký ức nào đó đã bị anh lãng quên?',
		'stop music ending5',
		'',
		'Người đàn ông thất thểu bước về nhà, trong lòng chất chứa suy nghĩ.',
		'Khi anh trở về đến nhà...',
		'show scene firstmeet with fadeIn',
		'y "A..."',
		'show scene firstmeet',
		'y "Anh về rồi."',
		'show scene firstmeet',
		'y "Hôm nay anh muốn ăn gì nào?"',
		// 'play music life',
		'play music theme',
		'show scene #fffff',
		'',
		'Kể từ ngày hôm đó.',
		'Tối nào cậu trai ấy cũng đến nhà anh.',
		'Cả hai cùng ăn tối và trò chuyện vui vẻ.',
		'Người đàn ông cảm thấy thoải mái với mối quan hệ không rõ ràng này.',
		'Nhưng vẫn không thể giải toả khúc mắc trong lòng...',
		'Một buổi tối nọ...',
		'show scene yuusoft2 with fadeIn',
		'y "Humm..."',
		'y "Bảo không shock thì cũng không đúng."',
		'y "Nhưng em hiểu được mà."',
		'y "Vì Sora-kun đã nói là không nhận ra em mà."',
		'y "Biết làm thế nào được."',
		'show scene #fffff with fadeIn',
		'Người đàn ông quyết định tìm lại ký ức đã mất...',
		'Và đã hỏi cậu trai về quá khứ của mình.',
		'show scene yuusoft2 with fadeIn',
		'y "Lần hẹn hò đầu tiên ấy hả?"',
		'y "Là ở công viên giải trí đó."',
		'y "Không phải em..."',
		'y "Là Sora-kun chủ động hẹn em đến đó."',
		'y "Kiểu "Cuối tuần này em có rảnh không?""',
		'y "Em đã bất ngờ lắm đó."',
		'y Ừm...',
		'y "Tỏ tình cũng là Sora-kun chủ động. Kiểu"',
		'y "<i>"Cậu..."</i>"',
		'y "<i>"Từ ngày hôm nay cậu sẽ là bạn trai tôi!"</i>"',
		// 'show scene #000000 with fadeIn',
		'show scene yuusad2',
		'y <span class="redText">"Sora-kun ấy mà..."</span> ',
		'show scene yuusad2',
		'y <span class="redText">"Sora-kun là người rất trung thành với các quy tắc của bản thân."</span>',
		'show scene yuusad2',
		'y <span class="redText">"Có phần bảo thủ, gia trưởng."</span>',
		'show scene yuusad2',
		'y <span class="redText">"Đồ ăn không nêm đúng gia vị cũng khiến anh tức giận..."</span>',
		'show scene yuusad2',
		'y <span class="redText">"Giờ thì em nắm được khẩu vị của Sora-kun rồi, nhưng mà..."</span>',
		'show scene yuusad2',
		'y <span class="redText">"Hồi đầu vất vả lắm đó..."</span>',
		'show scene yuusad2',
		'y <span class="redText">"Vừa mới hẹn hò cái đã..."</span>',
		'show scene yuusad2',
		'y <span class="redText">"<i>"Ngoài anh ra cấm được giao du với thằng khác đấy!"</i>"</span>',
		'show scene yuusad2',
		'y <span class="redText">"Thành ra, đến bạn thân em cũng không dám đi cùng."</span>',
		'stop music theme',
		'show scene vhs with fadeIn',
		'',
		'show scene yuulook2 with fadeIn',
		'y "Ơ kìa... Anh làm sao thế?"',
		'show scene yuulook2',
		'y "Anh mệt à?"',
		'show scene yuulook2',
		'y "Sao ạ?"',
		'show scene yuulook2',
		'y "Anh không muốn nghe những chuyện như thế hả?"',
		'show scene yuulook2',
		'y "..."',
		'show scene yuulook2',
		'y "Sora-kun ấy mà..."',
		'show scene yuulook2',
		'y <span class="redText">"Dù cho em có cầu xin bao nhiêu lần..."</span>',
		'show scene yuulook2',
		'y <span class="redText">"Anh cũng nhất quyết không dừng tay..."</span>',
		'show scene #fffff',
		'',
		'...',
		'show scene scary1 with fadeIn',
		'y2 <span class="redText"><i>"Đây là đâu..."</i></span>',
		's2 <span class="redText"><i>"Tại sao em lại làm thế với tôi?"</i></span>',
		's2 <span class="redText"><i>"Em là người yêu tôi cơ mà"</i></span>',
		'y2 <span class="redText"><i>"Đau..."</i></span>',
		'y2 <span class="redText"><i>"Bỏ tôi ra..."</i></span>',
		'y2 <span class="redText"><i>"Xin anh..."</i></span>',
		'y2 <span class="redText"><i>"Tôi biết sai rồi..."</i></span>',
		'y2 <span class="redText"><i>"Tôi sẽ làm theo lời anh..."</i></span>',
		'y2 <span class="redText"><i>"Xin anh..."</i></span>',
		'show scene yuulook2 with fadeIn',
		'y2 "Ơ kìa..."',
		'show scene yuulook2',
		'y2 "Sao mặt anh tái mét thế?"',
		'show scene yuulook2',
		'y2 "Hay là..."',
		'show scene yuulook2',
		'y2 "Anh đã nhớ ra chuyện gì rồi?"',
		{
			'Choice': {
				'Dialog': '',
				'ScaryRemember': {
					'Text': 'Đã nhớ ra tất cả',
					'Do': 'jump ScaryRemember'
				},
				'ScaryNotYet': {
					'Text': 'Vẫn chưa nhớ lại gì',
					'Do': 'jump ScaryNotYet'
				}
			},
		}
	],

	'ScaryRemember' : [
		// Ending: Gọi điện, có kể, có nhớ
		'play music ending6',
		'show scene #fffff',
		'"Vậy là..."',
		'"Anh nhớ lại tất cả rồi phải không?"',

		'<i>Phải...',
		'<i>Tôi đã nhớ lại mọi chuyện.',
		'<i>Kỳ thực...</i>',
		'<span class="redText"><i>Tôi đã làm gì có người yêu...</i></span>',
		'<i>Cậu trai đang ngồi trước mặt tôi...</i>',
		'<i>Thực ra...',
		'<i>Một năm trước...',
		'<i>Lần đầu tiên tôi gặp em ấy...',
		'<i>Là khi chúng tôi cùng nhau đứng đợi thang máy ở công ty tôi...',
		'<i>Tôi đã yêu em ấy từ cái nhìn đầu tiên...',
		'<i>Vẻ ngoài của em ấy chính là <span class="redText">hình mẫu lý tưởng mà tôi đang kiếm tìm.</span>',
		'<i>Và tôi muốn <span class="redText">sở hữu em ấy bằng mọi giá...</span>',
		'<i>Tôi đã dò hỏi tất cả mọi thông tin của em ấy...',
		'<i>Tên tuổi, quê quán, địa chỉ...',
		'<i>A...',
		'<i>Thì ra em ấy là một thực tập sinh mới vào công ty tôi...',
		'<i>Haruno Yuu...',
		'<i>Một cái tên thật đẹp...',
		'<i>Dịu dàng như ánh nắng xuân...',
		'<i>Đúng như vẻ ngoài của em ấy...',
		'<i>Một người hoàn hảo như thế...',
		'<i>Nhất định phải thuộc về tôi...',
		'<i>Vậy nên...',
		'show scene scary2 with fadeIn',
		'...',
		'<span class="redText"><i>Tôi đã bắt cóc và giam cầm em ấy trong căn hộ của mình...',
		'<i>Chung sống cùng nhau, tôi mới nhận ra...',
		'<i>Cậu ta kỳ thực là người vô cùng bừa bãi...',
		'<i>Nấu ăn cũng dở tệ...',
		'<i>Hoàn toàn không đúng với hình mẫu lý tưởng của tôi...',
		'<i>Không... Không... Không...',
		'<i>Tại sao lại như thế?',
		'<i>Rõ ràng mọi thứ đã rất hoàn hảo mà...',
		'<i>Tại sao lại trở nên như thế này?',
		'<i>Không... Không... Không...',
		'<i>Tôi không thể chấp nhận chuyện này!',
		'<i>Đã vậy thì...',
		'<span class="redText"><i>Để tôi dạy dỗ em...',
		'<span class="redText"><i>Trở thành hình mẫu lý tưởng của tôi nhé!',
		'...',
		'<span class="redText"><i>"Đau quá... Đau quá..."',
		'<span class="redText"><i>"Tôi xin lỗi... Tôi xin lỗi..."',
		'<span class="redText"><i>"Tôi xin lỗi... Tôi xin lỗi... Tôi xin lỗi... Tôi xin lỗi... Tôi xin lỗi... Tôi xin lỗi... Tôi xin lỗi... Tôi xin lỗi... "',
	  'show scene yuusmile with fadeIn',
		'y2 <span class="redText">Cái gì?</span>',
		'y2 <span class="redText">Anh muốn tôi... tha thứ cho anh hả?</span>',
		'y2 <span class="redText">...</span>',
		'show scene yuuhorror with fadeIn',
		'',
		'show scene horror with fadeIn',
		'<span class="redText">TÔI TUYỆT ĐỐI KHÔNG THA CHO ANH ĐÂU!',
		'show scene #fffff with fadeIn',
		'<span class="redText">ENDING 2 TRẢ GIÁ',
		'centered <span class="thank">Thanks for playing!',
		'end'
	],

	'ScaryNotYet' : [
		'show scene #fffff',
		'"Vậy hả..."',
		'...',
		'"Anh nhớ lại tất cả rồi à..."',
	],

	'NotTold': [
		// Có gọi điện, không kể với bạn
		'show scene shoji with fadeIn',
		'play music ending5',
		'j "Thế hả?"',
		'j "Mà này, hôm bữa tôi tình cờ đi qua nhà cậu..."',
		'j "Hình như là tầm 10h tối thì phải."',
		'j "Nhìn qua cửa sổ thấy trong phòng vẫn tối om..."',
		'j "Nên tôi nghĩ chắc là cậu đang làm thêm giờ rồi."',
		'j "Đang tính về thì thấy..."',
		'j "<span class="redText">Một cậu trai tầm trên 20 tuổi</span> đang quanh quẩn gần nhà ông."',
		'j "Tưởng là người quen của cậu..."',
		'j "Nên tôi mới lại gần và bảo..."',
		'j "<i>"Cậu ta chắc lại làm thêm rồi..."</i>',
		'j "Thì nhóc ấy giật mình hoảng hốt, rồi chạy mất tiêu."',
		'j "Hành động khả nghi lắm."',
		'j "Hả? Vẻ ngoài như nào ấy à?"',
		'j "Tại trời tối quá nên tôi cũng không nhìn rõ."',
		'j "Mà từ 2 tuần trước rồi..."',
		'j "Nên tôi cũng không nhớ rõ lắm."',
		'j "Nhưng mà cậu ta tầm 1m8."',
		'j "Vẻ ngoài trông cũng giản dị, áo sơ mi xanh dương..."',
		'j "Tóc màu gì ấy hả?"',
		'j "Hình như là màu nâu nhạt, kiểu Hàn Quốc thì phải."',
		'j "Cậu có nhớ ra ai không?"',
		'j "Có khi lại là người quen thật ấy chứ?"',
		'stop music ending5',
		'show scene #fffff with fadeIn',
		'Tối hôm đó, khi người đàn ông trở về nhà...',
		'',
		'play music theme',
		'show scene firstmeet with fadeIn',
		'A, anh về rồi.',
		'Anh vất vả rồi.',
		'Hôm nay anh muốn ăn gì?',
		'show scene #fffff',
		'Kể từ ngày hôm đó.',
		'Tối nào cậu trai ấy cũng đến nhà anh.',
		'Cả hai cùng ăn tối và trò chuyện vui vẻ.',
		'Người đàn ông cảm thấy thoải mái với mối quan hệ không rõ ràng này.',
		'Nhưng vẫn không thể giải toả khúc mắc trong lòng...',
		'Một buổi tối nọ...',
		'Anh quyết định dứt khoát mọi chuyện.',
		'Anh hỏi cậu về những chuyện trong quá khứ...',
		'show scene yuusoft2 with fadeIn',
		'y "Humm..."',
		'y "Bảo không shock thì cũng không đúng."',
		'y "Nhưng em hiểu được mà."',
		'y "Vì Sora-kun đã nói là không nhận ra em mà."',
		'y "Biết làm thế nào được."',
		'y "Sora-kun ấy..."',
		'y "Thỉnh thoảng có vài thói quen kỳ cục lắm..."',
		'y "Sữa phải đúng độ đậm mới chịu uống."',
		'y "Khi ngủ phải tắt hết đèn đóm, tối om mới ngủ được."',
		'y "Thói xấu ấy hả?"',
		'y "Không..."',
		'y "Anh không mấy khi nhậu nhẹt..."',
		'y "Hút thuốc cũng không..."',
		'y "Nói chung là không chê vào đâu được."',
		'show scene yuusad2 with fadeIn',
		'y "Nhưng mà có vụ này..."',
		'y "Tụi mình cãi nhau không ít lần..."',
		'y "Vụ giặt đồ ấy..."',
		'y "Em chỉ muốn phơi đồ trong phòng cho tiện..."',
		'y "Còn anh thì nhất quyết phải phơi bên ngoài cho thơm mùi nắng..."',
		'y "..."',
		'y "Anh thực sự không nhớ gì à?"',
		'y "..."',
		'y "Xin lỗi, em lại phàn nàn rồi..."',
		'show scene #fffff with fadeIn',
		'Cậu mỉm cười dịu dàng.',
		'Biểu cảm ấy, không thể nào là đang nói dối được.',
		'Tất cả những gì cậu ấy nói...',
		'Có lẽ đều là sự thật...',
		'Cậu ấy bây giờ trông thật hạnh phúc...',
		'Cứ để mọi chuyện như thế, không phải tốt hơn sao?',
		'show scene yuulook2 with fadeIn',
		'y "Kìa, anh làm sao thế?"',
		'y "Có lẽ nào..."',
		'y "Anh đã..."',
		'y "..."',
		'y <span class="redText">"Anh đã nhớ ra gì rồi?"',
		'stop music theme',
		{
			'Choice': {
				'Dialog': '',
				'Past': {
					'Text': 'Đã nhớ ra tất cả',
					'Do': 'jump Past'
				},
				'Fake': {
					'Text': 'Vẫn chưa nhớ lại gì',
					'Do': 'jump Fake'
				}
			},
		}
	],

	'Past' : [
		// Ending 3: Gọi điện, không kể, có nhớ
		'play music theme',
		'y "Không đùa chứ..."',
		'y "Anh nhớ lại mọi chuyện rồi sao?"',
		'show scene yuusoft2 with fadeIn',
		'y "Cảm ơn anh."',
		'y "Em hạnh phúc lắm."',
		'stop music theme',
		'show scene #fffff with fadeIn',
		's Ngày hôm sau, cậu ấy cũng đứng chờ trước cửa nhà tôi.',
		's Ngày hôm sau nữa, rồi ngày hôm sau nữa nữa...',
		's Ngày nào cậu ấy cũng chờ tôi...',
		's Chúng tôi cùng ăn tối...',
		's Cậu ấy kể cho tôi những chuyện ngày xưa...',
		's Những ngày tươi sáng và tràn ngập niềm vui...',
		's Thế nhưng...',
		'play music ending6',
		's <span class="redText">Cậu ấy lại chẳng bao giờ nhắc đến chuyện tương lai.',
		's <span class="redText">Cậu ấy vẫn đang mắc kẹt trong quá khứ.',
		's <span class="redText">Điều đó làm tôi cảm thấy vô cùng khó chịu.',
		's <span class="redText">Tôi dần trở nên điên cuồng...',
		's <span class="redText">Và không thể kiểm soát bản thân...',
		'<span class="redText">ENDING 3 SỐNG TRONG QUÁ KHỨ.',
	],

	'Fake' : [
		// Ending 4: Gọi điện, không kể, không nhớ
		's <i>"Anh đã nhớ lại mọi chuyện rồi."',
		's Nếu tôi trả lời như vậy, cậu ấy sẽ cảm thấy hạnh phúc nhỉ?',
		's Ban đầu, chỉ là tôi không nỡ làm cậu ấy thất vọng.',
		's Thế nhưng...',
		'play music life',
		's Sự dịu dàng của em ấy.',
		's Nụ cười ấm áp của em ấy.',
		's Không biết từ bao giờ...',
		's Tôi đã quá ỷ lại vào cảm giác dễ chịu này rồi ...',
		's Dẫu cho sự dịu dàng ấy...',
		's Không thực sự là dành cho tôi.',
		's Mối quan hệ này rồi sẽ không thể kéo dài...',
		's Tôi chỉ chắc chắn một điều...',
		's Ngày mà tôi nhớ được mọi chuyện về em ấy...',
		's Ngày đó sẽ không bao giờ đến.',
		's Bởi vì...',
		'show scene firstmeet with fadeIn',
		's <span class="redText">Miyamura Sora trong câu chuyện của em ấy...',
		's <span class="redText">Không phải là tôi...',
		's Buổi tối hôm đó...',
		's Một cậu trai lạ mặt đứng trước cửa nhà tôi...',
		's Và nói rằng tôi là người yêu của mình...',
		's Biết được rằng đó chỉ là một sự hiểu lầm...',
		's Người bình thường hẳn sẽ giải thích rõ ràng rồi tống ra khỏi nhà rồi nhỉ.',
		's Nhưng tôi đã không làm thế.',
		's Tôi đã chấp nhận câu chuyện của em ấy...',
		's Và quyết định đóng giả làm người em ấy muốn gặp.',
		's Tôi chỉ không thể bỏ mặc em ấy.',
		's Ngày hôm đó, em ấy nhìn trống rỗng như một chiếc vỏ...',
		's Chiếc vỏ ấy có thể tan vỡ bất cứ lúc nào...',
		's Nếu tôi không giữ lại.',
		'show scene yuusoft2 with fadeIn',
		'y2 "Anh nhận ra rồi à?"',
		'y2 "Chuyện là như thế đó."',
		'y2 "... Xin lỗi."',
		'y2 "Cảm ơn anh vì đã chấp nhận một người ích kỷ như em."',
		'y2 "Sora-kun đã từng sống trong căn hộ này."',
		'y2 "Quãng thời gian quý báu cùng anh trải qua."',
		'y2 "Em đã vô cùng hạnh phúc."',
		'y2 "Thế nhưng..."',
		'y2 "Một vụ tai nạn bất ngờ đã cướp đi mạng sống của anh ấy..."',
		'y2 "Ngay trước mắt em..."',
		'y2 "Mọi chuyện xảy ra quá bất ngờ, và em không thể chấp nhận sự thật."',
		'y2 "Vì không thể nào quên được anh ấy."',
		'y2 "Nên em đã quay lại nơi này..."',
		'y2 "Và gặp anh."',
		'y2 "Và coi anh, một người xa lạ, như người thay thế của anh ấy."',
		'y2 "Nhưng em xin lỗi..."',
		'y2 "Anh và Sora-kun là hai người hoàn toàn khác nhau."',
		'y2 "..."',
		'y2 "Việc coi người khác như người thay thế, từ đầu đã làm một sự ích kỷ rồi nhỉ."',
		'y2 "..."',
		'y2 "Cảm ơn anh."',
		'y2 "Nhờ có anh mà em đã dám đối diện với sự thật."',
		'show scene #fffff with fadeIn',
		's Rồi em ấy lặng lẽ bước ra khỏi căn phòng.',
		's Tôi chỉ biết đứng nhìn hình bóng em ấy dần rời xa.',
		's Tối hôm sau, trước cửa căn hộ nơi tôi đang sống...',
		'show scene hourse2 with fadeIn',
		's Đã không còn ai đó đứng chờ.',
		's Thật vui vì em ấy đã dám chấp nhận sự thật và thay đổi.',
		's Nhưng cảm xúc cô đơn trống rỗng này là sao nhỉ...',
		
		'show particles stars with fadeIn',
		'show scene #fffff with fadeIn',
		'centered <span class="redText">Tạm biệt em, "người yêu của tôi"...',
		'centered Hãy sống thật hạnh phúc em nhé...',
		'centered Hẹn gặp lại em. Một ngày nào đó.',

		'centered <span class="thank">Thanks for playing!',
		'end'
	],

});
