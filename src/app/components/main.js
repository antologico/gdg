import React from 'react';
import Board from './board';
import Consts from '../statics/consts';

const MainComponent = React.createClass({

    iterate() {
        this.props.iterate(
          this.props.game.status,
          this.props.aliens,
          this.props.shots
        );
    },

    componentWillMount: function() {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
        this.interval = setInterval(this.iterate, 1/Consts.GAME_FPS);
    },

    componentWillUnmount: function() {
        window.removeEventListener('keydown', this.handleKeyDown);
        window.removeEventListener('keyup', this.handleKeyUp);
        clearInterval(this.interval);
    },

    handleKeyDown(key) {

        if (key.keyCode == 37) { // left arrow
            this.props.keyLeft();
        }

        if (key.keyCode == 39) { // right arrow
            this.props.keyRight();
        }

        if (key.keyCode == 32) { // space
            const { x ,y } = this.props.spaceship;
            const _x = x + parseInt(Consts.SPACESHIP_WIDTH/2);
            this.props.shot(_x ,y);
        }
    },

    handleKeyUp(key) {
      if (key.keyCode == 39 || key.keyCode == 37) {
          this.props.keyNone();
      }
    },

    activate() {
        this.props.initGame();
    },

    render() {
        return (
            <div onClick={this.activate} >
                <Board {...this.props} onClick={this.activate} />
            </div>
        );
    }
});

export default MainComponent;
