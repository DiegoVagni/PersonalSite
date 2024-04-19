import { Component } from "react"
import styleSheet from "../../../../utils/StyleSheet"
import Preview from "./Preview"
import AppStyle from "../../../../scss/App.module.scss"
import PreviewStyle from "./Preview.module.scss"
 class IFramePreview extends Component {

	render() {
		
	
		
		return (<Preview>
			<iframe
				className={`${AppStyle.FullParent} ${PreviewStyle.FramePreview} ${PreviewStyle.PreviewBorders}`} 
				title={this.props.title}
		
				src={this.props.src }
			>
				{" "}
			</iframe>
		</Preview>
			
		)
	}
}
export default IFramePreview