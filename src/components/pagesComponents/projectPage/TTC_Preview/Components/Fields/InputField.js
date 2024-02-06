import React from "react";

//abstract -> fossi in typescript
class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: true, start: true };
    //il defaultvalidator non necessita un bind, ma va fatto in caso di override da classe figlia
    this.validator = this.defaultValidator;
    //questo non lo bindo perchè si riferisce al form parent.
    this.submitFieldHandler = props.submitFieldHandler;
    if (props.validator != null) {
      this.validator = props.validator.bind(this);
    }
  }

  defaultValidator(e) {
    console.log(e.target.value);
  }
}
export default InputField;
