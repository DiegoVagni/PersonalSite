import { Component } from "react";
import TextStyle from "../../../scss/Texts.module.scss"

import CompetenceContainer from "./CompetenceContainer"
class SoftSkill extends Component {
    render() {
   
    
        return (<CompetenceContainer src={this.props.src} competence={this.props.competence} animTime={this.props.animTime}>
            <p className={TextStyle.NormalText }>{this.props.competence}</p>
            </CompetenceContainer>
          
        );
    }
}
export default SoftSkill;
