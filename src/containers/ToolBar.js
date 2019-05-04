// import "@babel/polyfill";
import {connect} from "react-redux";
import ToolBar from "../components/ToolBar";

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeThemeColor: (new_color) => {
            dispatch({type:"CHANGE_COLOR",color:new_color})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ToolBar)