import {
    ADD_OFFICE,
    ADD_STAFF,
    EDIT_OFFICE, EDIT_STAFF,
    GET_OFFICE,
    GET_OFFICES,
    GET_STAFF,
    REMOVE_OFFICE, REMOVE_STAFF,
    SET_STAFF
} from "./types";
import firebase from "../firebase";

// Office Actions
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
};

// Staff Actions
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

export const removeStaff = (id, staffId) => dispatch => {

    firebase.db.collection("offices")
        .doc(id)
        .collection("staff")
        .doc(staffId)
        .delete().then(function () {
        console.log("Document successfully deleted!");
        dispatch({
            type: REMOVE_STAFF,
            payload: staffId
        });
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
};

export const editStaff = (id, staff) => dispatch => {

    firebase.db.collection("offices")
        .doc(id)
        .collection("staff")
        .doc(staff.id)
        .set(staff)
        .then(function () {
            console.log("Staff successfully edited!");
            dispatch({
                type: EDIT_STAFF,
                payload: staff
            });
        })
        .catch(function (error) {
            console.error("Error editing staff: ", error);
        });
};
