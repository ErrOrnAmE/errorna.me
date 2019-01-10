
var Player = function(level) {

	this.sprite = game.add.sprite(100,191,'player',0);
	game.physics.arcade.enable(this.sprite);
	this.sprite.body.collideWorldBounds = true;
	this.sprite.body.gravity.y = Player.data.gravity;
	this.sprite.body.setSize(
		Player.data.hitbox.width,
		Player.data.hitbox.height,
		Player.data.hitbox.offset.x,
		Player.data.hitbox.offset.y);
	this.sprite.ref = this;

	this.anim = this.sprite.animations;

	this.anim.add('idle',[0,1],4,true);
	this.anim.add('run',[4,5,6,7],6,true);
	this.anim.add('jump',[2],5,false);
	this.anim.add('fall',[3],5,false);
	this.anim.add('dead',[8,9],4,true);

	this.anim.play('idle');

	this.isScrolling = false;

	this.isDead = false;

	this.score = 0;

	this.level = level;
};

Player.data = {
	gravity: 650,
	jump: 320,
	hitbox: {
		width: 39,
		height: 61,
		offset: {
			x: 6,
			y: 8
		}
	}
}

Player.prototype.update = function() {

	this.sprite.body.x = 100;

	game.physics.arcade.overlap(this.sprite,this.level.obstacleManager.big_group,function(player,obstacle) {
		player.ref.dead();
	});

	if (!this.sprite.body.touching.down) {

		if (this.sprite.body.velocity.y >= 0) {
			if (this.anim.currentAnim.name != "jump") {
				this.anim.play("jump");
			}
		} else {
			if (this.anim.currentAnim.name != "fall") {
				this.anim.play("fall");
			}
		}
	} else {

		if (this.anim.currentAnim.name != "run" && !this.isDead) {
			this.anim.play("run");
		}
	}

	this.updateScore();
};

Player.prototype.updateScore = function() {
	var new_score = parseInt((game.time.now-this.level.startTime)/100)
	if (new_score != this.score) {
		this.level.text_score.text = this.prettyScore(new_score);
		if (parseInt(this.score / 100) < parseInt(new_score / 100)) {
			this.level.faster;
		}
		this.score = new_score;
	}
}

Player.prototype.addScore = function(add) {
	if (parseInt(this.score / 100) < parseInt((this.score+add) / 100)) {
		this.level.faster();
	}
	this.score += add;
	this.level.text_score.text = this.prettyScore();
};

Player.prototype.prettyScore = function(score) {

	score = score == undefined ? this.score : score;

	return ""+parseInt(score/10000)
			+parseInt((score%10000)/1000)
			+parseInt((score%1000)/100)
			+parseInt((score%100)/10)
			+(score%10);
};

Player.prototype.toggleScroll = function(toggle) {

	this.anim.play(toggle ? 'run' : 'idle');

};

Player.prototype.jump = function() {

	if (this.sprite.body.touching.down) {
		this.sprite.body.velocity.y = -Player.data.jump;
	}

};

Player.prototype.dead = function() {

	if (!this.isDead) {
		this.level.toggleScroll(false);
		this.isDead = true;
		this.anim.play('dead');
		this.sprite.body.velocity.x = 0;
		this.sprite.body.velocity.y = 0;
		this.sprite.body.gravity.y = 0;
		this.sprite.body.x = 100;
		this.level.playing = false;

		this.level.restart();
	}

};