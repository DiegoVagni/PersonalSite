import { Component } from "react"
import Locale from "../../../../utils/Locale"
import StyleSheet from "../../../../utils/StyleSheet"
import Preview from "./Preview"
 class ImgPreview extends Component {

	render() {
		
	
		
		return (<Preview>
			<img style={StyleSheet.getLayoutStyle("Preview_Image")} src={this.props.src } alt={Locale.GetMessages(this.props.local)}></img>
			{this.props.children}
	
		</Preview>
		)
	}
}
export default ImgPreview