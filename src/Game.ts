///<reference path="phaser/phaser.d.ts"/>

module Scumbag
{
  export class Game extends Phaser.Game
  {
    constructor()
    {
      super(864,396,Phaser.AUTO,'content',null,false,false);

      this.state.add('Boot',Boot,false);
      this.state.add('Preloader',Preloader,false);

      this.state.start('Boot');
    }
  }
}