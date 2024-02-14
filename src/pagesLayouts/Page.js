import { Component } from "react";
import styleSheet from "../utils/StyleSheet"
class Page extends Component {
    render() {
        let bgColor = this.props.color? this.props.color : styleSheet.style("Page_Background");
        let divstyle = {
            backgroundColor: bgColor,
            
        }

        return (
            <div style={{ ...divstyle,...styleSheet.getLayoutstyle("Page")}}>
                {this.props.children}
            </div>
        );
    }
}
export default Page;
