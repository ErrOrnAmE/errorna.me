
var LayerManager = function(level) {

	this.level = level;

	this.skyLayer = game.add.group();
	this.skyLayer.z = 0;
	this.sky = [];

	this.mountainLayer = game.add.group();
	this.mountainLayer.z = 1;
	this.mountain = [];

	this.groundLayer = game.add.group();
	this.groundLayer.z = 2;
	this.ground = [];

	this.speed_sky = LayerManager.data.sky.speed;
	this.speed_mountain = LayerManager.data.mountain.speed;
	this.speed = LayerManager.data.ground.speed;

	for (var i=0;i<3;i++) {

		this.sky.push(game.add.sprite((LayerManager.data.sky.width-parseInt(this.speed_sky/LayerManager.data.sky.speed_offset))*i,0,'sky'));
		game.physics.arcade.enable(this.sky[i]);
		this.skyLayer.add(this.sky[i]);

		this.mountain.push(game.add.sprite((LayerManager.data.mountain.width-parseInt(this.speed_mountain/LayerManager.data.mountain.speed_offset))*i,0,'mountain'));
		game.physics.arcade.enable(this.mountain[i]);
		this.mountainLayer.add(this.mountain[i]);

		this.ground.push(game.add.sprite((LayerManager.data.ground.width-parseInt(this.speed/LayerManager.data.ground.speed_offset))*i,0,'ground'));
		game.physics.arcade.enable(this.ground[i]);
		this.ground[i].body.immovable = true;
		this.ground[i].body.setSize(LayerManager.data.ground.width,LayerManager.data.ground.height,0,260);
		this.groundLayer.add(this.ground[i]);
	}

};

LayerManager.data = {
	sky: {
		width: 600,
		height: 300,
		speed: -20,
		speed_offset: -2
	},
	mountain: {
		width: 600,
		height: 300,
		speed: -25,
		speed_offset: -4
	},
	ground: {
		width: 600,
		height: 40,
		speed: -300,
		speed_offset: -20
	}
}

LayerManager.prototype.update = function() {

	for (var i=0;i<3;i++) {
		if(this.sky[i].body.x <= -(LayerManager.data.sky.width-parseInt(this.speed_sky/LayerManager.data.sky.speed_offset))) {
			this.sky[i].body.x = (LayerManager.data.sky.width-parseInt(this.speed_sky/LayerManager.data.sky.speed_offset))*2;
		}
		if(this.mountain[i].body.x <= -(LayerManager.data.mountain.width-parseInt(this.speed_mountain/LayerManager.data.mountain.speed_offset))) {
			this.mountain[i].body.x = (LayerManager.data.mountain.width-parseInt(this.speed_mountain/LayerManager.data.mountain.speed_offset))*2;
		}
		if(this.ground[i].body.x <= -(LayerManager.data.ground.width-parseInt(this.speed/LayerManager.data.ground.speed_offset))) {
			this.ground[i].body.x = (LayerManager.data.ground.width-parseInt(this.speed/LayerManager.data.ground.speed_offset))*2;
		}
	}

	game.physics.arcade.collide(this.level.player.sprite,this.ground);

};

LayerManager.prototype.toggleScroll = function(toggle) {

	for (var i=0;i<3;i++) {
		this.sky[i].body.velocity.x = toggle ? LayerManager.data.sky.speed : 0;
		this.mountain[i].body.velocity.x = toggle ? LayerManager.data.mountain.speed : 0;
		this.ground[i].body.velocity.x = toggle ? LayerManager.data.ground.speed : 0;
	}

}

LayerManager.prototype.faster = function() {

	this.speed_sky += LayerManager.data.sky.speed_offset;
	this.speed_mountain += LayerManager.data.mountain.speed_offset;
	this.speed += LayerManager.data.ground.speed_offset;

	for(var i=0;i<3;i++) {
		this.sky[i].body.velocity.x = this.speed_sky;
		this.mountain[i].body.velocity.x = this.speed_mountain;
		this.ground[i].body.velocity.x = this.speed;
	}
}