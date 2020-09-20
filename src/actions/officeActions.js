import { GET_OFFICES, ADD_OFFICE } from "./types";
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
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

    dispatch({
        type: ADD_OFFICE,
        payload: office
    });
};


