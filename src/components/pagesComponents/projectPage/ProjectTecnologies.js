import { Component } from "react"
import StyleSheet from "../../../utils/StyleSheet"
import KeyGenerator from "../../../utils/KeyGenerator"

class ProjectTecnologies extends Component {


	render() {
		
		let technologies = []
		let key = KeyGenerator.getNextKey()
		this.props.tech.forEach((tec) => {
			technologies.push((<div key={KeyGenerator.getNextKey()}>< img style={StyleSheet.getLayoutStyle("Small_Image")} key={KeyGenerator.getNextKey()} src={tec[0]} alt={tec[1]} /><p key={KeyGenerator.getNextKey()} style={StyleSheet.getLayoutStyle("Normal_Text")}>{tec[1]}</p></div>))
			key = key+3
		})
		return (
			<div style={StyleSheet.getLayoutStyle("Tech_Container")}>
					{technologies}
				</div>
			)
		}
	}



export default ProjectTecnologies