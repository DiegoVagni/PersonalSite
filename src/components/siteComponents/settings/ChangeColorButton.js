import { Component } from "react"
import Locale from "../../../utils/Locale"
import Modal from "../../general/Modal/Modal"
import Button from "../../general/Button/Button"
import ColorPicker from "./ColorPicker"
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
		const key = e.target.getAttribute("data-target");
		const value = e.target.value;
		styleSheet.changeStyle(key, value);
		const map = new Map(this.state.values);
		map.set(key, value);
		this.setState({ values: map });
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
		const merged = new Map(styleSheet.styles);
		this.state.values.forEach((value, key) => merged.set(key, value));
		const styleJson = JSON.stringify(Array.from(merged.entries()));
		navigator.clipboard.writeText(styleJson);
		alert(Locale.GetMessages("CopiedStyleSheet"))
	}

	render() {
		const sheet = styleSheet.getstyleSheet();
		const pickers = [];
		if (sheet) {
			sheet.forEach((value, key) => {
				const current = this.state.values.has(key) ? this.state.values.get(key) : value;
				pickers.push(
					<ColorPicker
						key={key}
						change={this.change}
						target={key}
						value={current}
					/>
				);
			});
		}

		return (
			<div>
				<Button onClick={this.showModal} text={Locale.GetMessages("Colors_Setting")} />
				<Modal
					height={true}
					root={this.props.root}
					show={this.state.show}
					handleClose={this.hideModal}
					buttons={[
						<Button key="apply" text={Locale.GetMessages("Apply")} onClick={this.Apply} />,
						<Button key="copy" text={Locale.GetMessages("CopyStyleSheet")} onClick={this.CopyStyleSheet} />,
					]}
				>
					<div>{pickers}</div>
				</Modal>
			</div>
		)
	}
}
export default ChangeColorButton;
