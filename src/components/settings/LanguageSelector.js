import { Component } from "react";
import Locale from "../../utils/Locale";
import Select from "../../components/basics/select/Select";
import Option from "../../components/basics/select/Option";
class LanguageSelector extends Component {
    render() {
 
        return (<Select
            defaultValue={Locale.defaultLocale}
            onChange={this.props.languageChange}>
            {Locale.localeList.map((locale, index) => (
                <Option key={index} yek={index} value={locale.code}>
                    {locale.name}
                </Option>
            ))}
        </Select>)
	}
}
export default LanguageSelector

