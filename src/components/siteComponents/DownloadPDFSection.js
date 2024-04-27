import { Component } from "react"
import Locale from "../../utils/Locale"
import styleSheet from "../../utils/StyleSheet"
import KeyGenerator from "../../utils/KeyGenerator"
import Flexes from "../../scss/Flexes.module.scss"
import Texts from "../../scss/Texts.module.scss"
import Download from "./DownloadPDF.module.scss";
class DownloadPDFSection extends Component {
	render() {
	
		return (
			<div className={Flexes.FlexColumnCenter }>
				<p className={Texts.BigText } >
					{Locale.GetMessages(this.props.title)}
				</p>
				<div className={Download.DownloadSection }>
					<div className={Flexes.FlexColumnCenter}>
						{this.props.links.map((link) => { return (<a key={KeyGenerator.getNextKey()} className={Download.DownloadLink} download={link.download} href={link.from}> {Locale.GetMessages(link.local)}</a>) })}
					</div>
				</div>
			</div>
		)
	}
}
export default DownloadPDFSection