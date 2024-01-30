import { Component } from "react"

import Select from "../../components/general/select/Select";
class ThemeSheetSelector extends Component {
	Themes = [{ name: "Light", value: "Light.json" }, { name: "Dark", value: "Dark.json" }]
	constructor(props) {
		super(props)
		this.ChangeTheme = this.ChangeTheme.bind(this);

	}
	ChangeTheme(e) {
		let theme = e.target.value;
		fetch('Themes/' + theme, {
			headers: {
				'Accept': 'application/json'
			},
			method: 'GET'
		}).then((data) => { return data.json() }).then((json) => { this.props.StyleSheet.ChangeTheme(json); }).then(() => this.props.refreshApp());
	}
	render() {
		

		return (
			<div>
				
				<Select
					defaultValue={this.Themes[0]}
					onChange={this.ChangeTheme}
					values={ this.Themes} />
	</div>
		)
	}
}
export default ThemeSheetSelector;