import { combineReducers } from "redux";
import officeReducer from "./officeReducer";

export default combineReducers({
    offices: officeReducer
});