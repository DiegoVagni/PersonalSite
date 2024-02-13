import React, { Component } from "react";
import styleSheet from "../../utils/StyleSheet"
class Option extends Component {
  render() {
      return (
          <option style={styleSheet.getLayoutstyle("Setting_Select_Option")} selected={this.props.selected} value={this.props.value} key={this.props.index}>
            {this.props.children}
      </option>
    );
  }
}
export default Option;
