import { Component } from "react";
import { Link } from "react-router-dom";
import styleSheet from "../../../../utils/StyleSheet";
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
		let dashXOffset = this.props.dashXOffset;
		let dashYOffset = this.props.dashYOffset;
		let transformationString = "translate(" + (Math.cos(this.degToRad(xdeg)) * (borderRadius) + (hrWidth * xOffset)) + "%, " + (Math.sin(this.degToRad(xdeg)) * (borderRadius) + (hrWidth * yOffset)) + "% ) rotateZ(" + xdeg + "deg)";
		let stringTransformationString = "translate(" + (Math.cos(this.degToRad(xdeg)) * (borderRadius) + ( dashXOffset)) + "%, " + (Math.sin(this.degToRad(xdeg)) * (borderRadius) + (dashYOffset) - stringheight * 0.5) + "% )"

		let hrstyle = {
			transform: transformationString,
			width: hrWidth + "px",
	
		}
		let linkstyle
		let extraLinkstyle = {
			...styleSheet.getLayoutstyle("Home_Link"), ...{
				height: stringheight + " px",
				fontSize: fontsize + "px",
				transform: stringTransformationString,

				whiteSpace: "nowrap"
			}
		}
		if (this.props.up) {
			linkstyle = {
				borderTop: "4px solid " + styleSheet.style("Home_Links_Color"),
			}
		} else {
			linkstyle = {
				borderBottom: "4px solid " + styleSheet.style("Home_Links_Color"),
			}
		}

		let containerstyle = {
			height: stringheight + " px",
			fontSize: fontsize + "px",
		}
		return (
			<div style={{ ...containerstyle, ...styleSheet.getLayoutstyle("Home_Link_Container") } } >
				<Link to={this.props.to}>
					<p style={{ ...linkstyle, ...extraLinkstyle }}>{text}</p>
				</Link>
				<hr style={{...hrstyle ,...styleSheet.getLayoutstyle("Home_Link_Dash")}}></hr>

			</div>

		);
	}
}
export default HomeLink;
