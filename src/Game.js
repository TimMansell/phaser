import React from 'react';
import Phaser from 'phaser';
import ExampleScene from './scene';
import './game.scss';

export default class Game extends React.Component {
  componentDidMount() {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: 'phaser-game',
      scene: [ExampleScene],
    };

    new Phaser.Game(config);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="game">
        <div id="phaser-game" />
      </div>
    );
  }
}
