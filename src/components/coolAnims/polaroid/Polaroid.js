import { Component } from "react";

class Polaroid extends Component {

	render() {
		let outerDivStyle = {
			width: "20%",
			height: "30%",
			minWidth: "250px",
			minHeight: "280px",
			backgroundColor: "white",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			alignContent: "center",
			justifyContent:"center",
			border: "1px solid black",
			borderRadius:"10px",
			margin: "5px",
			padding: "10px",
			boxShadow: "-5px -5px 20px 1px " + this.props.StyleSheet.Style("Shadows"),
			transform: "rotateZ(" + (this.props.rot ? this.props.rot : 0) + "deg)",
		} 
		let imgStyle = {
			width: "80%",
			height: "60%",
			minWidth: "220px",
			minHeight: "250px",
			border: "2px solid black",
			margin: "10px",
			marginBottom: "20%",
			
		}

		let pinstyle = {
			
			width: "30px",
			height: "30px",
			backgroundColor: "#040a52",
			borderRadius: "100%",
			border: "2px solid black",
			margin: "1px",
		}
		let intpinstyle = {
			position: "relative",
			left: "10%",
			top:"5px",
			minHeight: "12px",
			minWidth: "12px",
			width: "20px",
			height: "20px",
			backgroundColor: "#0719e0",
			borderRadius: "100%",
			border: "2px solid black",
			margin:"1px"
		}
		return (
			<div style={outerDivStyle}>
				<div style={pinstyle}>
					<div style={intpinstyle}>
					</div>
				</div>
				<img style={ imgStyle} src={this.props.src} alt={ this.props.alt}>
				</img>
			</div>
		)
	}

}
export default Polaroid