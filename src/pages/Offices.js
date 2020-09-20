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
    // const [showEditOfficeForm, setShowEditOfficeForm] = React.useState(false)
    const [showRemoveOfficeForm, setShowRemoveOfficeForm] = React.useState(false)

    const [displayFormChecks, setDisplayFormChecks] = React.useState([]);

    useEffect(() => {
        getOffices();  // call to firebase data

        console.log("loop");
    }, [getOffices,]);

    useEffect(() => {
        let values = [];

        if (offices.length > 0) {
            offices.map(office => {
                values.push({id: office.id, showEditOfficeForm: false, showRemoveOfficeForm: false})
            });
            setDisplayFormChecks(values);
        }

    }, [offices]);

    const handleOnAddOfficeClick = () => {
        setShowAddOfficeForm(!showAddOfficeForm);
    };

    const handleEditMenuItemClick = (id) => {

        let currentIndex;

        let displayValues = [...displayFormChecks];

        console.log(displayValues);

        displayFormChecks.forEach((value, index) => {
            if (value.id === id) {
                currentIndex = index;
                displayValues[index].showEditOfficeForm = !displayValues[index].showEditOfficeForm;
                setDisplayFormChecks(displayValues);
            }
        });

    };

    const handleDeleteMenuItemClick = (id) => {

        let currentIndex;

        let displayValues = [...displayFormChecks];

        displayFormChecks.forEach((value, index) => {
            if (value.id === id) {
                currentIndex = index;
                displayValues[index].showRemoveOfficeForm = !displayValues[index].showRemoveOfficeForm;
                setDisplayFormChecks(displayValues);
            }
        });
    };


    return (
        <>
            <AppBar onAddOfficeClick={handleOnAddOfficeClick}/>
            <Container>
                <Grid container spacing={3} className={classes.gridContainer}>
                    {offices.length && displayFormChecks.length && offices.map((office) => {

                        let currentIndex;
                        displayFormChecks.forEach((value, index) => {
                            if (value.id === office.id) {
                                currentIndex = index;
                            }
                        });


                        return (<Grid item xs={12} key={office.id} id={office.id}>
                            <CardOffice office={office} onEditMenuItemClick={() => handleEditMenuItemClick(office.id)}
                                        onDeleteMenuItemClick={() => handleDeleteMenuItemClick(office.id)}/>

                            <div className={clsx("removeofficeform", displayFormChecks[currentIndex].showRemoveOfficeForm && "show")}>
                                <RemoveOfficeForm onCloseRemoveForm={() => handleDeleteMenuItemClick(office.id)} office={office}/>
                            </div>

                            <div className={clsx("editofficeform", displayFormChecks[currentIndex].showEditOfficeForm && "show")}>
                                <EditOfficeForm onCloseEditOfficeForm={() => handleEditMenuItemClick(office.id)} office={office}/>
                            </div>
                        </Grid>);

                    })}
                </Grid>
            </Container>
            <div className={clsx("addofficeform", showAddOfficeForm && "show")}>
                <AddOfficeForm onAddOfficeClick={handleOnAddOfficeClick} />
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