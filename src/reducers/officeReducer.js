import {ADD_OFFICE, GET_OFFICES, REMOVE_OFFICE} from "../actions/types";

const initialState = {
    items: [],
};

export default function (state = initialState, action) {
    let updatedItems;

    switch (action.type) {
        case GET_OFFICES:
            return {
                ...state,
                items: action.payload
            };
        case ADD_OFFICE:

            updatedItems = state.items;
            updatedItems.unshift(action.payload);

            return {
                ...state,
                items: updatedItems
            }
        case REMOVE_OFFICE:

            updatedItems = state.items;
            updatedItems.filter(office => office.id !== action.payload);

            return {
                ...state,
                items: updatedItems
            }
        default:
            return state;
    }
}