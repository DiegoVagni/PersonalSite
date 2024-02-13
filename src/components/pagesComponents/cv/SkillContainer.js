
import { Component } from "react"
import styleSheet from "../../../utils/StyleSheet"
class SkillContainer extends Component {
	render() {
		return (
			<div style={styleSheet.getLayoutstyle("CV_Section")}>
				{this.props.title ? (<p style={styleSheet.getLayoutstyle("SubTitle_Text")}>
					{this.props.title}
				</p>):<></>}
				<div style={styleSheet.getLayoutstyle("CV_Section_Container")}>
					{ this.props.children}
				</div>
			</div>
		)
	}

}
export default SkillContainer