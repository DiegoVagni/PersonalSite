import { Component } from "react";
import styleSheet from "../utils/StyleSheet";
import AboutMeCard from "../components/pagesComponents/aboutMe/AboutMeCard"


class About extends Component {
	render() {

		return (
			<div style={{
				...styleSheet.getLayoutstyle("Card_Container"), ...{ animation: styleSheet.animation ? "fadeIn 2s ease-in 0s 1 normal forwards" : "" }
			}}>
				<AboutMeCard styleSheet={this.props.styleSheet} title={"FirstSteps"}></AboutMeCard>
				<AboutMeCard styleSheet={this.props.styleSheet} title={"SUPSIME"}></AboutMeCard>
				<AboutMeCard styleSheet={this.props.styleSheet} title={"G3CLABSME"}></AboutMeCard>
				<AboutMeCard styleSheet={this.props.styleSheet} title={"OnlyMe"}></AboutMeCard>
				<AboutMeCard styleSheet={this.props.styleSheet} title={"Passions"}></AboutMeCard>
			</div>

		);
	}
}
export default About;
