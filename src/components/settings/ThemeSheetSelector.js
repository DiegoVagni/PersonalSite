import { Component } from "react"

import Select from "../../components/basics/select/Select";
import Option from "../../components/basics/select/Option";
class ThemeSheetSelector extends Component {
	Themes = ["Light", "Dark"]
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
					onChange={this.ChangeTheme}>
					{this.Themes.map((theme, index) => (
						<Option key={index} yek={index} value={this.Themes[index] + ".json"}>
							{this.Themes[index]}
					</Option>
				))}
			</Select>
			</div>
		)
	}
}
export default ThemeSheetSelector;