import { GET_OFFICES, ADD_OFFICE } from "./types";
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

export const addOffice = (office) => dispatch => {
    // firebase.db.collection("offices").add(office)
    //     .then(function(docRef) {
    //         console.log("Document written with ID: ", docRef.id);
    //     })
    //     .catch(function(error) {
    //         console.error("Error adding document: ", error);
    //     });

    dispatch({
        type: ADD_OFFICE,
        payload: office
    });
};
