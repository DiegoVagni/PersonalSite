import { Component } from "react";
import { Link } from "react-router-dom"

import NavBarStyle from "./Navbar.module.scss"
import ImagesStyle from "../../../scss/Images.module.scss";
class MiniButton extends Component {
  
    render() {
  
      

        if (this.props.to != undefined) {
            return (<Link to={this.props.to} className={NavBarStyle.MiniButton} >

                <img className={`${NavBarStyle.MiniButton} ${ImagesStyle.SmallImage}`} src={this.props.src} alt={this.props.alt} />
            </Link>)
        }
        return (<img className={`${NavBarStyle.MiniButton} ${ImagesStyle.FixedHeightSmallImage}`} src={this.props.src} alt={this.props.alt} onClick={this.props.onClick} />);
    }
}


export default MiniButton;
