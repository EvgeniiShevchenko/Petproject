const defaultState = {
    post: []
};

const Animereduser = (state = defaultState, action) => {
    switch (action.type) {
        case "FETCH_POSTS":
            return {post: action.payload}
        case "CREATE_ANIME":
            // alert(JSON.stringify(action.payload));
            return {...state, post: [action.payload, ...state.post] };
        case "DALETE_ANIME":
            // alert("hello")
            // alert(JSON.stringify(action.payload));
            // const animefilter = state.post.filter(filter => {console.log(typeof(filter._id)); console.log(typeof(action.payload)); return filter._id !== action.payload});
            // return animefilter
            return Object.assign({}, state, {
                post: [...state.post.filter(item => item._id !== action.payload)],
            });
            case "UPDATE_ANIME":
            // // alert(JSON.stringify(action.payload));
            // console.log(action.payload);
            // const data = action.payload;
            // const updateanime = state.post.map(map => {
            //     if(map._id === action.payload._id){
            //         alert("I'm there");
            //         return {...map, Name: Name.concat(action.payload.Name)}
            //         // return []
            //     }
            //     return map;
            // });
            // alert(JSON.stringify(updateanime));
            // return state.post.concat(action.payload);
        //     this.setState(({entries}) => ({entries: entries.map(
        //         entry => 
        //             entry._id === userid
        //                 ? {...entry, updatestate: true }
        //                 : entry
        //     )
        // }))
        // };
            // return {
            //     ...state,
            //     post:[...state.post, action.payload]
            //   }
            // return state.post.map((item, index) => {
            //     if (item._id !== action.payload._id) {
            //         alert(item._id === action.payload._id);
            //       // This isn't the item we care about - keep it as-is
            //       return item
            //     }
            //     alert("cooo");
            //     // Otherwise, this is the one we want - return an updated value
            //     return {
            //       ...item,
            //       ...action.payload
            //     }
            //   })
            return Object.assign({}, state, {
                post: state.post.map(todo => {
                  if (todo._id !== action.payload._id) {
                    return todo
                  }
        
                  return Object.assign({}, todo, {
                    ...action.payload
                  })
                })
              })
            // return {
            //     ...state, post: []
            // }
    }
    return state
};

export default Animereduser;