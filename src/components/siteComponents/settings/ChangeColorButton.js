import { Component } from "react"
import Locale from "../../../utils/Locale"
import Modal from "../../general/Modal"
import Button from "../../general/Button"
import ColorPicker from "./ColorPicker"
import KeyGenerator from "../../../utils/KeyGenerator"
import StyleSheet from "../../../utils/StyleSheet"
class ChangeColorButton extends Component {
	constructor(props) {
		super(props)
		this.state = { show: false, values: new Map() }
		this.hideModal = this.hideModal.bind(this);
		this.showModal = this.showModal.bind(this);
		this.Apply = this.Apply.bind(this);
		this.change = this.change.bind(this);
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
		
		this.state.values.forEach((value, key) => { StyleSheet.ChangeStyle(key,value) })
		this.props.refreshApp();
	}
	render() {
		let buttonColor = StyleSheet.Style("Button_Color");
		let changeColorStyle = {
			backgroundColor: buttonColor
		}
		let textStyle = {
			color: StyleSheet.Style("Text_Color")

		}
		let pickers = []
		StyleSheet.GetStyleSheet().forEach((value, key) => {
			pickers.push(< ColorPicker StyleSheet={StyleSheet} change={this.change} target={key} value={value}/>)
		})

		return (
			<div>
				<button key={KeyGenerator.getNextKey()} style={changeColorStyle} onClick={this.showModal}><p style={textStyle}> {Locale.GetMessages("Colors_Setting")}</p></button>
				<Modal root={this.props.root} show={this.state.show} handleClose={this.hideModal} buttons={[<Button text={Locale.GetMessages("Apply")} onClick={this.Apply} />]}>
					<div>
						{ pickers}
					</div>
				</Modal>
			</div>
		)
	}
}
export default ChangeColorButton;