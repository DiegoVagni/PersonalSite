import React, { Component } from "react";
import styleSheet from "../../utils/StyleSheet"
import KeyGenerator from "../../utils/KeyGenerator"
import Option from "./Option"
export class Select extends Component {
    render() {
    
      return (
          <select style={styleSheet.getLayoutstyle("Setting_Select")}
              onChange={this.props.onChange}
              value={this.props.value}
      >
              {this.props.values.map((value, index) => (
                  <Option key={KeyGenerator.getNextKey()} index={index} value={value.value}>
                    {value.name}
                </Option>
            ))}
      </select>
    );
  }
}
export default Select;
