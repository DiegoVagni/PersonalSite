import { Component } from "react"
import Locale from "../../../../utils/Locale"
import StyleSheet from "../../../../utils/StyleSheet"
import Tesi from "../../../../resources/images/tesi_preview.png"
import Preview from "./Preview"
 class ImgPreview extends Component {

	render() {
		
	
		
		return (<Preview>
			<img style={StyleSheet.getLayoutStyle("Preview_Image")} src={Tesi} alt={Locale.GetMessages("Tesi")}></img>
			{this.props.children}
	
		</Preview>
		)
	}
}
export default ImgPreview