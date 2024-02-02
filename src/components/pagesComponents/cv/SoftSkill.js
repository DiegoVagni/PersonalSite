import { Component } from "react";
import "../../../anim.scss"
import StyleSheet from "../../../utils/StyleSheet"
import CompetenceContainer from "./CompetenceContainer"
class SoftSkill extends Component {
    render() {
   
    
        return (<CompetenceContainer src={this.props.src} competence={this.props.competence} animTime={this.props.animTime}>
            <p style={StyleSheet.getLayoutStyle("Normal_Text")}>{this.props.competence}</p>
            </CompetenceContainer>
          
        );
    }
}
export default SoftSkill;
