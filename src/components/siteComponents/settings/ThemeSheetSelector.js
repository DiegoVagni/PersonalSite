import { Component } from "react"
import StyleSheet from "../../../utils/StyleSheet"
import Select from "../../general/Select/Select";
class ThemeSheetSelector extends Component {
	
	constructor(props) {
		super(props)
		this.ChangeTheme = this.ChangeTheme.bind(this);
	}
	ChangeTheme(e) {
		let themeIndex = e.target.options.selectedIndex;

		StyleSheet.loadstyle(themeIndex,this.props.refreshApp)
	}
	render() {
		let index = localStorage["ThemeIndex"] == null ? 0 : localStorage["ThemeIndex"]

		return (
			
				<Select
					value={StyleSheet.themes[index].value}
					onChange={this.ChangeTheme}
					values={StyleSheet.themes} />

		)
	}
}
export default ThemeSheetSelector;