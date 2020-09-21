import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editStaff } from "../../actions/officeActions";

const useStyles = makeStyles((theme) => ({
    formRoot: {
        width: '100%'
    },

    closeIcon: {
        display: 'flex',
        justifyContent: 'flex-end'
    },

    xCenter: {
        display: 'flex',
        justifyContent: 'center'
    }
}));


const EditStaffForm = ({ officeId, staffPersonnel, onCloseEditRemoveForm }) => {

    const [firstName, setFirstName] = useState(staffPersonnel.firstName);
    const [lastName, setLastName] = useState(staffPersonnel.lastName);

    const classes = useStyles();

    const handleSaveStaff = () => {
        const personnel = {
            firstName: firstName,
            lastName: lastName
        };

        editStaff(officeId, personnel);

        setFirstName('');
        setLastName('');

        onCloseEditRemoveForm();
    };

    return (
        <Box className={classes.xCenter}>
            <Grid container style={{maxWidth: '500px', minHeight: '400px'}}>
                <Grid item xs={12} className={classes.closeIcon}>
                    <IconButton aria-label="delete" className={classes.margin} onClick={onCloseEditRemoveForm}>
                        <CloseIcon fontSize="large"/>
                    </IconButton>
                </Grid>
                <Grid item xs={12} className={classes.xCenter}>
                    <Typography variant="h3" gutterBottom>
                        Edit Staff
                    </Typography>
                </Grid>
                <Grid item xs={12} className={classes.xCenter}>
                    <form className={classes.formRoot} onSubmit={handleSaveStaff}>
                        <div>
                            <TextField
                                id="firstName"
                                label="First Name"
                                name="firstName"
                                type="text"
                                value={firstName}
                                fullWidth
                            />
                        </div>
                        <div style={{ marginTop: '10px'}}>
                            <TextField
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                type="text"
                                value={lastName}
                                fullWidth
                            />
                        </div>

                        <div style={{ marginTop: '30px'}}>
                            <Button variant="contained" size="large" color="primary" style={{width: '100%'}} type="submit">
                                Save Staff
                            </Button>
                        </div>
                    </form>
                </Grid>
            </Grid>
        </Box>
    );
}

EditStaffForm.propTypes = {
    staffPersonnel: PropTypes.object.isRequired,
    officeId: PropTypes.string.isRequired,
    onCloseEditRemoveForm: PropTypes.func.isRequired
};


export default connect(null, { editStaff })(EditStaffForm);