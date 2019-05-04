// import "@babel/polyfill";
import React,{Component} from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import AddCard from "./AddCard";

class List extends Component{
    // static propTypes = {
    //     stage: PropTypes.string.isRequired,
    //     items: PropTypes.array
    // }
    constructor(){
        super();
        this.state={
            show_add: false
        }
    }
    handleShowAdd(){
        this.setState({
            show_add:true
        })
    }
    hiddenAddCard(){
        this.setState({
            show_add:false
        })
    }
    render(){
        return (
            <div className="list-item">
                <div className="list-item-title-zone">
                    <p className="list-item-title list-item-title-char">{this.props.stage}</p>
                    <p className="list-item-title list-item-title-add" onClick={this.handleShowAdd.bind(this)}>+</p>
                </div>
                {
                    this.props.items.map((item,index)=>{
                        if(item.stage===this.props.stage){
                            return <Card key={index} 
                                         index={index} 
                                         title={item.title}     
                                         description={item.description} 
                                         stage={item.stage}
                                         handleMove={this.props.handleMove}
                                         handleDelete={this.props.handleDelete}/>
                        }                 
                    })
                }
                {
                    this.state.show_add?<AddCard stage={this.props.stage} 
                                                addItem={this.props.addItem}
                                                hiddenAddCard={this.hiddenAddCard.bind(this)}/>:null
                }
            </div>
        )
    }
}

export default List;