class Mudman {
    platforms:Phaser.Group;
    player:Phaser.Sprite;
    cursors;
    
    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create, update: this.update});
    }
    
    game: Phaser.Game
    
    preload() {
        this.game.load.pack ("main", "pack.json");
        
    }

    create() {
        this.game.add.sprite(0,0, 'mudman');
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.platforms = this.game.add.group();
        this.platforms.enableBody = true;
        let ground = this.platforms.create(0, this.game.world.height - 64, "ground");
        ground.scale.setTo(6, 1);
        ground.body.immovable = true;
        let ledge = this.platforms.create(400, 400,  "ground");
        ledge.body.immovable = true;
        ledge = this.platforms.create(-150, 250,  "ground");
        ledge.body.immovable = true;
        this.player = this.game.add.sprite(32, 0, 'mudman');
        this.game.physics.arcade.enable(this.player);
        this.player.body.bounce.y = 0.2;
        this.player.body.gravity.y = 300;
        this.player.anchor.setTo(0.5,0.5);
        this.player.body.collideWorldBounds = true;
        this.player.animations.add('walk', [0, 1, 2, 3], 10, true);
        
        this.cursors = this.game.input.keyboard.createCursorKeys();
    }
    
    update() {
        this.game.physics.arcade.collide(this.player, this.platforms);
            //  Reset the players velocity (movement)
    this.player.body.velocity.x = 0;

    if (this.cursors.left.isDown)
    {
        this.player.body.velocity.x = -150;
        this.player.animations.play('walk');
        this.player.scale.x = -1;
    }
    else if (this.cursors.right.isDown)
    {

        this.player.body.velocity.x = 150;

        this.player.animations.play('walk');
        this.player.scale.x = 1;
    }
    else
    {

        this.player.animations.stop();

        this.player.frame = 1;
    }


    if (this.cursors.up.isDown && this.player.body.touching.down)
    {
        this.player.body.velocity.y = -350;
    }
    }
}

window.onload = () => {
    var game = new Mudman();
}