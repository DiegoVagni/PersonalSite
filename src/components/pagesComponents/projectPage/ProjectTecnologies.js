import { Component } from "react"
import styleSheet from "../../../utils/StyleSheet"
import KeyGenerator from "../../../utils/KeyGenerator"

class ProjectTecnologies extends Component {


	render() {

		let technologies = []

		this.props.tech.forEach((tec) => {
			technologies.push((<div style={{ ...styleSheet.getLayoutstyle("Flex_Column_Center") }} key={KeyGenerator.getNextKey()}>< img style={{ ...styleSheet.getLayoutstyle("Small_Image"), ...{ minWidth: "64px", minHeight: "64px" } }} key={KeyGenerator.getNextKey()} src={tec[0]} alt={tec[1]} /><p key={KeyGenerator.getNextKey()} style={styleSheet.getLayoutstyle("Normal_Text")}>{tec[1]}</p></div>))
		})
		
		return (
			<div style={{
				...styleSheet.getLayoutstyle("Tech_Container"), ...styleSheet.getLayoutstyle("Flex_Row_Center"),
			}}>
				{technologies}
			</div>
		)
	}
}



export default ProjectTecnologies