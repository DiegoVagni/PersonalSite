import { Component } from "react";
import Locale from "../../../utils/Locale";
import Select from "../../general/Select/Select";


class LanguageSelector extends Component {
    render() {
 
        return (<Select
            value={Locale.defaultLocale}
            onChange={this.props.languageChange}
            values={Locale.localeList} />
        )
	}
}
export default LanguageSelector

