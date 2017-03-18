import React from 'react';
import Consts from '../statics/consts';

const Alien = React.createClass({

    render() {
      const { alien } = this.props;

      return (<image
          x={alien.x}
          y={alien.y}
          height={Consts.ALIEN_HEIGHT}
          width={Consts.ALIEN_WIDTH}
          xlinkHref="images/alien.svg" />);
    }
});

export default Alien;
