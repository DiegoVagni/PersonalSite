import { Component } from "react";
import CompetenceBar from "./competenceBar/CompetenceBar"
import CompetenceContainer from "./CompetenceContainer"

class CompetenceBarContainer extends Component {
    render() {
        return (
            <CompetenceContainer src={this.props.src} competence={this.props.competence} animTime={this.props.animTime}>
                <CompetenceBar  maxCompetence={this.props.maxCompetence} competenceLevel={this.props.competenceLevel} competence={this.props.competence} text={this.props.text}></CompetenceBar>
            </CompetenceContainer>
        );
    }
}
export default CompetenceBarContainer;
