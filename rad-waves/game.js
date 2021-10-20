const gameState = {
};

const config = {
	type: Phaser.AUTO,
	width: 1500,
	height: 700,
	backgroundColor: "88CEEB",
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {y: 1500},
			enableBody: true,
		}
	},
	scene: [GameScene]
};

const game = new Phaser.Game(config);
