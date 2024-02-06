import React from "react";
import SubmitEntry from "./SubmitEntry";
class SubmitPage extends React.Component {
  constructor(props) {
    super(props);
  }

  defaultValidator(e) {
    console.log(e.target.value);
  }

  render() {
    console.log(this.props);
    return (
      <div className="submitPage">
        <h1>Data submitted to server:</h1>
        <SubmitEntry
          label="Your generic string"
          entry={[this.props.genericStringValue]}
        ></SubmitEntry>
        <SubmitEntry
          label="Your vowels string"
          entry={[this.props.vowelValue]}
        ></SubmitEntry>
        <SubmitEntry label="42!" entry={[this.props.numberValue]}></SubmitEntry>
        <SubmitEntry
          label="The date you choose"
          entry={[this.props.dateValue]}
        ></SubmitEntry>
        <SubmitEntry
          label="the checkbox was ticked"
          entry={[this.props.firstCheckbox.toString()]}
        ></SubmitEntry>
        <SubmitEntry
          label="The checkboxes you choose"
          entry={this.props.groupBoxValues}
        ></SubmitEntry>
      </div>
    );
  }
}
export default SubmitPage;
