import React from "react";
import InputField from "./InputField";
class NumericInputField extends InputField {
  constructor(props) {
    super(props);
    this.ValidationHook = this.defaultValidationHook;
    if (props.validator == null) {
      this.validator = this.defaultValidator.bind(this); //sovrascrivo il defaultvalidator in questo caso quindi devo riassegnarlo e bindarlo
    }
    if (props.validationHook != null) {
      //capir perchè non worka
      this.ValidationHook = props.validationHook.bind(this);
    }
  }
  defaultValidationHook(e) {}
  //dichiaro nuovamente la funzione -> equivalente di far override
  defaultValidator(e) {
    e.target.value = e.target.value.trim();
    if (isNaN(Number(e.target.value))) {
      this.setState({ error: true, start: false });
      //essendo onChange mi basta cancellare l'ultimo carattere immesso
      e.target.value = e.target.value.slice(0, -1).trim();
      /*se un giorno dovrò solo restringere il campo dei valori è più veloce passargli l'hook, 
      per cose più complesse si può modificare tutto il validator */
    } else {
      this.ValidationHook(e, this);
    }
  }

  render() {
    return (
      <div className="inputField numericField">
        <label className="fieldLabel">{this.props.label}</label>
        <div className="leafs">
          <input
            onChange={this.validator}
            className={
              "inputBox " + (!this.state.error ? "correctField" : "errorField")
            }
            value={this.props.value}
          ></input>
        </div>
      </div>
    );
  }
}

export default NumericInputField;
