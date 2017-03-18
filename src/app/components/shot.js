import React from 'react';

const Shot = React.createClass({
    render() {
      const { shot } = this.props;
      return (<rect
          x={shot.x - 1}
          y={shot.y - 20}
          height="20"
          width="2"
          fill="red" />);
    }
});

export default Shot;
