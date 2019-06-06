export const SEARCH_ACTION = "SEARCH_ACTION";

export const searchaction = (action) => {
    console.log(action.target.value)
    return {
        type: SEARCH_ACTION,
        payload: action.target.value
    }
};

