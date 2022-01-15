let game = {
	level: parseInt(localStorage.level, 10) || 0,
	answers: (localStorage.answers && JSON.parse(localStorage.answers)) || {},
	solved: (localStorage.solved && JSON.parse(localStorage.solved)) || [],
	user: localStorage.user || '',
	changed: false,

	start: function() {
		if (!localStorage.user) {
			game.user = '' + new Date().getTime() + Math.random().toString(36).slice(1);
			localStorage.setItem('user', game.user);
		}

		this.setHandlers();
		this.loadMenu();
		game.loadLevel(levels[game.level]);
	},

	setHandlers: function() {
		$('#next').on('click', function() {
			$('#code').focus();

			if ($(this).hasClass('disabled')) {
				if (!$('.frog').hasClass('animated')) {
					game.tryagain();
				}

				return;
			}

			$(this).removeClass('animated animation');
			$('.frog').addClass('animated bounceOutUp');
			$('.arrow, #next').addClass('disabled');

			setTimeout(function() {
				if (game.level >= levels.length - 1) {
					game.win();
				} else {
					game.next();
				}
			}, 2000);
		});

		$('#code')
			.on('keydown', function(e) {
				if (e.keyCode === 13) {
					if (e.ctrlKey || e.metaKey) {
						e.preventDefault();
						game.check();
						$('#next').click();
						return;
					}

					let max = $(this).data('lines');
					let code = $(this).val();
					let trim = code.trim();
					let codeLength = code.split('\n').length;
					let trimLength = trim.split('\n').length;

					if (codeLength >= max) {
						if (codeLength === trimLength) {
							e.preventDefault();
							$('#next').click();
						} else {
							$('#code').focus().val('').val(trim);
						}
					}
				}
			})
			.on('input', game.debounce(game.check, 500))
			.on('input', function() {
				game.changed = true;
				$('#next').removeClass('animated animation').addClass('disabled');
			});

		$('#editor').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			$(this).removeClass();
		});

		$('#labelReset').on('click', function() {
			let warningReset =
				'Ви насправді бажаєте скинути гру?\n\nВсі ваші надбання будуть втрачені й ви розпочнете з початку гри.';
			let r = confirm(warningReset);

			if (r) {
				game.level = 0;
				game.answers = {};
				game.solved = [];
				game.loadLevel(levels[0]);

				$('.level-marker').removeClass('solved');
			}
		});

		$('#labelSettings').on('click', function() {
			$('#levelsWrapper').hide();
			$('#settings .tooltip').toggle();
		});

		$('body').on('click', function() {
			$('.tooltip').hide();
		});

		$('.tooltip, .toggle, #level-indicator').on('click', function(e) {
			e.stopPropagation();
		});

		$(window).on('beforeunload', function() {
			game.saveAnswer();
			localStorage.setItem('level', game.level);
			localStorage.setItem('answers', JSON.stringify(game.answers));
			localStorage.setItem('solved', JSON.stringify(game.solved));
		});
	},

	prev: function() {
		this.level--;

		let levelData = levels[this.level];
		this.loadLevel(levelData);
	},

	next: function() {
		this.level++;
		let levelData = levels[this.level];
		this.loadLevel(levelData);
	},

	loadMenu: function() {
		levels.forEach(function(level, i) {
			let levelMarker = $('<span/>')
				.addClass('level-marker')
				.attr({ 'data-level': i, title: level.name })
				.text(i + 1);

			if ($.inArray(level.name, game.solved) !== -1) {
				levelMarker.addClass('solved');
			}

			levelMarker.appendTo('#levels');
		});

		$('.level-marker').on('click', function() {
			game.saveAnswer();

			let level = $(this).attr('data-level');
			game.level = parseInt(level, 10);
			game.loadLevel(levels[level]);
		});

		$('#level-indicator').on('click', function() {
			$('#settings .tooltip').hide();
			$('#levelsWrapper').toggle();
		});

		$('.arrow.left').on('click', function() {
			if ($(this).hasClass('disabled')) {
				return;
			}

			game.saveAnswer();
			game.prev();
		});

		$('.arrow.right').on('click', function() {
			if ($(this).hasClass('disabled')) {
				return;
			}

			game.saveAnswer();
			game.next();
		});
	},

	loadLevel: function(level) {
		$('#level-indicator .total').text(levels.length);
		$('#editor').show();
		$('#background, #canvas').removeClass('wrap').attr('style', '').empty();
		$('#levelsWrapper').hide();
		$('.level-marker').removeClass('current').eq(this.level).addClass('current');
		$('#level-counter .current').text(this.level + 1);
		$('#before').text(level.before);
		$('#after').text(level.after);
		$('#next').removeClass('animated animation').addClass('disabled');

		let instructions = level.instructions;
		$('#instructions').html(instructions);

		$('.arrow.disabled').removeClass('disabled');

		if (this.level === 0) {
			$('.arrow.left').addClass('disabled');
		}

		if (this.level === levels.length - 1) {
			$('.arrow.right').addClass('disabled');
		}

		let answer = game.answers[level.name];
		$('#code').val(answer).focus();

    let canvas = level.canvas;
    $('#canvas').append(canvas);

    var lines = Object.keys(level.style).length;
    $('#code').height(20 * lines).data("lines", lines);

    var string = level.board;
    var markup = '';
    var colors = {
      'g': 'green',
      'r': 'red',
      'y': 'yellow'
    };

    for (let i = 0; i < string.length; i++) {
      let c = string.charAt(i);
      let color = colors[c];

      let lilypad = $('<div/>').addClass('lilypad ' + color + (this.colorblind == 'true' ? ' cb-friendly' : '')).data('color', color);
      let frog = $('<div/>').addClass('frog ' + color + (this.colorblind == 'true' ? ' cb-friendly' : '')).data('color', color);

      $('<div/>').addClass('bg').appendTo(lilypad);
      $('<div/>').addClass('bg animated pulse infinite').appendTo(frog);

      $('#background').append(lilypad);
      $('#canvas').append(frog);
    }


    
		let classes = level.classes;

		if (classes) {
			for (let rule in classes) {
				$(rule).addClass(classes[rule]);
			}
		}

		let selector = level.selector || '';
		$('#background ' + selector).css(level.style);

		game.changed = false;
		game.applyStyles();
		game.check();
	},

	applyStyles: function() {
		let level = levels[game.level];
		let code = $('#code').val();
		let selector = level.selector || '';
		$('#canvas ' + selector).attr('style', code);
		game.saveAnswer();
	},

	check: function() {
		game.applyStyles();

		let level = levels[game.level];
		let frogs = {};
		let correct = true;

		$('.frog').each(function() {
			let position = $(this).position();
			position.top = Math.floor(position.top);
			position.left = Math.floor(position.left);

			let key = JSON.stringify(position);
			let val = $(this).data('color');
			frogs[key] = val;
		});

		$('.lilypad').each(function() {
			let position = $(this).position();
			position.top = Math.floor(position.top);
			position.left = Math.floor(position.left);

			let key = JSON.stringify(position);
			let val = $(this).data('color');

			if (!(key in frogs) || frogs[key] !== val) {
				correct = false;
			}
		});

		if (correct) {
			if ($.inArray(level.name, game.solved) === -1) {
				game.solved.push(level.name);
			}

			$('[data-level=' + game.level + ']').addClass('solved');
			$('#next').removeClass('disabled').addClass('animated animation');
		}
	},

	saveAnswer: function() {
		let level = levels[this.level];
		game.answers[level.name] = $('#code').val();
	},

	tryagain: function() {
		$('#editor').addClass('animated shake');
	},

	win: function() {
		let solution = $('#code').val();

		this.loadLevel(levelWin);

		$('#editor').hide();
		$('#code').val(solution);
		$('#share').show();
		$('.frog .bg').removeClass('pulse').addClass('bounce');
	},

	transform: function() {
		let scale = 1 + (Math.random() / 5 - 0.2);
		let rotate = 360 * Math.random();

		return { transform: 'scale(' + scale + ') rotate(' + rotate + 'deg)' };
	},

	debounce: function(func, wait, immediate) {
		let timeout;
		return function() {
			let context = this,
				args = arguments;
			let later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			let callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	}
};

$(document).ready(function() {
	game.start();
});
