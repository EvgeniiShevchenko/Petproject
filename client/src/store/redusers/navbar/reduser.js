import * as actions from "./actions";

const initialState = {
    search_string: ""
}

const navReduser = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH_ACTION":
            return {
                ...state, search_string: action.payload
            }
        }
        return state
};

export default navReduser;