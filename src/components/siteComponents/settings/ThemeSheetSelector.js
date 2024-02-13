import { Component } from "react"
import styleSheet from "../../../utils/StyleSheet"
import Select from "../../general/Select";
class ThemeSheetSelector extends Component {
	
	constructor(props) {
		super(props)
		this.ChangeTheme = this.ChangeTheme.bind(this);
	}
	ChangeTheme(e) {
		let themeIndex = e.target.options.selectedIndex;

		styleSheet.loadstyle(themeIndex,this.props.refreshApp)
	}
	render() {
		

		return (
			
				<Select
					value={styleSheet.themes[styleSheet.currentIndex].value}
					onChange={this.ChangeTheme}
					values={styleSheet.themes} />

		)
	}
}
export default ThemeSheetSelector;