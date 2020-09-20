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

            let updatedItems = state.items;
            updatedItems.unshift(action.payload);

            return {
                ...state,
                items: updatedItems
            }
        default:
            return state;
    }
}