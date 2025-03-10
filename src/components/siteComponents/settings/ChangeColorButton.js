import { Component } from "react"
import Locale from "../../../utils/Locale"
import Modal from "../../general/Modal/Modal"
import Button from "../../general/Button/Button"
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
		this.pickers = [];

		/*styleSheet.getstyleSheet().forEach((value, keys) => {
			this.pickers.push(< ColorPicker key={KeyGenerator.getNextKey()} styleSheet={styleSheet} change={this.change} target={keys} value={this.state.values.get(keys) == null ? value : this.state.values.get(keys)} />)
		})*/	
	}
	
	change(e) {

		let map = new Map(this.state.values);
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
		this.pickers = []
		styleSheet.getstyleSheet().forEach((value, keys) => {
			this.pickers.push(< ColorPicker key={KeyGenerator.getNextKey()} styleSheet={styleSheet} change={this.change} target={keys} value={this.state.values.get(keys) == null ? value : this.state.values.get(keys)} />)
		})	
	


		return (
			<div key={KeyGenerator.getNextKey()}>
				<Button key={KeyGenerator.getNextKey()} onClick={this.showModal} text={Locale.GetMessages("Colors_Setting") } />
				<Modal height={true } key={KeyGenerator.getNextKey()} root={this.props.root} show={this.state.show} handleClose={this.hideModal} buttons={[<Button key={KeyGenerator.getNextKey()} text={Locale.GetMessages("Apply")} onClick={this.Apply} />, <Button key={KeyGenerator.getNextKey()} text={Locale.GetMessages("CopyStyleSheet")} onClick={this.CopyStyleSheet} />]}>
					<div key={KeyGenerator.getNextKey()} >
						{ this.pickers}
					</div>
				</Modal>
			</div>
		)
	}
}
export default ChangeColorButton;