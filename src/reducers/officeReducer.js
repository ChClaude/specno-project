import {ADD_OFFICE, GET_OFFICES} from "../actions/types";

const initialState = {
    items: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_OFFICES:
            return {
                ...state,
                items: action.payload
            };
        case ADD_OFFICE:
            return {
                ...state,
                items: state.items.unshift(action.payload)
            }
        default:
            return state;
    }
}