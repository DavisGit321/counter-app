import React, { Component } from 'react';


class Counter extends Component {

  formatCount() {
    const { value } = this.props.counter;
    const x = <div> Zero!</div>;
    return value === 0 ? x : value;
  }

  badgeSet() {
    let classes = 'badge m-2 badge-';
    const { value } = this.props.counter;
    classes += value === 0 ? 'warning' : 'primary';
    return classes;
  }

  render() {
    return (
      <div>
        <span className={this.badgeSet()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onInc(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Something
          </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
          </button>
      </div>
    );
  }
}
export default Counter;
