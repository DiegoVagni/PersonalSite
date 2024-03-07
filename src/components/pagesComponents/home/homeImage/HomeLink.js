import { Component } from "react";
import { Link } from "react-router-dom";
import HomeStyle from "./HomeImage.module.scss"
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

		let text = this.props.text;

		let linkstyle;
		if (this.props.up) {
			linkstyle = HomeStyle.TopBorder;
		} else {
			linkstyle = HomeStyle.BottomBorder;
		}

	
		return (
			<div className={`${HomeStyle.HomeLinkContainer} ${ this.props.topClassName }`} >
				<Link to={this.props.to}>
					<p className={`${linkstyle} ${HomeStyle.HomeLink}`}>{text}</p>
				</Link>
				<hr className={`${HomeStyle.HomeLinkDash} ${this.props.hrClassName}`}></hr>

			</div>

		);
	}
}
export default HomeLink;
