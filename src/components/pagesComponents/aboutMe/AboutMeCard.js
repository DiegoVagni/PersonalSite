import { Component } from 'react'
import Locale from "../../../utils/Locale"
import TextStyles from "../../../scss/Texts.module.scss"
import Card from "../../siteComponents/card/Card"
import React from  "react";
class AboutMeCard extends Component {

	render() {
		return (
			<Card minHeight={true} title={this.props.title}>
				<p className={`${TextStyles.NormalText} ${TextStyles.ParagText}`}>{Locale.GetMessages(this.props.title + "_Description")}</p>
			</Card>
			)
	}
}
export default AboutMeCard