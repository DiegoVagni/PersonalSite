import { Component } from "react"
import Locale from "../../../../utils/Locale"
import styleSheet from "../../../../utils/StyleSheet"
import Preview from "./Preview"
import AppStyle from "../../../../scss/App.module.scss"
import PreviewStyle from "./Preview.module.scss"
class ImgPreview extends Component {

	render() {



		return (<Preview>
			
			<img className={`${AppStyle.FullParent} ${PreviewStyle.PreviewBorders}`} src={this.props.src} alt={Locale.GetMessages(this.props.local)}></img>
				{this.props.children}

		</Preview>
		)
	}
}
export default ImgPreview