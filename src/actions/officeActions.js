import { GET_OFFICES } from "./types";

export const getOffices = () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(offices => {
            dispatch({
                type: GET_OFFICES,
                payload: offices
            });
        });
}
