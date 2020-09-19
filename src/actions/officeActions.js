import { GET_OFFICES } from "./types";
import firebase from "../firebase";

export const getOffices = () => dispatch => {
    firebase.db.collection("offices").get().then((querySnapshot) => {
        let offices = [];

        querySnapshot.forEach((doc) => {
            offices.push({
                id: doc.id,
                ...doc.data()
            });

        });

        dispatch({
            type: GET_OFFICES,
            payload: offices
        });
    });
}
