import { Component } from "react"
import FlexStyle from "../../../scss/Flexes.module.scss"
import ContainerStyle from "../../../scss/Containers.module.scss"
import TextStyle from "../../../scss/Texts.module.scss"
import ImageStyle from "../../../scss/Images.module.scss"
import UtilStyle from "../../../scss/Utils.module.scss"
class ProjectTecnologies extends Component {


	render() {
		return (
			<div className={`${FlexStyle.FlexRowCenter}  ${FlexStyle.Wrap} ${ContainerStyle.TechContainer}`}>
				{this.props.tech.map((tec) => (
					<div className={`${FlexStyle.FlexColumnCenter} ${UtilStyle.SmallMargin}`} key={tec[1]}>
						<img className={ImageStyle.SmallImage} src={tec[0]} alt={tec[1]} />
						<p className={TextStyle.NormalText}>{tec[1]}</p>
					</div>
				))}
			</div>
		)
	}
}



export default ProjectTecnologies
