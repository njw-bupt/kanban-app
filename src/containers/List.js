// import "@babel/polyfill";
import {connect} from "react-redux";
import List from "../components/List";

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
const mapDispatchToPropss = (dispatch) => {
    return {
        handleMove: (index) => {
            dispatch({type:"MOVE",index:index})
        },
        handleDelete: (index) => {
            dispatch({type:"DELETE",index:index})
        },
        addItem: (item) => {
            dispatch({type:"ADD",item:item})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToPropss)(List)