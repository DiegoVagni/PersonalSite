
import { Component } from "react"
import StyleSheet from "../../../utils/StyleSheet"
class SkillContainer extends Component {
	render() {
		return (
			<div style={StyleSheet.getLayoutStyle("CV_Section")}>
				{this.props.title ? (<p style={StyleSheet.getLayoutStyle("SubTitle_Text")}>
					{this.props.title}
				</p>):<></>}
				<div style={StyleSheet.getLayoutStyle("CV_Section_Container")}>
					{ this.props.children}
				</div>
			</div>
		)
	}

}
export default SkillContainer