import React, { Component } from "react";

export class Select extends Component {
  render() {
    return (
      <select
        defaultValue={this.props.defaultValue}
        onChange={this.props.onChange}
      >
        {this.props.children}
      </select>
    );
  }
}
export default Select;
