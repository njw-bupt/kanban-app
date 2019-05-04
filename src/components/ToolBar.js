// import "@babel/polyfill";
import React,{Component} from "react";
import PropTypes from "prop-types";
import colorImg from "../../imgs/color-icon.png";

class ToolBar extends Component{
    constructor(){
        super();
        this.state = {
            time: (new Date()).toLocaleDateString(),
            show_color_list: false
        }
    }
    handleColorList(){
         let show = this.state.show_color_list?false:true;
         this.setState({
             show_color_list:show
         })
    }
    handleColorChange(e){
        let target_color = e.target.getAttribute("colorname");
        if(this.props.changeThemeColor){
            this.props.changeThemeColor(target_color);
        }
    }
    render(){
        return (
            <div className="toolbar-wrapper">
                <div className="toolbar-item toolbar-item-title">Tutorial board</div>
                <div className="toolbar-item toolbar-item-color">
                    <img className="color-icon" src={colorImg}/>
                    theme color &nbsp;
                    <div className="color-list-button" onClick={this.handleColorList.bind(this)}>
                    &#9662;
                        {
                            this.state.show_color_list?
                            (
                            <div className="color-list" onClick={this.handleColorChange.bind(this)}>
                                <div className="color-option-1 color-option" colorname="#032"></div>
                                <div className="color-option-2 color-option" colorname="#06a"></div>
                                <div className="color-option-3 color-option" colorname="#831"></div>
                            </div>
                            ):null
                        }                       
                    </div>             
                </div>
                <div className="toolbar-item toolbar-item-time">{this.state.time}</div>
            </div>
        )
    }
}

export default ToolBar;