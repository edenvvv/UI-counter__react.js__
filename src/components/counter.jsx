import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
    // add to count AND update the website
  };

  render() {
    return (
      // className="something" is css format
      <div>
        <span className={this.getCssClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getCssClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    // '?' == if , ':' == else
    return classes;
  }
  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
