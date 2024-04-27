import { Component } from "react";
import AppStyle from "../scss/App.module.scss"
import AnimStyle from "../scss/Anim.module.scss"
import StyleSheet from "../utils/StyleSheet"
class Page extends Component {
    render() {
       
        return (
            <div className={`${AppStyle.Page} ${StyleSheet.getAnimationBool() ? AnimStyle.FadeAnim2Sec : ""}` }>
                {this.props.children}
            </div>
        );
    }
}
export default Page;
