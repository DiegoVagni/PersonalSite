import React, { Component } from "react";
import Option from "./Option"
import SelectStyle from "./Select.module.scss"
export class Select extends Component {
    render() {
    
        return (
            <select className={SelectStyle.Select} 
              onChange={this.props.onChange}
              value={this.props.value}
      >
              {this.props.values.map((value, index) => (
                  <Option key={value.value} index={index} value={value.value}>
                    {value.name}
                </Option>
            ))}
      </select>
    );
  }
}
export default Select;
