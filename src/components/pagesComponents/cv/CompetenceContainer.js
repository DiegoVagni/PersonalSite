import { Component } from "react";
import StyleSheet from "../../../utils/StyleSheet"
import "../../../anim.scss"
class CompetenceContainer extends Component {
	render() {

		let containerStyle = {

			animation: "fadeInRight " + this.props.animTime + "s linear",
		}
		let s = {
			...containerStyle, ...StyleSheet.getLayoutStyle("Competence_Container")
		}
		return (
			<div style={s}>
				<img style={{
					...StyleSheet.getLayoutStyle("Small_Image"), ...{ minWidth: "64px", minHeight: "64px" }
				}
				} src={this.props.src} alt={this.props.competence} />
				{this.props.children}
			</div>
		);
	}
}
export default CompetenceContainer;
