import React, { Component } from "react";

class Red extends Component {
  constructor() {
    super();
    this.state = {
      color: "green",
    };
  }

  changeColor = () => {
    this.setState({ color: "green" });
  };

  render() {
    return (
      <div>
        <button
          className="Buttons-Red"
          type="button"
          onClick={this.changeColor}
        >
          <h1 className="Content">Apply Red</h1>
        </button>
      </div>
    );
  }
}

export default Red;