import { Component } from "react"

import Preview from "./Preview"
 class IFramePreview extends Component {

	render() {
		
	
		
		return (<Preview>
			<iframe
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