import { Component } from "react"
import Locale from "../../../utils/Locale"
import StyleSheet from "../../../utils/StyleSheet"

import CardStat from "../../siteComponents/card/CardStat"
import Preview from "../../siteComponents/card/previews/Preview"
import Card from "../../siteComponents/card/Card"
import ProjectTecnologies from "./ProjectTecnologies"

import Flexible from "../../../resources/icons/flexible.svg"
import TeamWork from "../../../resources/icons/teamwork.svg"
import Committer from "../../../resources/icons/committer.svg"
import GitHub from "../../../resources/icons/gitHub.svg"

class ProjectCard extends Component {


	render() {
			
		return (<Card title={this.props.title} subTitle={Locale.GetMessages(this.props.title + "_Starting_Date") + "-" + Locale.GetMessages(this.props.title + "_End_Date")} stamp={this.props.stamp} preview={<Preview>{this.props.preview}</Preview>}>
			<div style={StyleSheet.getLayoutStyle("Project_Card_Stats_Container")}>
				<CardStat  src={Flexible} title={Locale.GetMessages("CardStat_Time")} value={Locale.GetMessages(this.props.title + "_Time")} ></CardStat>
				<CardStat  src={TeamWork} title={Locale.GetMessages("CardStat_TeamSize")} value={Locale.GetMessages(this.props.title + "_TeamSize")} ></CardStat>
				<CardStat  src={Committer} title={Locale.GetMessages("CardStat_Committer")} value={<a style={{ textDecoration: "none" }} href={this.props.to} target={"_blank"} rel={"noreferrer"}>{Locale.GetMessages(this.props.title + "_Committer")}</a>} ></CardStat>
				<CardStat  src={GitHub} title={Locale.GetMessages("GitHub")} value={this.props.GitHub} ></CardStat>
			</div>
			<ProjectTecnologies tech={this.props.tech}></ProjectTecnologies>
			<div><p style={StyleSheet.getLayoutStyle("Parag_Text")}>{Locale.GetMessages(this.props.title + "_Description")}</p></div>
		</Card >
		)
	}
}
export default ProjectCard