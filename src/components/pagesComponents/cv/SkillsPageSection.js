
import { Component } from "react"
import styleSheet from "../../../utils/StyleSheet"
import Locale from "../../../utils/Locale"
class SkillsPageSection extends Component {
	render() {
		return (
			<div style={styleSheet.getLayoutstyle("Skills_Section_Layout")} >
				<p style={styleSheet.getLayoutstyle("Title_Text")}>
					{Locale.GetMessages(this.props.title)}
				</p>
				{this.props.children}
			</div>
		)
	}

}
export default SkillsPageSection