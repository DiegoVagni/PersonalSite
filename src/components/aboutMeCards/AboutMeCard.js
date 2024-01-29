import { Component } from 'react'
import Polaroid from '../coolAnims/polaroid/Polaroid'
import Locale from "../../utils/Locale"


class AboutMeCard extends Component {

	render() {
		let cardStyle = {
			width: "90%",
			height:"80%",
			border: "1px solid " + this.props.StyleSheet.Style("Modal_Border"),
			backgroundColor: this.props.StyleSheet.Style("Card_Background"),
			borderRadius: "20px",
			margin: "10px",
			display: "flex",
			justifyContent: "flex-start",
			alignItems: "center",
			justifyItems: "center",
			flexDirection: "column",
			flexGrow: "1",
			boxShadow: this.props.StyleSheet.Style("Shadow") + " 0px 4px 12px",
			overflowY: "auto",
			padding: "5px"
		}
		let outerStyle = {
			minHeight: "95%",
			width: "90%",
			height: "95%",
			minWidth: "600px",
			overflowX: "hidden",
			overflowY: "hidden",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			justifyItems: "center"
		}
		let styleContainerStat = {
			display: "flex",
			flexDirection: "row",
			padding:"5px",
			overflowY: "auto",
			justifyItems:"flex-start"
		}
		
		let title = this.props.title;
	
		let textStyle = {
			font: "30px Tahoma, serif",
			margin: "3px",
			color: this.props.StyleSheet.Style("Text_Color"),
			textAlign: "justify",
			textJustify: "inter-word"
		}
		let titleStyle = {
			font: "50px Tahoma, serif",
			margin: "3px",
			color: this.props.StyleSheet.Style("Text_Color")
		}
	return(	<div style={outerStyle}>
		<div style={cardStyle}>
			<p style={titleStyle}>{Locale.GetMessages(title)}</p>
			<div style={styleContainerStat}>
				
				<p style={textStyle}>{Locale.GetMessages(this.props.title + "_Description")}</p>
			</div>
			</div>
		</div>)
	}
}
export default AboutMeCard