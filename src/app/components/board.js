import React from 'react';
import Alien from './alien';
import Shot from './shot';
import Spaceship from './spaceship';
import GameOverMessagge from './game-over-messagge';
import InitMessagge from './init-messagge';
import WinMessagge from './win-messagge';
import Consts from '../statics/consts';

const Board = React.createClass({

    drawAliens(aliens) {
      return (
          <g>
            {Object.keys(aliens).map(function(i){
                return <Alien alien={aliens[i]} key={i} />
            })}
          </g>
      )
    },

    drawShots(shots) {
      return (
          <g>
            {Object.keys(shots).map(function(i){
                return (<Shot shot={shots[i]} key={i} />);
            })}
          </g>
      )
    },

    render() {
        return (
          <svg
            height={Consts.BOARD_HEIGHT}
            width={Consts.BOARD_WIDTH}
            className="scenario">
            { this.drawAliens(this.props.aliens) }
            { this.drawShots(this.props.shots) }
            <Spaceship spaceship={this.props.spaceship} />
            <GameOverMessagge status={this.props.game.status} />
            <WinMessagge status={this.props.game.status} />
            <InitMessagge status={this.props.game.status} />
          </svg>
        );
    }
});

export default Board;
