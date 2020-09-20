import {GET_OFFICES, ADD_OFFICE, REMOVE_OFFICE} from "./types";
import firebase from "../firebase";

export const getOffices = () => dispatch => {
    /*firebase.db.collection("offices").get().then((querySnapshot) => {
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
    });*/

    // TODO Remove this after testing
    let offices = [
        {
            id: 1,
            name: "Speno",
            location: "1st floor, Newlink Building, 1 new Street, Paarl, 4696",
            email: "info@specno.com",
            tellNumber: "0832561245",
            maxNumOccupants: 20,
            color: "blue",
        },
        {
            id: 2,
            name: "Microsoft",
            location: "29 Wallace St, Goodwood",
            email: "info@microsoft.com",
            tellNumber: "0832561245",
            maxNumOccupants: 96,
            color: "teal"
        }
    ];

    dispatch({
        type: GET_OFFICES,
        payload: offices
    });
}

export const addOffice = (office) => dispatch => {
    firebase.db.collection("offices").add(office)
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            dispatch({
                type: ADD_OFFICE,
                payload: office
            });
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
};


export const removeOffice = (id) => dispatch => {
    /*firebase.db.collection("offices").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
        dispatch({
            type: REMOVE_OFFICE,
            payload: id
        });
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });*/

    console.log(id);
    dispatch({
        type: REMOVE_OFFICE,
        payload: id
    });
};