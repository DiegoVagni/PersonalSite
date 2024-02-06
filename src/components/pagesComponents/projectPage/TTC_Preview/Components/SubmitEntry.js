import React from "react";

class SubmitEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="submitEntry">
        <label>{this.props.label}: </label>
        {this.props.entry.map((elem, index) => {
          return <label key={4000 + index}>{elem} </label>;
        })}
      </div>
    );
  }
}

export default SubmitEntry;
