import React from 'react';
import Consts from '../statics/consts';

const InitMessagge = React.createClass({

    render() {
        if (this.props.status == Consts.GAME_STOP)
        {
          return (<text
              width="300"
              textAnchor="middle"
              y={Consts.BOARD_HEIGHT/2}
              x={Consts.BOARD_WIDTH/2}
              textAnchor="middle"
              fill="#c8e8da"
              fontSize="40">Click to begin!</text>
            );
        }
        return null;
    }
});

export default InitMessagge;
