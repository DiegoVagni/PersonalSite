import { Component } from "react"
import styleSheet from "../../../utils/StyleSheet"
import KeyGenerator from "../../../utils/KeyGenerator"
import FlexStyle from "../../../scss/Flexes.module.scss"
import ContainerStyle from "../../../scss/Containers.module.scss"
import TextStyle from "../../../scss/Texts.module.scss"
import ImageStyle from "../../../scss/Images.module.scss"
class ProjectTecnologies extends Component {


	render() {

		let technologies = []

		this.props.tech.forEach((tec) => {
			technologies.push((<div className={FlexStyle.FlexColumnCenter} key={KeyGenerator.getNextKey()}>< img className={ImageStyle.SmallImage} key={KeyGenerator.getNextKey()} src={tec[0]} alt={tec[1]} /><p key={KeyGenerator.getNextKey()} className={TextStyle.NormalText}>{tec[1]}</p></div>))
		})
		
		return (
			<div className={`${FlexStyle.FlexRowCenter} ${ContainerStyle.TechContainer}`}>
				{technologies}
			</div>
		)
	}
}



export default ProjectTecnologies