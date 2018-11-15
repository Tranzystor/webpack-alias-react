import React from "react";

export default class SimpleComponent extends React.Component {
  arrowFunc = () => <div>arrow TADAM </div>;

  render() {
    const arrowResult = this.arrowFunc();
    return (
      <div>
        <div>result:</div>
        {arrowResult}
        <div>after result</div>
      </div>
    );
  }
}
