// import "@babel/polyfill";
import React,{Component} from "react";
import PropTypes from "prop-types";

class Card extends Component{
    // static propTypes = {
    //     index: PropTypes.number,
    //     title: PropTypes.string,
    //     description: PropTypes.string
    // }
    handleMove(){
        if(this.props.handleMove){
            this.props.handleMove(this.props.index);
        }
    }
    handleDelete(){
        if(this.props.handleDelete){
            this.props.handleDelete(this.props.index);
        }
    }
    render(){
        return (
            <div className="card-item">
                <p className="card-item-title">{this.props.title}</p>
                <p className="card-item-description">{this.props.description}</p>
                <div>
                    {
                        this.props.stage==="Done"?
                        null
                        :<div className="move-button" onClick={this.handleMove.bind(this)}>move to next stage</div>
                    }                
                    <div className="delete-button" onClick={this.handleDelete.bind(this)}>delete</div>
                </div>
            </div>
        )
    }
}

export default Card;