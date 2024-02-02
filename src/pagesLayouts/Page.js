import { Component } from "react";
import StyleSheet from "../utils/StyleSheet"
class Page extends Component {
    render() {
        let bgColor = this.props.color? this.props.color : StyleSheet.Style("Page_Background");
        let divStyle = {
            backgroundColor: bgColor
        }

        return (
            <div style={{ ...divStyle,...StyleSheet.getLayoutStyle("Page")}}>
                {this.props.children}
            </div>
        );
    }
}
export default Page;
