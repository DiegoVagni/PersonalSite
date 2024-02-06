import React from "react";
import InputField from "./InputField";
class GroupCheckInputField extends InputField {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="inputField groupCheckField">
        <label className="fieldLabel">{this.props.label}</label>
        <div className="checkBoxes">
          {this.props.Options.map((elem, index) => {
            return (
              <React.Fragment key={index}>
                <label className="fieldLabel checkLabel">{elem}</label>
                <input
                  type="checkbox"
                  val={elem}
                  className={
                    "inputBox " +
                    (!this.state.error
                      ? this.state.start
                        ? ""
                        : "correctField"
                      : "errorField")
                  }
                  onChange={this.props.multipleCheckboxHandler}
                ></input>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

export default GroupCheckInputField;
