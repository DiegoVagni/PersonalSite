import { Component } from "react";
import { Link } from "react-router-dom";
import styleSheet from "../../../../utils/StyleSheet";
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
			<div style={{ ...styleSheet.getLayoutstyle("Full_Parent"), ...{ display: "flex", alignItems: "inherit", justifyContent: "center" } }} >
				<Link style={{textDecoration:"none"}} to={this.props.to}>
					<p style={{ ...styleSheet.getLayoutstyle("Dashless_Home_Link"), ...{fontSize:"2em"}}}>{this.props.text}</p>
				</Link>
			</div>

		);
	}
}
export default DashLessHomeLink;
