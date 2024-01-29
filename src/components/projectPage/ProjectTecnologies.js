import { Component } from "react"
class ProjectTecnologies extends Component {


	render() {
		let imgStyle = {
			width: "50px",
			height: "50px"
		}
		let divStyle = {
			display: "flex",
			flexDirection: "row",
			justifyItems:"center",
			justifyContent: "center",
			alignItems:"center",
			margin:"10px"
		}
		let textStyle = {
			font: "20px Tahoma, serif",
			margin: "3px",
			color: this.props.StyleSheet.Style("Text_Color")
		}
		let technologies = []
		let key=13232
		this.props.tech.forEach((tec) => {
			technologies.push((<div key={key + 2}>< img style={imgStyle} key={key} src={tec[0]} alt={tec[1]} /><p key={key+1} style={textStyle}>{tec[1]}</p></div>))
			key = key+3
		})
			return (
				<div style={divStyle }>
					{technologies}
				</div>
			)
		}
	}



export default ProjectTecnologies