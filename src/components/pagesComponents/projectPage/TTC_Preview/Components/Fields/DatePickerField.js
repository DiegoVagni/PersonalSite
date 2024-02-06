import React from "react";
import InputField from "./InputField";
import DateUtils from "../../utils/DateUtils";
//abstract -> fossi in typescript
class DatePickerField extends InputField {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="inputField dateField">
        <label className="fieldLabel">{this.props.label}</label>
        <input
          type="date"
          onChange={this.validator}
          value={this.props.value}
          className={
            "inputBox " + (!this.props.error ? "correctField" : "errorField")
          }
        ></input>
      </div>
    );
  }
}
export default DatePickerField;
