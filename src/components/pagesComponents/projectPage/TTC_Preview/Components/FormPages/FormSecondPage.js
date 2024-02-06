import React from "react";
import DateUtils from "../../utils/DateUtils";
import DatePickerField from "../Fields/DatePickerField";
class FormSecondPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <DatePickerField
          label={"scegli una data futura"}
          validator={(e) => {
            this.props.parentSetState({ dateValue: e.target.value });
          }}
          error={!DateUtils.isFutureDate(this.props.dateValue)}
          value={this.props.dateValue}
          classname="inputBox "
        ></DatePickerField>
      </div>
    );
  }
}

export default FormSecondPage;
