

Croco.Boot = function(game) {};

Croco.Boot.prototype =
{
	preload: function() {

		console.log('Boot...');

		/* Some misc options */
		game.physics.startSystem(Phaser.Physics.ARCADE);
		/*game.time.advancedTiming = true;
		game.renderer.renderSession.roundPixels = true;

		game.tweens.frameBased = true;
		game.stage.disableVisibilityChange = true;*/

		/* Loading background */
		game.load.image('sky',game._folder+'/assets/background/layer-1-sky.png');
		game.load.image('mountain',game._folder+'/assets/background/layer-2-mountain.png');
		game.load.image('ground',game._folder+'/assets/background/layer-3-ground.png');

		/* Loading player */
		game.load.spritesheet('player',game._folder+'/assets/player.png',49,69,10);

		/* Loading obstacles */
		game.load.image('spike-0',game._folder+'/assets/spikes/spike monster A.png');
		game.load.image('spike-1',game._folder+'/assets/spikes/spike monster B.png');
		game.load.image('spike-2',game._folder+'/assets/spikes/spike.png');

		/* Loading UI */
		game.load.image('game-over',game._folder+'/assets/game_over.png');

	},
	create: function() {

		game.state.start('Level');

	}
}

game.state.add('Boot',Croco.Boot);
