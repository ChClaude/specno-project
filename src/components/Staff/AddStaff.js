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
import {addStaff} from "../../actions/officeActions";

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


const AddStaff = ({onCloseAddOfficeForm, addStaff, id}) => {
    const classes = useStyles();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleOnChange = (event) => {
        if (event.target.name === "firstName") {
            setFirstName(event.target.value);
        } else if (event.target.name === "lastName") {
            setLastName(event.target.value);
        }
    };

    const handleOnSaveStaff = () => {

        const staff = {
            firstName: firstName,
            lastName: lastName
        };

        addStaff(id, staff);
        onCloseAddOfficeForm();
    };

    return (
        <Box className={classes.xCenter}>
            <Grid container style={{maxWidth: '500px', minHeight: '400px'}}>
                <Grid item xs={12} className={classes.closeIcon}>
                    <IconButton aria-label="delete" className={classes.margin} onClick={onCloseAddOfficeForm}>
                        <CloseIcon fontSize="large"/>
                    </IconButton>
                </Grid>
                <Grid item xs={12} className={classes.xCenter}>
                    <Typography variant="h3" gutterBottom>
                        Add Staff
                    </Typography>
                </Grid>
                <Grid item xs={12} className={classes.xCenter}>
                    <form className={classes.formRoot}>
                        <div>
                            <TextField
                                id="firstName"
                                label="First Name"
                                name="firstName"
                                type="text"
                                value={firstName}
                                onChange={handleOnChange}
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
                                onChange={handleOnChange}
                                fullWidth
                            />
                        </div>

                        <div style={{ marginTop: '30px'}}>
                            <Button variant="contained" size="large" color="primary" style={{width: '100%'}} onClick={handleOnSaveStaff}>
                                Save Staff
                            </Button>
                        </div>
                    </form>
                </Grid>
            </Grid>

        </Box>
    );
}

AddStaff.propTypes = {
    onCloseAddOfficeForm: PropTypes.func.isRequired,
    addStaff: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};

export default connect(null, { addStaff })(AddStaff);
