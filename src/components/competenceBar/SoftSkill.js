import { Component } from "react";
import "../../anim.scss"
class SoftSkill extends Component {
    render() {
        let imgStyle = {
            width: "50px",
            height:"50px"
        }
        let containerStyle = {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            justifyItems:"center",
            margin: "5px",
            animation: "fadeInRight " + this.props.animTime + "s linear",
       
            flexWrap:"wrap"
        }
        let textStyle = {
         
            margin: "3px",
            color: this.props.StyleSheet.Style("Text_Color"),

        }
        return (
            <div style={ containerStyle}>
                <img style={imgStyle} src={this.props.src} alt={this.props.competence} />
                <p style={ textStyle}>{this.props.competence}</p>
            </div>
        );
    }
}
export default SoftSkill;
