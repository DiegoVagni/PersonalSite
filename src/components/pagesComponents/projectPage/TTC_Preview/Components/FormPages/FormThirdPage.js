import React from "react";
import CheckInputField from "../Fields/CheckInputField";
import GroupCheckInputField from "../Fields/GroupCheckInputField";
class FormThirdPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }
  render() {
    return (
      <div>
        <CheckInputField
          label={"Check this"}
          validator={(e) => {
            this.setState(
              { checked: !this.state.checked },
              this.props.parentSetState({ firstCheck: !this.state.checked })
            );
          }}
        ></CheckInputField>
        <GroupCheckInputField
          label={"you can check one or more of theese"}
          Options={["melo", "grano", "uva", "banano"]}
          multipleCheckboxHandler={this.props.multipleCheckboxHandler}
        ></GroupCheckInputField>
      </div>
    );
  }
}

export default FormThirdPage;
