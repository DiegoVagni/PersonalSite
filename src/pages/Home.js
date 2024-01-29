import { Component } from "react";
import HomeImage from "../components/homeImage/HomeImage"

import "../anim.scss"
class Home extends Component {
  

    render() {
        let divStyle = {
            width: "80%", height: "80%", display: "flex", justifyItems: "center", alignContent: "center", JustifyContent: "center", overflowX:"hidden",overflowY:"hidden", minHeight:"600px", minWidth:"1000px", animation:"fade 2s ease-in"
          
}

        return (
            <div style={divStyle}>

           
              <HomeImage StyleSheet={this.props.StyleSheet}></HomeImage>
               
            </div>
              );
  }
}
export default Home;
