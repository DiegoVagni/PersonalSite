import { Component } from "react"
import Locale from "../../utils/Locale"
import StyleSheet from "../../utils/StyleSheet"
class DownloadPDFSection extends Component() {
	render() {
	
		return (
			<>
				<p style={StyleSheet.getLayoutStyle("Big_Text")}>
					{Locale.GetMessages(this.props.title)}
				</p>
				<div style={StyleSheet.getLayoutStyle("Download_Section")}>
					<div style={StyleSheet.getLayoutStyle("Flex_Column_Center_Container")}>
						{this.props.links.map((link) => { return (<a style={StyleSheet.getLayoutStyle("Download_Link")} download={link.download} href={link.to}> {Locale.GetMessages(link.local)}</a>) })}
						
					</div>

				</div>
			</>
		)
	}
}
export default DownloadPDFSection