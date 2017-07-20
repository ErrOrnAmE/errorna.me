
var ObstacleManager = function(level) {

	this.level = level;

	this.groups = [];

	this.big_group = game.add.group();

	this.groups.push(new ObstacleGroup(level,this.big_group,650,[0,2]));

	this.isScrolling = false;

};

ObstacleManager.prototype.update = function() {

	while(this.groups.length > 0 && this.groups[0].destroyed) {
		this.groups.shift();
	}

	for (var i=0; i<this.groups.length; i++) {
		this.groups[i].update();
	}

};

ObstacleManager.prototype.toggleScroll = function(toggle) {

	if (toggle) {
		this.next();
	}

	for (var i=0; i<this.groups.length; i++) {
		this.groups[i].toggleScroll(toggle);
	}
};

ObstacleManager.prototype.faster = function() {
	for (var i=0; i<this.groups.length; i++) {
		this.groups[i].toggleScroll(true);
	}
};

ObstacleManager.prototype.next = function() {

	var max = 2+parseInt(-(this.level.layerManager.speed)/85);
	var min = max-2 < 1 ? 1 : max-3;
	var nb_obstacles = min+parseInt(Math.random()*(max-min));

	var obstacles = [];

	for(var i=0; i<nb_obstacles;i++) {
		obstacles.push(parseInt(Math.random()*Obstacle.data.spikes.length));
	}

	this.groups.push(new ObstacleGroup(this.level,this.big_group,1100,obstacles));

	var next_time = 1+Math.random(); //todo: *0.99999

	game.time.events.add(Phaser.Timer.SECOND*next_time,function() {
		if (this.level.playing) {
			this.next()
		}
	},this);

}
