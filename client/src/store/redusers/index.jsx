import {combineReducers} from "redux";
import navReduser from "./navbar/reduser";
import Animereduser from "./body/reduser";

const rootReduser = combineReducers({
    navReduser: navReduser,
    Animereduser: Animereduser
});

export default rootReduser;