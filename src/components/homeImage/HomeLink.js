import { Component } from "react";
import { Link } from "react-router-dom";
class HomeLink extends Component {
	degToRad(deg) {
		return deg * (Math.PI / 180);
	}
	getTextWidth(text, font) {
		const canvas = document.createElement('canvas');
		const context = canvas.getContext('2d');

		context.font = font || getComputedStyle(document.body).font;

		return context.measureText(text).width;
	}
	render() {
		let borderRadius = this.props.borderRadius;
		let xdeg = this.props.xdeg;

		let xOffset = this.props.xOffset;
		let yOffset = this.props.yOffset;

		let hrWidth = 100;
		let stringheight = 55;
		let fontsize = 50
		let text = this.props.text;
		if (text.length < 8) {
			text +="   "
		}
		let dashXSize = this.getTextWidth(this.props.text, "Optima , serif;") * (text.length - 3);
		let dashXOffset = this.props.dashXOffset;
		let dashYOffset = this.props.dashYOffset;
		let transformationString = "translate(" + (Math.cos(this.degToRad(xdeg)) * (borderRadius) + (hrWidth * xOffset)) + "px, " + (Math.sin(this.degToRad(xdeg)) * (borderRadius) + (hrWidth * yOffset)) + "px ) rotateZ(" + xdeg + "deg)";
		let stringTransformationString = "translate(" + (Math.cos(this.degToRad(xdeg)) * (borderRadius) + (dashXSize + dashXOffset)) + "px, " + (Math.sin(this.degToRad(xdeg)) * (borderRadius) + (dashYOffset) - stringheight * 0.5) + "px )"
	
		let hrStyle = {
			border: "2px solid " + this.props.color,
			width: hrWidth + "px",
			height: "0 px",
			backgroundColor: this.props.color,
			transform: transformationString,
			position: "absolute"
		}
		let linkStyle
		if (this.props.up) {
			linkStyle = {
				height: stringheight + " px",
				fontSize: fontsize + "px",
				transform: stringTransformationString,
				textDecoration: "none",
				borderTop: "4px solid " + this.props.color,

				color: this.props.color,
				position: "absolute",
				fontFamily: "Optima , serif",
				margin: "0px",
				padding: "0px",
				width: dashXSize
			}
		} else {
			linkStyle = {
				height: stringheight + " px",
				fontSize: fontsize + "px",
				transform: stringTransformationString,
				textDecoration: "none",
				borderBottom: "4px solid " + this.props.color,
				color: this.props.color,
				position: "absolute",
				fontFamily: " Optima, serif",
				margin: "0px",
				padding: "0px",
				width: dashXSize
			}
		}

		let divStyle = {
			width: "auto",
			height: stringheight + " px",
			fontSize: fontsize + "px",
			textDecoration: "underline",
			color: this.props.color,
			position: "absolute",
		}
		return (
			<div style={divStyle}>
				<Link to={this.props.to}>
					<p style={linkStyle}>{text}</p>
				</Link>
				<hr style={hrStyle}></hr>

			</div>

		);
	}
}
export default HomeLink;
