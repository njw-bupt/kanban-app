import React,{Component} from "react";
import {connect} from "react-redux";
import List from "./List";
import ToolBar from "../containers/ToolBar";
import kanbanIcon from "../../imgs/kanban-icon.png";
import {getData} from "../util/GetData";

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        initState: (init_data) => {
            dispatch({type:"INIT_STATE",data:init_data});
        }
    }
}
class App extends Component{
    componentDidMount(){
        getData("http://kanbanapi.pro-react.com/cards").then((data)=>{
            let recv_data = JSON.parse(data);
            let init_data = recv_data.map((item)=>{
                let obj = {};
                obj.title = item.title;
                obj.description = item.description;
                obj.stage = "Todo";
                return obj;
            });
            this.props.initState(init_data);
        }).catch((e)=>{
            console.log(e)
        })
    }
    render(){
        return (
            <div className="app-wrapper" style={{background:this.props.themeColor}}>
                <header><img src={kanbanIcon}/><span className="header-title-text">Kanban</span></header>
                <ToolBar />
                <List stage="Todo" />
                <List stage="Doing" />
                <List stage="Done" />
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);