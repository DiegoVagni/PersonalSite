import React from "react";
import InputField from "./InputField";
class StringInputField extends InputField {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={"inputField stringField"}>
        <label className={"fieldLabel"}>{this.props.label}</label>
        <div className="leafs">
          <input
            onChange={this.validator}
            value={this.props.value}
            className={
              "inputBox " +
              (!this.props.value == "" ? "correctField" : "errorField")
            }
          ></input>
        </div>
      </div>
    );
  }
}

export default StringInputField;
