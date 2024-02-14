import { Component } from "react"
import Locale from "../../../utils/Locale"
import Modal from "../../general/Modal"
import Button from "../../general/Button"
import ColorPicker from "./ColorPicker"
import KeyGenerator from "../../../utils/KeyGenerator"
import styleSheet from "../../../utils/StyleSheet"
class ChangeColorButton extends Component {
	constructor(props) {
		super(props)
		this.state = { show: false, values: new Map() }
		this.hideModal = this.hideModal.bind(this);
		this.showModal = this.showModal.bind(this);
		this.Apply = this.Apply.bind(this);
		this.change = this.change.bind(this);
		this.CopyStyleSheet = this.CopyStyleSheet.bind(this)
	}
	change(e) {
	
		let map = this.state.values;
		map.set(e.target.getAttribute("target"),e.target.value)
		this.setState({values: map})
	}
	hideModal() {
		this.setState({ show: false })
	}
	showModal() {
		this.setState({ show: true })
	}
	Apply() {
		
		this.state.values.forEach((value, key) => { styleSheet.changeStyle(key, value) })
		localStorage.setItem("style", JSON.stringify(Array.from(styleSheet.styles.entries())))
		this.props.refreshApp();
	}
	CopyStyleSheet() {
		this.state.values.forEach((value, key) => { styleSheet.changeStyle(key, value) })
		let styleJson = JSON.stringify(Array.from(styleSheet.styles.entries()))
		navigator.clipboard.writeText(styleJson);
		alert(Locale.GetMessages("CopiedStyleSheet"))
	}
	render() {

	
		let pickers = []
		styleSheet.getstyleSheet().forEach((value, keys) => {
			pickers.push(< ColorPicker key={KeyGenerator.getNextKey()} styleSheet={styleSheet} change={this.change} target={keys} value={value} />)
		})

		return (
			<div key={KeyGenerator.getNextKey()}>
				<Button key={KeyGenerator.getNextKey()} style={styleSheet.getLayoutstyle("Button")} onClick={this.showModal} text={Locale.GetMessages("Colors_Setting") } />
				<Modal key={KeyGenerator.getNextKey()} root={this.props.root} show={this.state.show} handleClose={this.hideModal} buttons={[<Button key={KeyGenerator.getNextKey()} text={Locale.GetMessages("Apply")} onClick={this.Apply} />, <Button key={KeyGenerator.getNextKey()} text={Locale.GetMessages("CopyStyleSheet")} onClick={this.CopyStyleSheet} />]}>
					<div key={KeyGenerator.getNextKey()} >
						{ pickers}
					</div>
				</Modal>
			</div>
		)
	}
}
export default ChangeColorButton;