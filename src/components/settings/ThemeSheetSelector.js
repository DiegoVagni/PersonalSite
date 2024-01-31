import { Component } from "react"
import StyleSheet from "../../utils/StyleSheet"
import Select from "../../components/general/Select";
class ThemeSheetSelector extends Component {
	
	constructor(props) {
		super(props)
		this.ChangeTheme = this.ChangeTheme.bind(this);
	}
	ChangeTheme(e) {
		let themeIndex = e.target.options.selectedIndex;

		StyleSheet.loadStyle(themeIndex,this.props.refreshApp)
	}
	render() {
		
		console.log(StyleSheet.currentIndex);
		return (
			<div>
				
				<Select
					value={StyleSheet.themes[StyleSheet.currentIndex].value}
					onChange={this.ChangeTheme}
					values={StyleSheet.themes} />
	</div>
		)
	}
}
export default ThemeSheetSelector;