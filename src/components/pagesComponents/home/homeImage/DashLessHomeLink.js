import { Component } from "react";
import { Link } from "react-router-dom";
import AppStyle from "../../../../scss/App.module.scss";
import TextStyle from "../../../../scss/Text.module.scss";
import HomeStyle from "./HomeImage.module.scss";
class DashLessHomeLink extends Component {
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
		

		return (
			<div className={[AppStyle.FullParent, HomeStyle.HomeContainer] }>
				<Link to={this.props.to}>
					<p className={[HomeStyle.DashLessHomeLink, TextStyle.LinkText]}>{this.props.text}</p>
				</Link>
			</div>

		);
	}
}
export default DashLessHomeLink;
