import React from "react";

//abstract -> fossi in typescript
class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="buttonwrapper">
        <button
          className={this.props.className}
          onClick={this.props.clickhandler}
        >
          {this.props.children}
        </button>
      </div>
    );
  }
}
export default Button;
