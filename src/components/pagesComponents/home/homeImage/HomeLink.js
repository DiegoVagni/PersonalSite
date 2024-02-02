import { Component } from "react";
import { Link } from "react-router-dom";
import StyleSheet from "../../../../utils/StyleSheet";
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

		let dashXSize = this.getTextWidth(this.props.text, "Optima , serif;") * (text.length - 3);
		let dashXOffset = this.props.dashXOffset;
		let dashYOffset = this.props.dashYOffset;
		let transformationString = "translate(" + (Math.cos(this.degToRad(xdeg)) * (borderRadius) + (hrWidth * xOffset)) + "%, " + (Math.sin(this.degToRad(xdeg)) * (borderRadius) + (hrWidth * yOffset)) + "% ) rotateZ(" + xdeg + "deg)";
		let stringTransformationString = "translate(" + (Math.cos(this.degToRad(xdeg)) * (borderRadius) + (dashXSize + dashXOffset)) + "%, " + (Math.sin(this.degToRad(xdeg)) * (borderRadius) + (dashYOffset) - stringheight * 0.5) + "% )"

		let hrStyle = {
			transform: transformationString,
			width: hrWidth + "px",
	
		}
		let linkStyle
		let extraLinkStyle = {
			...StyleSheet.getLayoutStyle("Home_Link"), ...{
				height: stringheight + " px",
				fontSize: fontsize + "px",
				transform: stringTransformationString,
				width: dashXSize
			}
		}
		if (this.props.up) {
			linkStyle = {
				borderTop: "4px solid " + StyleSheet.Style("Home_Links_Color"),
			}
		} else {
			linkStyle = {
				borderBottom: "4px solid " + StyleSheet.Style("Home_Links_Color"),
			}
		}

		let containerStyle = {
			height: stringheight + " px",
			fontSize: fontsize + "px",
		}
		return (
			<div style={{ ...containerStyle, ...StyleSheet.getLayoutStyle("Home_Link_Container") } } >
				<Link to={this.props.to}>
					<p style={{ ...linkStyle, ...extraLinkStyle }}>{text}</p>
				</Link>
				<hr style={{...hrStyle ,...StyleSheet.getLayoutStyle("Home_Link_Dash")}}></hr>

			</div>

		);
	}
}
export default HomeLink;
