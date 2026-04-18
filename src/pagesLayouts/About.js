import { Component } from "react";
import AboutTimeline from "../components/pagesComponents/aboutMe/AboutTimeline"
import FlexStyle from "../scss/Flexes.module.scss"


class About extends Component {
	render() {
		const events = [
			"FirstSteps",
			"H-Farm",
			"SUPSIME",
			"TAG",
			"Vodafone",
			"PartTime",
			"G3CLABSME",
			"OnlyMe",
			"BackToConsulence",
			"AIRapport",
			"Passions",
		]
		return (
			<div className={`${FlexStyle.FlexColumnCenterTop}`}>
				<AboutTimeline events={events} />
			</div>
		);
	}
}
export default About;
