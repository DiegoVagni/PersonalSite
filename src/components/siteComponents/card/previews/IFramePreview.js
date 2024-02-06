import { Component } from "react"
import StyleSheet from "../../../../utils/StyleSheet"
import Preview from "./Preview"
 class IFramePreview extends Component {

	render() {
		
	
		
		return (<Preview>
			<iframe
				style={{ ...StyleSheet.getLayoutStyle("Full_Parent"), ...{ borderRadius: "10px" } }}
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