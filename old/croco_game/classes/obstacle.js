
var Obstacle = function(level,x,id) {

	this.level = level;

	this.sprite = game.add.sprite(x,260-Obstacle.data.spikes[id].height,'spike-'+id);
	game.physics.arcade.enable(this.sprite);
	this.sprite.body.immovable = true;
	this.sprite.body.setSize(
		Obstacle.data.spikes[id].hitbox.width,
		Obstacle.data.spikes[id].hitbox.height,
		Obstacle.data.spikes[id].hitbox.offset.x,
		Obstacle.data.spikes[id].hitbox.offset.y);

	this.id = id;

};

Obstacle.data = {
	spikes: [
		{
			width: 55,
			height: 30,
			hitbox: {
				width: 34,
				height: 18,
				offset: {
					x: 10,
					y: 12
				}
			}
		},
		{
			width: 51,
			height: 27,
			hitbox: {
				width: 33,
				height: 18,
				offset: {
					x: 9,
					y: 9
				}
			}
		},
		{
			width: 21,
			height: 38,
			hitbox: {
				width: 9,
				height: 26,
				offset: {
					x: 6,
					y: 12
				}
			}
		}
	]
}

Obstacle.prototype.toggleScroll = function(toggle) {

	this.sprite.body.velocity.x = toggle ? this.level.layerManager.speed : 0;

};

Obstacle.prototype.destroy = function() {

	this.sprite.destroy();

};