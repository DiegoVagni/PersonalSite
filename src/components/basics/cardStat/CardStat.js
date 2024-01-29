import { Component } from "react"
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
			<img style={imgStyle } src={this.props.src} alt={this.props.title }>
			</img>
			<p style={textStyle }>{this.props.title +": "}</p>
			<p style={textStyle}>{this.props.value }</p>
		</div>)
	}
}

export default CardStat
