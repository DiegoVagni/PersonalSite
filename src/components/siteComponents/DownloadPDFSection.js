import { Component } from "react"
import Locale from "../../utils/Locale"
import styleSheet from "../../utils/StyleSheet"
import KeyGenerator from "../../utils/KeyGenerator"
class DownloadPDFSection extends Component {
	render() {
	
		return (
			<>
				<p style={styleSheet.getLayoutstyle("Big_Text")}>
					{Locale.GetMessages(this.props.title)}
				</p>
				<div style={styleSheet.getLayoutstyle("Download_Section")}>
					<div style={styleSheet.getLayoutstyle("Flex_Column_Center_Container")}>
						{this.props.links.map((link) => { return (<a key={KeyGenerator.getNextKey()} style={styleSheet.getLayoutstyle("Download_Link")} download={link.download} href={link.to}> {Locale.GetMessages(link.local)}</a>) })}
					</div>
				</div>
			</>
		)
	}
}
export default DownloadPDFSection