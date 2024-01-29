import { Component } from "react";
import CompetenceBar from "./CompetenceBar"
import "../../anim.scss"
class CompetenceBarContainer extends Component {
    render() {
        let imgStyle = {
            width: "50px",
            height:"50px"
        }
        let containerStyle = {
            display: "flex",
            margin: "5px",
            animation: "fadeInRight "+this.props.animTime+"s linear",
        }
        return (
            <div style={ containerStyle}>
                <img style={imgStyle} src={this.props.src} alt={this.props.competence} />
                <CompetenceBar StyleSheet={this.props.StyleSheet} maxCompetence={this.props.maxCompetence} competenceLevel={this.props.competenceLevel} competence={this.props.competence} text={this.props.text}></CompetenceBar>
            </div>
        );
    }
}
export default CompetenceBarContainer;
