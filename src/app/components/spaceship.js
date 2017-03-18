import React from 'react';
import Consts from '../statics/consts';

const Spaceship = React.createClass({

    render() {
      const { spaceship } = this.props;

      return (<image
          x={spaceship.x}
          y={spaceship.y}
          height={Consts.SPACESHIP_HEIGHT}
          width={Consts.SPACESHIP_WIDTH}
          xlinkHref="images/spaceship.svg" />);
    }
});

export default Spaceship;
