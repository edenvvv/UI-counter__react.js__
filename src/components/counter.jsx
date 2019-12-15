import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tags1", "tags2", "tags3"]
  };
  render() {
    return (
      // className="something" is css format
      <div>
        <span className={this.getCssClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      // {this.state.tags.map(tag => (<li key={tag}>{tag}</li>))} == loop on list 'tags'
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
