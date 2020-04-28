import Phaser from 'phaser';
import logoImg from './logo.svg';

export default class ExampleScene extends Phaser.Scene {
  preload() {
    this.load.image('logo', logoImg);
  }

  create() {
    const logo = this.add.image(400, 150, 'logo');

    this.tweens.add({
      targets: logo,
      y: 450,
      duration: 2000,
      ease: 'Power2',
      yoyo: true,
      loop: -1,
    });
  }

  update() {}
}
