//animation start 
if($(window).width() <= 768) {

	rodaqAnimation(test=false);

	setTimeout(function () {
		$("#menu, #content_hero, .box_rodaq_projects").css({
			opacity: 1,
			transition: '2.5s'
		});
		$("body, html").css({
			overflowY: 'visible',
			overflowX: 'hidden'
		});
	},1500)
}else {
	rodaqAnimation(test=true);
}


//animation finish
function finish() {
	setTimeout(function() {
		$('.cursor').css('background', 'transparent');
		$("#menu, #content_hero, .box_rodaq_projects").css({
			opacity: 1,
			transition: '2.5s'
		});
		$("body, html").css({
			overflowY: 'visible',
			overflowX: 'hidden'
		});

		setTimeout(function() {
			$('#mask').animate({
				width: '0'},
			700, function() {

				setTimeout(function() {
					$('#select').css('display', 'none');
					$('#solutions_by').css('display', 'none');
					$('.design').html('Design')
				},500)

				setTimeout(function() {
					$("#for_emotion").typed({
						strings: [" for emotions."],
						typeSpeed: 20,
						callback: function() {
							$(".typed-cursor").css('background', 'black');
						}
					});	
				},1000)
			});
		},800)
},1500)
}


function rodaqAnimation(test) {
		if(test) {
			setTimeout(function() {

				//page visible
				$("#menu, #content_hero, .box_rodaq_projects").css({
					opacity: 1,
					transition: '2.5s'
				});
				$("body, html").css({
					overflowY: 'visible',
					overflowX: 'hidden'
				});
				
				//cursor transparent, delete text
				setTimeout(function() {
					$('.cursor').css('background', 'transparent');

					$('#mask').animate({
						width: '0'},
						700, function() {

						setTimeout(function() {
							$('#select').css('display', 'none');
							$('#solutions_by').css('display', 'none');
							$('.design').html('Design')
						},500)

						setTimeout(function() {
							$("#for_emotion").typed({
								strings: [" for emotions."],
								typeSpeed: 20,
								callback: function() {
									$(".typed-cursor").css('background', 'black');
								}
							});
								
						},1000)

							setTimeout(function() {

								$(".typed-cursor").css('background', 'transparent');

								$('#select').css('display', 'block');

								$('#mask, #select').css({
									left: '-10px',
									width: '580px'
								});

								$('#mask').animate({
									width: '0',},
									1000, function() {

									setTimeout(function() {
										$('#select').css('display', 'none');
										$("#title_rodaq").css('color', 'transparent');

										setTimeout(function() {

											$("#title_rodaq").typed({
												strings: ["Solutions by design."],
												typeSpeed: 20,
												showCursor: false,
											});

											setTimeout(function() {
												$("#title_rodaq").css('color', '#1a1d20');
											},100)
									
											setTimeout(function() {
												var solutions_by = document.createElement('span');
											    solutions_by.id = 'solutions_by';
											    var txt_solutions_by = document.createTextNode('Solutions by ');

											    solutions_by.appendChild(txt_solutions_by);

											    var design = document.createElement('span');
											    design.className = 'design'; 
											    var txt_design = document.createTextNode('design.');

											    var cursor = document.createElement('div');
											    cursor.className = 'cursor';
											    cursor.style.background = 'transparent';

											    design.appendChild(txt_design);

											    var for_emotion = document.createElement('span');
											    for_emotion.id = 'for_emotion';

											    $("#title_rodaq").html('');						
											    $("#title_rodaq").append(solutions_by, design, cursor, for_emotion);
											},2000); 
											},1000)
									},500);

								});
				
								setTimeout(function() {
									$("#cursor_final").css('background', 'transparent');
									$('#mask, #select').css({
										width: '355px',
										left: '-10px'
									});
									$('#select').css('display', 'block');

									finish();
								},2000)					

							},10000)		
					});
				},2000)
			},1500)
		}
	}

	$(window).resize(function() {
		if ($(window).width() <= 768) {	
			$("#title_rodaq").html('Solutions by design.')
		}
	});