import { Component } from "react"
import Locale from "../../utils/Locale"
import Tesi from "../../resources/images/tesi_preview.png"
class TesiPreview extends Component {

	render() {
		let outerStyle = {
			width: "100%", height: "100%",
			borderRadius: "10%"
		}
		let imgStyle = {
			width: "100%", height: "80%",
			borderRadius: "10%"
		}
		let downloadStyle = {
			font: "10px Tahoma, serif",
			margin: "3px",
			color: this.props.StyleSheet.Style("Text_Color"),
			textDecoration: "none"
		}
		let titleStyle = {
			font: "15px Tahoma, serif",
			margin: "3px",
			color: this.props.StyleSheet.Style("Text_Color")
		}
		let containersStyle = {
			width: "100%",
			display: "flex",
			justifyContent: "flex-start",
			flexDirection: "column",
		
		}
		let sectionStyle = {
		
			width: "100%",
	
			display: "flex",
			flexDirection: "row",
			margin: "15px"

		}
		return (<div style={outerStyle}>
			<img style={imgStyle} src={Tesi} alt={Locale.GetMessages("Tesi")}></img>
			<p style={titleStyle}>
				{Locale.GetMessages("DownloadTesi")}
			</p>
			<div style={sectionStyle}>
				<div style={containersStyle}>
					<a style={downloadStyle}
						//this will save the file as "your_cv.pdf"
						download="Diego_Vagni_TESI_ITA.pdf"
						//put the path of your pdf file
						href="/public/tesi.pdf"
					>
						{Locale.GetMessages("Italian")}
					</a>
					<a style={downloadStyle}
						//this will save the file as "your_cv.pdf"
						download="Diego_Vagni_POSTER_TESI_ITA.pdf"
						//put the path of your pdf file
						href="/public/poster_tesi.pdf"
					>
						{Locale.GetMessages("Poster_Italian")}
					</a>
				</div>

			</div>
		</div>
		)
	}
}
export default TesiPreview