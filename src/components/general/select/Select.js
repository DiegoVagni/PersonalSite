import React, { Component } from "react";
import StyleSheet from "../../../utils/StyleSheet"
import Option from "./Option"
export class Select extends Component {
  render() {
    return (
        <select style={StyleSheet.getLayoutStyle("Setting_Select")}
        defaultValue={this.props.defaultValue}
        onChange={this.props.onChange}
      >
            {this.props.values.map((value, index) => (
                <Option key={index} index={index} value={value.value}>
                    {value.name}
                </Option>
            ))}
      </select>
    );
  }
}
export default Select;
