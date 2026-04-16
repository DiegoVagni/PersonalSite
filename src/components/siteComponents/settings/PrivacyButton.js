import { Component } from "react";
import Locale from "../../../utils/Locale";
import PrivacyModal from "../privacy/PrivacyModal";
import TextsStyle from "../../../scss/Texts.module.scss";
import SettingsStyle from "./Settings.module.scss";

class PrivacyButton extends Component {
	constructor(props) {
		super(props);
		this.state = { show: false, cursor: "default" };
		this.show = () => this.setState({ show: true });
		this.hide = () => this.setState({ show: false });
		this.enter = () => this.setState({ cursor: "pointer" });
		this.leave = () => this.setState({ cursor: "default" });
	}

	render() {
		const cursorstyle = this.state.cursor === "pointer" ? SettingsStyle.Pointer : SettingsStyle.Default;
		return (
			<div>
				<p
					className={`${TextsStyle.NormalText} ${cursorstyle}`}
					onMouseEnter={this.enter}
					onMouseLeave={this.leave}
					onClick={this.show}
				>
					{Locale.GetMessages("privacy_title")}
				</p>
				<PrivacyModal show={this.state.show} onClose={this.hide} root={this.props.root} />
			</div>
		);
	}
}

export default PrivacyButton;
