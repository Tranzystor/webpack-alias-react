import React from 'react';

export default class SimpleComponent extends React.Component {

  arrowFunc = () => {
    return <div>arrow TADAM</div>
  };

  render() {
    const arrowResult = this.arrowFunc();
    return <div>result: {arrowResult}</div>
  }
};