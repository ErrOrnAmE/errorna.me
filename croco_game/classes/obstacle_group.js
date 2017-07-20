
var ObstacleGroup = function(level,group,x,ids) {

	this.level = level;

	this.obstacles = [];

	this.obstacles_sprites = [];

	for(var i=0; i<ids.length; i++) {
		var obstacle = new Obstacle(level,x,ids[i]);
		this.obstacles.push(obstacle);
		this.obstacles_sprites.push(obstacle.sprite);
		x += Obstacle.data.spikes[ids[i]].width;
		group.add(obstacle.sprite);
	}

	this.ahead = true;

	this.destroyed = false;

	this.toggleScroll(this.level.playing);

};

ObstacleGroup.prototype.update = function() {

	var last = this.obstacles[this.obstacles.length-1];

	if (!this.ahead && last.sprite.body.x+last.sprite.body.width < 0) {
		this.destroy();
	}

};

ObstacleGroup.prototype.toggleScroll = function(toggle) {

	for (var i=0; i<this.obstacles.length; i++) {
		this.obstacles[i].toggleScroll(toggle);
	}

};

ObstacleGroup.prototype.stillAhead = function() {

	var last = this.obstacles[this.obstacles.length-1];

	var last_right = last.sprite.body.x+Obstacle.data.spikes[last.id].hitbox.offset.x+Obstacle.data.spikes[last.id].hitbox.width;
	var player_left = this.level.player.sprite.body.x+Player.data.hitbox.offset.x;

	if (last_right < player_left) {
		this.ahead = false;
		return false;
	}

	return true;

};

ObstacleGroup.prototype.destroy = function() {

	for(var i=0; i<this.obstacles.length; i++) {
		this.obstacles_sprites[i] = null;
		this.obstacles[i].destroy();
		this.obstacles[i] = null;
	}

	this.destroyed = true;

};