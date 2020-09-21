import React, {useEffect, useState} from 'react';
import AppBar from "../components/Staff/AppBar";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import SearchBox from "../components/Staff/SearchBox";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Staff from "../components/Staff/Staff";
import PropTypes from "prop-types";
import {getOffice, getStaff} from "../actions/officeActions";
import {connect} from "react-redux";
import AddStaff from "../components/Staff/AddStaff";
import clsx from "clsx";
import RemoveStaffForm from "../components/Staff/RemoveStaffForm";
import EditStaffForm from "../components/Staff/EditStaffForm";


const useStyles = makeStyles((theme) => ({
    mainContainer: {
        marginTop: theme.spacing(2)
    }
}));

const Office = (props) => {

    const classes = useStyles();
    const {match, getOffice, getStaff, office, staff} = props;
    const [showAfdOfficeForm, setShowAddOfficeForm] = useState(false);

    const [showFormCheckValues, setShowFormCheckValues] = useState([]);

    useEffect(() => {
        getOffice(match.params.officeId);
    }, [getOffice, match.params.officeId]);

    useEffect(() => {
        getStaff(match.params.officeId);
    }, [getStaff, match.params.officeId]);

    useEffect(() => {
        let values = [];

        if (staff.length > 0) {
            staff.forEach(staff => {
                values.push({id: staff.id, showEditOfficeForm: false, showRemoveOfficeForm: false})
            });

            setShowFormCheckValues(values);
        }

    }, [staff]);

    const handleOnToggleStaffForm = () => {
        setShowAddOfficeForm(!showAfdOfficeForm);
    };

    const handleOnDeleteMenuItemClick = (id) => {
        let displayValues = [...showFormCheckValues];

        showFormCheckValues.forEach((value, index) => {
            if (value.id === id) {
                displayValues[index].showRemoveStaffForm = !displayValues[index].showRemoveStaffForm;
                setShowFormCheckValues(displayValues);
            }
        });
    };

    const handleOnEditMenuItemClick = (id) => {
        let displayValues = [...showFormCheckValues];

        showFormCheckValues.forEach((value, index) => {
            if (value.id === id) {
                displayValues[index].showEditStaffForm = !displayValues[index].showEditStaffForm;
                setShowFormCheckValues(displayValues);
            }
        });
    };


    return (
        <div>
            <AppBar office={office}/>
            <Container className={classes.mainContainer}>
                <Grid
                    container
                    spacing={2}
                >
                    <Grid item xs={12}>
                        <SearchBox/>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography>
                            Staff Members <span>{staff.length}/{office.maxNumOccupants}</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="contained" color='primary' onClick={handleOnToggleStaffForm}>
                            Add Staff
                        </Button>
                    </Grid>

                    {showFormCheckValues.length && staff.map(personnel => {

                        let currentIndex;
                        showFormCheckValues.forEach((value, index) => {
                            if (value.id === personnel.id) {
                                currentIndex = index;
                            }
                        });

                        return (
                            <Grid item xs={12} key={personnel.id}>
                                <Staff
                                    staffPersonnel={personnel}
                                    onDeleteMenuItemClick={() => handleOnDeleteMenuItemClick(personnel.id)}
                                    onEditMenuItemClick={() => handleOnEditMenuItemClick(personnel.id)}
                                />
                                <div className={clsx("removeofficeform",
                                    showFormCheckValues[currentIndex].showRemoveStaffForm && "show")}>
                                    <RemoveStaffForm
                                        staffPersonnel={personnel}
                                        officeId={match.params.officeId}
                                        onCloseRemoveForm={() => handleOnDeleteMenuItemClick(personnel.id)}
                                    />
                                </div>
                                <div className={clsx("removeofficeform",
                                    showFormCheckValues[currentIndex].showEditStaffForm && "show")}>
                                    <EditStaffForm
                                        staffPersonnel={personnel}
                                        officeId={match.params.officeId}
                                        onCloseEditRemoveForm={() => handleOnEditMenuItemClick(personnel.id)}
                                    />
                                </div>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
            <div className={clsx("addofficeform", showAfdOfficeForm && "show" )}>
                <AddStaff onCloseAddOfficeForm={handleOnToggleStaffForm} id={match.params.officeId} />
            </div>
        </div>
    );
};

Office.propTypes = {
    getOffice: PropTypes.func.isRequired,
    office: PropTypes.object.isRequired,
    staff: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    office: state.offices.item,
    staff: state.offices.staff
});

export default connect(mapStateToProps, {getOffice, getStaff})(Office);