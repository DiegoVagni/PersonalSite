import { Component } from "react"
import Locale from "../../utils/Locale"
import KeyGenerator from "../../utils/KeyGenerator"

class ColorPicker extends Component {
	
	render() {
		let style = {
			width: "100%",
			height: "auto",
			maxHeight: "50px",
			minHeight: "20px",
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",


		}
		let pStyle = {
			font: "15px Tahoma, serif",
			margin: "3px",
			color: this.props.StyleSheet.Style("Text_Color"),
			textAlign: "start",

		}
		return (
			<div key={KeyGenerator.getNextKey()} style={style}>
				<p style={pStyle}>{Locale.GetMessages(this.props.target)}</p>
				<input onChange={this.props.change} type="color" defaultValue={this.props.value} target={ this.props.target} />
			</div>
		)
	}
}
export default ColorPicker