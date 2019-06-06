// import axios from "axios";
export const POST_ANIME = "POST_ANIME";
export const CREATE_ANIME = "CREATE_ANIME";
export const FETCH_POSTS = "FETCH_POSTS";
export const DALETE_ANIME = "DALETE_ANIME";
export const UPDATE_ANIME = "UPDATE_ANIME";


export const postanime = () => {
    return (dispatch) => {
        fetch('/api/')
            .then(res => res.json())
            .then(posts => {
                console.log(JSON.stringify(posts));
                dispatch({
                    type: FETCH_POSTS,
                    payload: posts
                });
            })
            .catch(error => {
                alert("ERROR!")
            })
    }
};

export const createanime = (data) => {
    return (dispatch) => {
        fetch('/api/create-anime', {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
              }
        })
            .then(res => res.json())
            .then(posts => {
                console.log(JSON.stringify(posts));
                dispatch({
                    type: CREATE_ANIME,
                    payload: {...data, _id: posts.insertedId}
                });
            })
            .catch(error => {
                alert("ERROR POST!", error)
            })
    }
};

export const deleteanime = (Idtitle) => {
    return async dispatch => {
        const deleteitem = await fetch(`/api/delete/${Idtitle}`, {
            method: 'DELETE',
        })
        if(!deleteitem.ok) {
            throw new Error(`Could not fetch /api/delete/${Idtitle}, received ${deleteitem.status}` )
        }
        console.log(typeof(Idtitle));
        // const body = await deleteitem.json();
        // console.log(body);

        return dispatch({
            type: DALETE_ANIME,
            payload: Idtitle
        })
    }
};

export const updateanime = (Idtitle) => {
    return async dispatch => {
        const updateitem = await fetch(`/api/update/${Idtitle}`, {
            method: 'POST',
        })
        if(!updateitem.ok) {
            throw new Error(`Could not fetch /api/update/${Idtitle}, received ${updateitem.status}` )
        }
        console.log(typeof(Idtitle));
        // const body = await deleteitem.json();
        // console.log(body);
        const payloadobj = {
            _id: Idtitle,
            Name: "Evgenii"
        }

        return dispatch({
            type: UPDATE_ANIME,
            payload: {
                "_id": Idtitle,
                "Year":3000,
                "Status":"Жопинг",
                "Name": "Crocodil"
            }
            // payload: Idtitle
        })
    }
};
// export const postanime = () => {
//     const request = axios.get(`/api/`).then(response => response.data);

//     return {
//         type: FETCH_POSTS,
//         payload: request
//     }

// };