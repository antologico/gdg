import React from 'react';
import Consts from '../statics/consts';

const WinMessagge = React.createClass({

    render() {
        if (this.props.status == Consts.GAME_WIN)
        {
          return (<text
              width="300"
              textAnchor="middle"
              y={Consts.BOARD_HEIGHT/2}
              x={Consts.BOARD_WIDTH/2}
              textAnchor="middle"
              fill="#c8e8da"
              fontSize="40">You win!</text>
            );
        }
        return null;
    }
});

export default WinMessagge;
