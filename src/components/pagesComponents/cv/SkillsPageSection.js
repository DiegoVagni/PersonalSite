
import { Component } from "react"
import StyleSheet from "../../../utils/StyleSheet"
import Locale from "../../../utils/Locale"
class SkillsPageSection extends Component {
	render() {
		return (
			<div style={StyleSheet.getLayoutStyle("Skills_Section_Layout")} >
				<p style={StyleSheet.getLayoutStyle("Title_Text")}>
					{Locale.GetMessages(this.props.title)}
				</p>
				{this.props.children}
			</div>
		)
	}

}
export default SkillsPageSection