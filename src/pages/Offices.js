import React, {useEffect} from 'react';
import AppBar from "../components/Office/AppBar";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core";
import CardOffice from "../components/Office/CardOffice";
import {connect} from "react-redux";
import { getOffices} from "../actions/officeActions";
import PropTypes from "prop-types";
import AddOfficeForm from "../components/Office/AddOfficeForm";
import clsx from "clsx";
import RemoveOfficeForm from "../components/Office/RemoveOfficeForm";
import EditOfficeForm from "../components/Office/EditOfficeForm";

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
}));


const Offices = ({getOffices, offices}) => {

    const classes = useStyles();
    const [showAddOfficeForm, setShowAddOfficeForm] = React.useState(false)
    const [showEditOfficeForm, setShowEditOfficeForm] = React.useState(false)
    const [showRemoveOfficeForm, setShowRemoveOfficeForm] = React.useState(false)

    useEffect(() => {
        getOffices();  // call to firebase data

        console.log("loop");
    }, [getOffices,]);

    const handleOnAddOfficeClick = () => {
        setShowAddOfficeForm(!showAddOfficeForm);
    };

    const handleEditMenuItemClick = () => {
        setShowEditOfficeForm(!showEditOfficeForm);
    };

    const handleDeleteMenuItemClick = () => {
        setShowRemoveOfficeForm(!showRemoveOfficeForm);
    };


    return (
        <>
            <AppBar onAddOfficeClick={handleOnAddOfficeClick}/>
            <Container>
                <Grid container spacing={3} className={classes.gridContainer}>
                    {offices.length > 0 && offices.map((office) => (
                        <Grid item xs={12} key={office.id}>
                            <CardOffice office={office} onEditMenuItemClick={handleEditMenuItemClick} onDeleteMenuItemClick={handleDeleteMenuItemClick}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <div className={clsx("addofficeform", !showAddOfficeForm && "hide")}>
                <AddOfficeForm onAddOfficeClick={handleOnAddOfficeClick} />
            </div>
            <div className={clsx("removeofficeform", !showRemoveOfficeForm && "hide")}>
                <RemoveOfficeForm onCloseRemoveForm={handleDeleteMenuItemClick}/>
            </div>
            <div className={clsx("editofficeform", !showEditOfficeForm && "hide")}>
                <EditOfficeForm onCloseEditOfficeForm={handleEditMenuItemClick} />
            </div>
        </>
    );
}

Offices.propTypes = {
    getOffices: PropTypes.func.isRequired,
    offices: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    offices: state.offices.items
});

export default connect(mapStateToProps, {getOffices})(Offices);