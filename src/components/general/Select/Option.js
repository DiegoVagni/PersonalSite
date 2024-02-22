import React, { Component } from "react";
import SelectStyle from "./Select.module.scss"
class Option extends Component {
  render() {
      return (
          <option className={SelectStyle.Option} value={this.props.value} key={this.props.index}>
            {this.props.children}
      </option>
    );
  }
}
export default Option;
