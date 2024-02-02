import { Component } from "react";
import StyleSheet from "../../../utils/StyleSheet"
import "../../../anim.scss"
class CompetenceContainer extends Component {
    render() {

        let containerStyle = {

            animation: "fadeInRight " + this.props.animTime + "s linear",
        }
        return (
            <div style={{ ...containerStyle, ...StyleSheet.getLayoutStyle("Compentence_Container") }}>
                <img style={StyleSheet.getLayoutStyle("Small_Image")} src={this.props.src} alt={this.props.competence} />
                { this.props.children}
            </div>
        );
    }
}
export default CompetenceContainer;
