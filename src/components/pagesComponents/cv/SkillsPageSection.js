
import { Component } from "react"
import Locale from "../../../utils/Locale"

import TextsStyle from "../../../scss/Texts.module.scss"
import AppStyle from "../../../scss/App.module.scss"
class SkillsPageSection extends Component {
	render() {
		return (
			<div className={AppStyle.SkillSectionLayout }>
				<p className={TextsStyle.TitleText }>
					{Locale.GetMessages(this.props.title)}
				</p>
				{this.props.children}
			</div>
		)
	}

}
export default SkillsPageSection