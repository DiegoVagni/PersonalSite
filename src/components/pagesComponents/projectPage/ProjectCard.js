import { Component } from "react"
import Locale from "../../../utils/Locale"

import CardStat from "../../siteComponents/card/CardStat"
import Card from "../../siteComponents/card/Card"
import ProjectTecnologies from "./ProjectTecnologies"
import ProjectStyle from "./ProjectPage.module.scss"
import TextStyle from "../../../scss/Texts.module.scss"
import FlexStyle from "../../../scss/Flexes.module.scss"
import Flexible from "../../../resources/icons/flexible.svg"
import TeamWork from "../../../resources/icons/teamwork.svg"
import Committer from "../../../resources/icons/committer.svg"
import GitHub from "../../../resources/icons/gitHub.svg"
import UtilStyle from "../../../scss/Utils.module.scss"
import React from "react";
class ProjectCard extends Component {


	render() {

		return (<Card title={this.props.title} subTitle={Locale.GetMessages(this.props.title + "_Starting_Date") + "-" + Locale.GetMessages(this.props.title + "_End_Date")} stamp={this.props.stamp} stampRot={this.props.stampRot} preview={this.props.preview}>
			<div className={`${FlexStyle.FlexRowCenter} ${FlexStyle.Wrap} ${UtilStyle.Width}`}>
				<CardStat  src={Flexible} title={Locale.GetMessages("CardStat_Time")} value={Locale.GetMessages(this.props.title + "_Time")} ></CardStat>
				<CardStat src={TeamWork} title={Locale.GetMessages("CardStat_TeamSize")} value={Locale.GetMessages(this.props.title + "_TeamSize")} ></CardStat>
				<CardStat src={Committer} title={Locale.GetMessages("CardStat_Committer")} value={<a className={ProjectStyle.NoneDeco} href={this.props.to} target={"_blank"} rel={"noreferrer"}>{Locale.GetMessages(this.props.title + "_Committer")}</a>} ></CardStat>
				<CardStat  src={GitHub} title={Locale.GetMessages("GitHub")} value={this.props.GitHub} ></CardStat>
			</div>
			<ProjectTecnologies tech={this.props.tech}></ProjectTecnologies>
			<div className={ProjectStyle.DescriptionContainer}><p className={`${TextStyle.ParagText} ${TextStyle.NormalText}`}>{Locale.GetMessages(this.props.title + "_Description")}</p></div>
			{this.props.downloads ? this.props.downloads:<></> }
		</Card >
		)
	}
}
export default ProjectCard