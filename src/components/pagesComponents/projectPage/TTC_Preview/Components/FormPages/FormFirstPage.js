import React from "react";
import StringInputField from "../Fields/StringInputField";
import NumericInputField from "../Fields/NumericInputField";
import StringUtils from "../../utils/StringUtils";
class FormFirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.parentSetState = props.parentSetState;
  }
  render() {
    return (
      <div>
        <StringInputField
          label={"Here is possible to write any kind of string!"}
          validator={(e) => {
            console.log(
              "planting...",
              String.fromCodePoint(0x1f332),
              String.fromCodePoint(0x1f333),
              String.fromCodePoint(0x1f334)
            );
            this.props.parentSetState({ genericStringValue: e.target.value });
          }}
          value={this.props.genericStringValue}
        ></StringInputField>
        <StringInputField
          label={"Here are valid only vowels!"}
          //ottimo modo per mostrare l'utilizzo delle lambda, ma non è proprio Leggibilissimo
          validator={(e) => {
            let lastChar = e.target.value.substr(e.target.value.length - 1);
            if (!StringUtils.isVowel(lastChar)) {
              e.target.value = e.target.value.slice(0, -1);
            }
            this.props.parentSetState({ vowelValue: e.target.value });
          }}
          value={this.props.vowelValue}
        ></StringInputField>
        <NumericInputField
          label={"Insert 42...or a Number"}
          validationHook={(e, comp) => {
            if (Number(e.target.value) != 42) {
              comp.setState({ error: true });
            } else {
              comp.setState({ error: false });
            }
            this.parentSetState({ numberValue: e.target.value });
          }}
          value={this.props.numberValue}
        ></NumericInputField>
      </div>
    );
  }
}

export default FormFirstPage;
