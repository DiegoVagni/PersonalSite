
import { Component } from "react"

import ContainerStyle from "../../../scss/Containers.module.scss"
import TextStyle from "../../../scss/Texts.module.scss"
import AppStyle from "../../../scss/App.module.scss"
class SkillContainer extends Component {
	render() {
		return (
			<div className={AppStyle.CVSection}>
				{this.props.title ? (<p className={TextStyle.SubTitleText}>
					{this.props.title}
				</p>) : <></>}
				<div className={ContainerStyle.CVSectionContainer}>
					{ this.props.children}
				</div>
			</div>
		)
	}

}
export default SkillContainer