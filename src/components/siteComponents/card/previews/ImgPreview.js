import { Component } from "react"
import Locale from "../../../../utils/Locale"
import styleSheet from "../../../../utils/StyleSheet"
import Preview from "./Preview"
class ImgPreview extends Component {

	render() {



		return (<Preview>
			
				<img style={{ ...styleSheet.getLayoutstyle("Full_Parent"), ...{borderRadius:"10px"}  }} src={this.props.src} alt={Locale.GetMessages(this.props.local)}></img>
				{this.props.children}

		</Preview>
		)
	}
}
export default ImgPreview