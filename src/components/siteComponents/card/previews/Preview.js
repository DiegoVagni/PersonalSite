import { Component } from "react"
import styleSheet from "../../../../utils/StyleSheet"
class Preview extends Component {
	render() {

		return (
			<div style={styleSheet.getLayoutstyle("Preview")}>{this.props.children}</div>
		)
	}
}
export default Preview