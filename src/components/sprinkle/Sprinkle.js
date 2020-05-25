import React from 'react';

export default class Sprinkle extends React.Component {
  render() {
    return (
      <div
        className={'sprinkle'}
        style={{ top: this.props.y, left: this.props.x, transform: 'rotate(' + this.props.rotate + 'deg)'}}
      ></div>
    );
  }
}
