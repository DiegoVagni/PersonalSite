import { Component } from "react";
class Page extends Component {
    render() {
        let bgColor = this.props.color? this.props.color : this.props.StyleSheet.Style("Page_Background");
        let divStyle = {
            
            height: "95%",
           width:"100%",
            display: "flex",
            
            backgroundColor: bgColor,
         overflow:"hidden"
        }

        return (
            <div style={divStyle}>
                {this.props.children}
            </div>
        );
    }
}
export default Page;
