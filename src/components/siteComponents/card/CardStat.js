import { Component } from "react"

import StyleSheet from "../../../utils/StyleSheet"
class CardStat extends Component {
	render() {
		let imgStyle = {
			width: "50px",
			height: "50px",
			margin:"2px"
		}
		let divStyle = {
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
			justifyItems: "center",
			margin:"5px"
		}
		let textStyle = {
			font: "20px Tahoma, serif",
			margin: "3px",
			color:this.props.StyleSheet.Style("Text_Color")
		}
		return (<div style={divStyle}>
			<img style={StyleSheet.getLayoutStyle("Small_Image")} src={this.props.src} alt={this.props.title}>
			</img>
			<p style={StyleSheet.getLayoutStyle("Normal_Text")}>{this.props.title + ": "}</p>
			<p style={StyleSheet.getLayoutStyle("Normal_Text")}>{this.props.value }</p>
		</div>)
	}
}

export default CardStat
