import { Component } from "react";
import { Link } from "react-router-dom"

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
        this.setState({ cursor: "pointer"});
    }
    deactiveMouse() {
        this.setState({ cursor:"default"});
    }
	render() {
        var imgStyle = {
            backgroundColor: this.state.cursor != "pointer" ? this.props.StyleSheet.Style("Navbar_Color") : this.props.StyleSheet.Style("Navbar_Hover_Button_Color"),
            width: "100%",
            height: "100%",
            maxHeight: "50px",
            maxWidth: "50px",
            boxShadow: "0px 7px 10px -7px " + this.props.StyleSheet.Style("Shadow"),
            cursor: this.state.cursor
        }
        if (this.props.to != undefined) {
            return (<Link to={this.props.to} style={imgStyle} ><img style={imgStyle} src={this.props.src} onMouseEnter={this.activeMouse} onMouseLeave={this.deactiveMouse}  alt={this.props.alt}/></Link>)
        }
        return (<img style={imgStyle} src={this.props.src} alt={this.props.alt} onClick={this.props.onClick} onMouseEnter={this.activeMouse} onMouseLeave={this.deactiveMouse} />);
	}
}


export default MenuButton;
