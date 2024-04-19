import { Component } from "react"
import styleSheet from "../../../../utils/StyleSheet"
import PreviewStyle from "./Preview.module.scss"
class Preview extends Component {
	render() {

		return (
			<div className={PreviewStyle.Preview}>{this.props.children}</div>
		)
	}
}
export default Preview