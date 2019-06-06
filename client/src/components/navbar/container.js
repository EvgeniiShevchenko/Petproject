import {connect} from "react-redux";
import NavBar from "./";
import * as navActions from "../../store/redusers/navbar/actions";


const PutStateToProps = (state) => {
    return {
        searchstring: state.navReduser.search_string
    }
};

// const PutActionToProps = (dispatch) => {
//     return {
//         searchactions: (event) => navActions.searchaction(event)
//     }
// };

const PutActionToProps = {
    searchactions: navActions.searchaction
};

export default connect(PutStateToProps, PutActionToProps)(NavBar);
