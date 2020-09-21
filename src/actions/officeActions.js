import {
    ADD_OFFICE,
    ADD_STAFF,
    EDIT_OFFICE,
    GET_OFFICE,
    GET_OFFICES,
    GET_STAFF,
    REMOVE_OFFICE,
    SET_STAFF
} from "./types";
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

    // this is only for after testing to avoid reading often from firebase
    /*let offices = [
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
            id: 3,
            name: "Microsoft",
            location: "29 Wallace St, Goodwood",
            email: "info@microsoft.com",
            tellNumber: "0832561245",
            maxNumOccupants: 96,
            color: "teal"
        },
        {
            id: 4,
            name: "Speno",
            location: "1st floor, Newlink Building, 1 new Street, Paarl, 4696",
            email: "info@specno.com",
            tellNumber: "0832561245",
            maxNumOccupants: 20,
            color: "blue",
        },
        {
            id: 5,
            name: "Microsoft",
            location: "29 Wallace St, Goodwood",
            email: "info@microsoft.com",
            tellNumber: "0832561245",
            maxNumOccupants: 96,
            color: "teal"
        },
        {
            id: 6,
            name: "Speno",
            location: "1st floor, Newlink Building, 1 new Street, Paarl, 4696",
            email: "info@specno.com",
            tellNumber: "0832561245",
            maxNumOccupants: 20,
            color: "blue",
        },
    ];

    dispatch({
        type: GET_OFFICES,
        payload: offices
    });*/
}

export const getOffice = (id) => dispatch => {

    firebase.db.collection("offices").doc(id).get()
        .then(function (doc) {
            if (doc.exists) {
                // console.log("Document data:", doc.data());
                dispatch({
                    type: GET_OFFICE,
                    payload: doc.data()
                });
            } else {
                console.log("No such document!");
            }
        }).catch(function (error) {
        console.log("Error getting document:", error);
    });


    // this is only for after testing to avoid reading often from firebase
    /*let office = {
                id: 1,
                name: "Speno",
                location: "1st floor, Newlink Building, 1 new Street, Paarl, 4696",
                email: "info@specno.com",
                tellNumber: "0832561245",
                maxNumOccupants: 20,
                color: "blue",
           };

    dispatch({
        type: GET_OFFICE,
        payload: office
    });*/
};

export const getStaff = (id) => dispatch => {
    firebase.db.collection("offices").doc(id).collection("staff")
        .get()
        .then(((querySnapshot) => {
            let staff = [];

            querySnapshot.forEach((doc) => {
                staff.push({
                    id: doc.id,
                    ...doc.data()
                });
            });

            dispatch({
                type: GET_STAFF,
                payload: staff
            });
        }))
        .catch(() => console.log("Error getting the collection"));

};

export const setStaff = (staff) => dispatch => {
    dispatch({
        type: SET_STAFF,
        payload: staff
    });
};

export const addStaff = (id, staff) => dispatch => {

    firebase.db.collection("offices")
        .doc(id)
        .collection("staff")
        .add(staff)
        .then(function (docRef) {
            console.log("Staff written with ID: ", docRef.id);
            dispatch({
                type: ADD_STAFF,
                payload: staff
            });
        })
        .catch(function (error) {
            console.error("Error adding staff: ", error);
        });
};

export const addOffice = (office) => dispatch => {
    firebase.db.collection("offices").add(office)
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            dispatch({
                type: ADD_OFFICE,
                payload: office
            });
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
};

export const removeOffice = (office) => dispatch => {
    firebase.db.collection("offices").doc(office.id).delete().then(function () {
        console.log("Document successfully deleted!");
        dispatch({
            type: REMOVE_OFFICE,
            payload: office.id
        });
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });

    // only for testing
    /*console.log(office);
    dispatch({
        type: REMOVE_OFFICE,
        payload: office.id
    });*/
};

export const editOffice = (office) => dispatch => {
    firebase.db.collection("offices").doc(office.id).set(office)
        .then(function () {
            console.log("Document successfully written!");
            dispatch({
                type: EDIT_OFFICE,
                payload: office
            });
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });

    // only for testing
    /*dispatch({
        type: EDIT_OFFICE,
        payload: office
    });*/
};