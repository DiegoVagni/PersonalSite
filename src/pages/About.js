import { Component } from "react";
import Page from "./Page";
import AboutMeCard from "../components/aboutMeCards/AboutMeCard"
import Milano from "../resources/images/milano.jpg"

class About extends Component {
	render() {
		let divStyle = {
			height: "100%",
			width: "100%",
			display: "flex",
			justifyContent: "flex-start",
			alignItems: "center",
			justifyItems: "center",
			flexDirection: "column",
			overflowY: "auto"
		}
    return (
		<Page StyleSheet={this.props.StyleSheet}>
			<div style={divStyle}>
				<AboutMeCard src={Milano } StyleSheet={this.props.StyleSheet} title={"FirstSteps"}></AboutMeCard>
				<AboutMeCard  StyleSheet={this.props.StyleSheet} title={"SUPSIME"}></AboutMeCard>
				<AboutMeCard StyleSheet={this.props.StyleSheet} title={"G3CLABSME"}></AboutMeCard>
				<AboutMeCard  StyleSheet={this.props.StyleSheet} title={"OnlyMe"}></AboutMeCard>
				<AboutMeCard StyleSheet={this.props.StyleSheet}  title={"Passions"}></AboutMeCard>
			</div>
		</Page>
    );
  }
}
export default About;
