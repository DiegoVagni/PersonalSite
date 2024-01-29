import { Component } from "react"
import "../../anim.scss"
class ContactInfo extends Component {
	render() {
		let imgStyle = {
			width: "50px",
			height: "50px"
		}
		let divStyle = {
	
			display: "flex",
			alignContent: "center",
			justifyContent: "center",
			alignItems: "center",
			animation:"fade 1s ease-in"
		}
		let textStyle = {
			font: "20px Tahoma, serif",
			margin: "3px",
			color: this.props.StyleSheet.Style("Text_Color"),

		}
		return (
			<div style={divStyle}>
				<img style={imgStyle} src={this.props.src} alt={this.props.title} />
				<p style={textStyle}>{this.props.social}:</p>
				{this.props.children }
			</div>
			)
	}
}
export default ContactInfo