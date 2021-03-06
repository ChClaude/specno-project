import {
    ADD_OFFICE,
    ADD_STAFF,
    EDIT_OFFICE, EDIT_STAFF,
    GET_OFFICE,
    GET_OFFICES,
    GET_STAFF,
    REMOVE_OFFICE, REMOVE_STAFF,
    SET_STAFF
} from "../actions/types";

const initialState = {
    items: [],
    item: {},
    staff: []
};

export default function (state = initialState, action) {
    let updatedItems;
    let updatedStaff;

    switch (action.type) {
        case GET_OFFICE:
            return {
                ...state,
                item: action.payload
            };
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
            updatedItems = updatedItems.filter(office => office.id !== action.payload);

            return {
                ...state,
                items: updatedItems
            }
        case EDIT_OFFICE:
            updatedItems = state.items;
            for (let i = 0; i < updatedItems.length; i++) {
                if (updatedItems[i].id === action.payload.id) {
                    updatedItems[i] = {
                      ...action.payload
                    };
                    break;
                }
            }

            return {
                ...state,
                items: updatedItems
            }
        case GET_STAFF:
            return {
                ...state,
                staff: action.payload
            }
        case SET_STAFF:
            return {
                ...state,
                staff: action.payload
            }
        case ADD_STAFF:

            updatedStaff = state.staff;
            updatedStaff.unshift(action.payload);

            console.log(updatedStaff);

            return {
                ...state,
                staff: updatedStaff
            }
        case REMOVE_STAFF:
            updatedStaff = state.staff;
            updatedStaff = updatedStaff.filter(staffPersonnel => staffPersonnel.id !== action.payload);

            return {
                ...state,
                items: updatedStaff
            }
        case EDIT_STAFF:
            updatedStaff = state.staff;
            for (let i = 0; i < updatedStaff.length; i++) {
                if (updatedStaff[i].id === action.payload.id) {
                    updatedStaff[i] = {
                        ...action.payload
                    };
                    break;
                }
            }

            return {
                ...state,
                items: updatedStaff
            }
        default:
            return state;
    }
}