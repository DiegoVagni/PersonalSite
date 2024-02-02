import { Component } from "react"

class Preview extends Component {
	render() {

		return (
			<div style={StyleSheet.getLayoutStyle("Preview")}>{this.props.preview}</div>
		)
	}
}
export default Preview