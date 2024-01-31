import { Component } from "react"
import Locale from "../../utils/Locale"

import CardStat from "../basics/cardStat/CardStat"


import Flexible from "../../resources/icons/flexible.svg"
import TeamWork from "../../resources/icons/teamwork.svg"
import Committer from "../../resources/icons/committer.svg"
import ProjectTecnologies from "./ProjectTecnologies"
import GitHub from "../../resources/icons/gitHub.svg"
import NewStamp from "../coolAnims/stamp/prefabStamps/NewStamp"
import CoolStamp from "../coolAnims/stamp/prefabStamps/CoolStamp"
class ProjectCard extends Component {
	constructor(props) {
		super(props);
		this.state = { haveStamp: false }
		this.updatePredicate = this.updatePredicate.bind(this)
	}
	componentDidMount() {
		this.updatePredicate();
		window.addEventListener("resize", this.updatePredicate);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updatePredicate);
	}

	updatePredicate() {
		this.setState({ haveStamp: window.innerWidth > 1000 && window.innerHeight > 1000 });
	}

	render() {
		let cardStyle = {
			width: "90%",
			height: "95%",
			minHeight:"95%",
			border: "1px solid " + this.props.StyleSheet.Style("Modal_Border"),
			backgroundColor: this.props.StyleSheet.Style("Card_Background"),
			borderRadius: "20px",
			margin: "10px",
			display: "flex",
			justifyContent: "flex-start",
			alignItems: "center",
			justifyItems: "center",
			flexDirection: "column",
			flexGrow:"1",
			boxShadow: this.props.StyleSheet.Style("Shadow") + " 0px 4px 12px",
			overflowY: "auto",
			padding:"5px"
		}
		let outerStyle = {
			minHeight: "95%",
			width: "90%",
			height: "95%",
			minWidth:"600px",
			overflowX: "hidden",
			overflowY: "hidden",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			justifyItems: "center"
		}
		let styleContainerStat = {
			display: "flex",
			flexDirection: "column",
			flexWrap: "wrap"
		}
		let innerstyleContainerStat = {
			display: "flex",
			flexDirection: "row",
			flexWrap: "wrap"
		}
		let title = this.props.title;
		let previewStyle = {
			width: "80%",
			height: "80%",
			borderRadius:"10%"
		}
		let textStyle = {
			font: "30px Tahoma, serif",
			margin: "3px",
			color: this.props.StyleSheet.Style("Text_Color"),
			textAlign:"justify",
		textJustify: "inter-word"
		}
		let titleStyle = {
			font: "50px Tahoma, serif",
			margin: "3px",
			color: this.props.StyleSheet.Style("Text_Color")
		}
		let stampType;
		if (this.props.stamp == "new") {
			stampType = <NewStamp parentColor={this.props.StyleSheet.Style("Card_Background")} rot={"25deg" } />
		} else if (this.props.stamp == "cool") {
			stampType = <CoolStamp parentColor={this.props.StyleSheet.Style("Card_Background")} rot={"25deg"} />
		}
		return (

			<div style={outerStyle}>
				{(this.state.haveStamp && this.props.stamp) ? stampType : <></>}
			<div style={cardStyle}>
					<p style={titleStyle}>{Locale.GetMessages(title)}</p>
					<p style={textStyle}>{Locale.GetMessages(title + "_Starting_Date")} - {Locale.GetMessages(title + "_End_Date")}</p>
					{this.props.preview && <div style={previewStyle}>{this.props.preview}</div>}
					<div style={styleContainerStat}>
						<div style={innerstyleContainerStat}>
						<CardStat StyleSheet={this.props.StyleSheet} src={Flexible} title={Locale.GetMessages("CardStat_Time")} value={Locale.GetMessages(this.props.title + "_Time")} ></CardStat>
						<CardStat StyleSheet={this.props.StyleSheet} src={TeamWork} title={Locale.GetMessages("CardStat_TeamSize")} value={Locale.GetMessages(this.props.title + "_TeamSize")} ></CardStat>
							<CardStat StyleSheet={this.props.StyleSheet} src={Committer} title={Locale.GetMessages("CardStat_Committer")} value={<a style={{ textDecoration: "none" }} href={this.props.to} target={"_blank"} rel={"noreferrer" }>{Locale.GetMessages(this.props.title + "_Committer")}</a>} ></CardStat>
						<CardStat StyleSheet={this.props.StyleSheet} src={GitHub} title={Locale.GetMessages("GitHub")} value={this.props.GitHub} ></CardStat>
						</div>
					<ProjectTecnologies StyleSheet={this.props.StyleSheet} tech={this.props.tech}></ProjectTecnologies>
					</div>
					<div><p style={textStyle}>{Locale.GetMessages(this.props.title + "_Description")}</p></div>
				</div>
			</div>
				)
	}
}
export default ProjectCard