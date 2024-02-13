import { Component } from "react";
import styleSheet from "../../../utils/StyleSheet"
import "../../../anim.scss"
class CompetenceContainer extends Component {
	render() {

		let containerstyle = {

			animation: styleSheet.getAnimationBool() ? "fadeInRight " + this.props.animTime + "s linear":"",
		}
		let s = {
			...containerstyle, ...styleSheet.getLayoutstyle("Competence_Container")
		}
		return (
			<div style={s}>
				<img style={{
					...styleSheet.getLayoutstyle("Small_Image"), ...{ minWidth: "64px", minHeight: "64px" }
				}
				} src={this.props.src} alt={this.props.competence} />
				{this.props.children}
			</div>
		);
	}
}
export default CompetenceContainer;
