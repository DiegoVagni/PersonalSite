import React from "react";
import InputField from "./InputField";
class CheckInputField extends InputField {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="inputField checkField">
        <label className="fieldLabel checkLabel">{this.props.label}</label>
        <input
          type="checkbox"
          onChange={this.validator}
          className={
            "inputBox " +
            (!this.state.error
              ? this.state.start
                ? ""
                : "correctField"
              : "errorField")
          }
          value={this.props.value}
        ></input>
      </div>
    );
  }
}

export default CheckInputField;
