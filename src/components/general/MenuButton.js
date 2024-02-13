import { Component } from "react";
import { Link } from "react-router-dom"

import styleSheet from "../../utils/StyleSheet"
class MenuButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cursor: "default"
        };

        this.activeMouse = this.activeMouse.bind(this);
        this.deactiveMouse = this.deactiveMouse.bind(this);
    }

    activeMouse() {
        this.setState({ cursor: "pointer" });
    }
    deactiveMouse() {
        this.setState({ cursor: "default" });
    }
    render() {
  
        let cursorstyle = {
            backgroundColor: this.state.cursor != "pointer" ? styleSheet.style("Navbar_Color") : styleSheet.style("Navbar_Hover_Button_Color"),
            cursor: this.state.cursor
        }

        if (this.props.to != undefined) {
            return (<Link to={this.props.to} style={{ ...cursorstyle, ...styleSheet.getLayoutstyle("Menu_Button") }} >

                <img style={{ ...cursorstyle, ...styleSheet.getLayoutstyle("Menu_Button") }} src={this.props.src} onMouseEnter={this.activeMouse} onMouseLeave={this.deactiveMouse} alt={this.props.alt} />
            </Link>)
        }
        return (<img style={{ ...cursorstyle, ...styleSheet.getLayoutstyle("Menu_Button") }} src={this.props.src} alt={this.props.alt} onClick={this.props.onClick} onMouseEnter={this.activeMouse} onMouseLeave={this.deactiveMouse} />);
    }
}


export default MenuButton;
