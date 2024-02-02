import { Component } from "react"
import StyleSheet from "../../../../utils/StyleSheet"
class Preview extends Component {
	render() {

		return (
			<div style={StyleSheet.getLayoutStyle("Preview")}>{this.props.children}</div>
		)
	}
}
export default Preview