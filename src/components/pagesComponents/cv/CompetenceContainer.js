import { Component } from "react";
import styleSheet from "../../../utils/StyleSheet"
import AnimStyle from "../../../scss/Anim.module.scss"
import ContainerStyle from "../../../scss/Containers.module.scss"
import ImagesStyle from "../../../scss/Images.module.scss"
class CompetenceContainer extends Component {
	render() {

		return (
			<div className={[ContainerStyle.CompetenceContainer, styleSheet.getAnimationBool() ? AnimStyle.FadeInRight:""]}>
				<img className={ImagesStyle.SmallImage} src={this.props.src} alt={this.props.competence} />
				{this.props.children}
			</div>
		);
	}
}
export default CompetenceContainer;
