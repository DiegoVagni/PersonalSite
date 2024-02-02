import { Component } from "react";
import StyleSheet from "../utils/StyleSheet";
import AboutMeCard from "../components/pagesComponents/aboutMe/AboutMeCard"


class About extends Component {
	render() {

    return (
			<div style={StyleSheet.getLayoutStyle("Card_Container")}>
				<AboutMeCard StyleSheet={this.props.StyleSheet} title={"FirstSteps"}></AboutMeCard>
				<AboutMeCard  StyleSheet={this.props.StyleSheet} title={"SUPSIME"}></AboutMeCard>
				<AboutMeCard StyleSheet={this.props.StyleSheet} title={"G3CLABSME"}></AboutMeCard>
				<AboutMeCard  StyleSheet={this.props.StyleSheet} title={"OnlyMe"}></AboutMeCard>
				<AboutMeCard StyleSheet={this.props.StyleSheet}  title={"Passions"}></AboutMeCard>
			</div>
		
    );
  }
}
export default About;
