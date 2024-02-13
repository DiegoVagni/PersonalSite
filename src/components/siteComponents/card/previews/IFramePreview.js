import { Component } from "react"
import styleSheet from "../../../../utils/StyleSheet"
import Preview from "./Preview"
 class IFramePreview extends Component {

	render() {
		
	
		
		return (<Preview>
			<iframe
				style={{ ...styleSheet.getLayoutstyle("Full_Parent"), ...{ borderRadius: "10px" } }}
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