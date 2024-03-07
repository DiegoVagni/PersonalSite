import { Component } from "react";
import AppStyle from "../scss/App.module.scss"
class Page extends Component {
    render() {
       
        return (
            <div className={AppStyle.Page }>
                {this.props.children}
            </div>
        );
    }
}
export default Page;
