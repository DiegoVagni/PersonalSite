import React, { Component } from "react";

export class Option extends Component {
  render() {
    return (
        <option value={this.props.value} key={this.props.yek} {...this.props}>
        {this.props.children}
      </option>
    );
  }
}
export default Option;
