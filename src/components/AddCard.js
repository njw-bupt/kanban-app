// import "@babel/polyfill";
import React,{Component} from "react";

class AddCard extends Component{
    constructor(){
        super();
        this.state={
            title: "",
            description: ""
        }
    }
    handleTitleChange(e){
        this.setState({
            title: e.target.value
        })
    }
    handleDesChange(e){
        this.setState({
            description: e.target.value
        })
    }
    handleAdd(){
        if(this.props.addItem){
            let new_item = this.state;
            new_item.stage = this.props.stage;
            this.props.addItem(new_item);
        }
        this.setState({
            title:"",
            description:""
        })
        if(this.props.hiddenAddCard){
            this.props.hiddenAddCard();
        }
    }
    render(){
        return(
            <div className="add-card">
                <div className="title-input">
                    <input type="text" placeholder="Title" onChange={this.handleTitleChange.bind(this)}/>
                </div>
                <div className="des-input">
                    <textarea placeholder="Description" onChange={this.handleDesChange.bind(this)}></textarea>
                </div>
                <div className="add-button" >
                    <span onClick={this.handleAdd.bind(this)}>Add</span>
                </div>
            </div>
        )
    }
}

export default AddCard;