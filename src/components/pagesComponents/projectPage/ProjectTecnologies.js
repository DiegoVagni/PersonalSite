import { Component } from "react"
import StyleSheet from "../../../utils/StyleSheet"
import KeyGenerator from "../../../utils/KeyGenerator"

class ProjectTecnologies extends Component {


	render() {

		let technologies = []

		this.props.tech.forEach((tec) => {
			technologies.push((<div style={{ ...StyleSheet.getLayoutStyle("Flex_Column_Center") }} key={KeyGenerator.getNextKey()}>< img style={{ ...StyleSheet.getLayoutStyle("Small_Image"), ...{ minWidth: "64px", minHeight: "64px" } }} key={KeyGenerator.getNextKey()} src={tec[0]} alt={tec[1]} /><p key={KeyGenerator.getNextKey()} style={StyleSheet.getLayoutStyle("Normal_Text")}>{tec[1]}</p></div>))
		})
		
		return (
			<div style={{
				...StyleSheet.getLayoutStyle("Tech_Container"), ...StyleSheet.getLayoutStyle("Flex_Row_Center"),
			}}>
				{technologies}
			</div>
		)
	}
}



export default ProjectTecnologies