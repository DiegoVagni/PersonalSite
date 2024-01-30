import { Component } from "react";
import Locale from "../../utils/Locale";
import Select from "../../components/general/Select";


class LanguageSelector extends Component {
    render() {
 
        return (<Select
            defaultValue={Locale.defaultLocale}
            onChange={this.props.languageChange}
            values={Locale.localeList} />
        )
	}
}
export default LanguageSelector

