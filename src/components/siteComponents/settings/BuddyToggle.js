import { Component } from "react";

const STORAGE_KEY = "buddyDismissed";

class BuddyToggle extends Component {
	constructor(props) {
		super(props);
		this.state = { enabled: localStorage.getItem(STORAGE_KEY) !== "true" };
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		if (this.state.enabled) {
			localStorage.setItem(STORAGE_KEY, "true");
			window.dispatchEvent(new Event("buddy:dismiss"));
			this.setState({ enabled: false });
		} else {
			localStorage.removeItem(STORAGE_KEY);
			window.dispatchEvent(new Event("buddy:summon"));
			this.setState({ enabled: true });
		}
	}

	render() {
		return <input type="checkbox" checked={this.state.enabled} onChange={this.toggle} />;
	}
}

export default BuddyToggle;
