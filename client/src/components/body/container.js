import {connect} from "react-redux";
import * as actionpost from "../../store/redusers/body/actions";
import Body from "./";


const PutToProps = (state) => {
    return {
        post: state.Animereduser.post
    }
};

const PutActionsToProps = {
    actionpost: actionpost.postanime,
    createanime: actionpost.createanime,
    deleteanime: actionpost.deleteanime,
    updateanime: actionpost.updateanime
};

export default connect(PutToProps, PutActionsToProps)(Body);