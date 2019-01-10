Croco.Level = function(game) {};

Croco.Level.prototype =
{
	preload: function() {

		console.log('Loading level');

	},
	create: function() {
		this.layerManager = new LayerManager(this);
		this.obstacleManager = new ObstacleManager(this);
		this.player = new Player(this);

		game.input.onDown.add(function() {
			if (!this.playing) {
				this.toggleScroll(true);
				this.startTime = game.time.now;
				this.playing = true;
			} else {
				this.player.jump();
			}
		},this);

		this.text_score = game.add.text(game.world.width-70, 5, this.player.prettyScore(), {fontSize: "20px",fill:"#000000"});

		if (game.high_score > 0) {
			game.add.text(game.world.width-170, 5, 'HI '+this.player.prettyScore(game.high_score), {fontSize: "20px",fill:"#eeeeee"});
		}

		this.playing = false;
	},
	update: function() {
		this.layerManager.update();
		this.obstacleManager.update();

		if (this.playing) {
			this.player.update();
		}
	},
	render: function() {

		if(game._debug) {
			//game.debug.text(this.player.score,10,20);
			//game.debug.bodyInfo(this.player.sprite, 32, 32);
        	//game.debug.body(this.player.sprite);
        	//game.debug.body(this.obstacleManager.groups[0].obstacles[0].sprite);
        	//this.game.time.advancedTiming = true;
        	//this.game.debug.text(this.game.time.fps || '--', 2, 14, "#ffffff");
        	//game.debug.body(this.layerManager.ground[0]);
		}

	},
	toggleScroll: function(toggle) {
		this.layerManager.toggleScroll(toggle);
		this.player.toggleScroll(toggle);
		this.obstacleManager.toggleScroll(toggle);
	},
	restart: function() {
		game.input.onDown.removeAll();

		if (this.player.score > game.high_score) {
			game.high_score = this.player.score;
		}

		game.time.events.add(300,function() {
			game.add.sprite(game.world.centerX-80,game.world.centerY-60,'game-over');
			game.input.onDown.add(function() {
				game.input.onDown.removeAll();
				game.state.restart();
			});
		});
	},
	faster: function() {
		this.layerManager.faster();
		this.obstacleManager.faster();
	}
}

game.state.add('Level',Croco.Level);
