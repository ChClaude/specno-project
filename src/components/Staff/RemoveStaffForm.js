import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeStaff } from "../../actions/officeActions";

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
    },

    xCenterAlignCol: {
        display: 'flex',
        alignItems: 'center',
        flexFlow: 'column'
    },

    removeBtn: {
        backgroundColor: theme.palette.error.main,
        color: "#FFF"
    },

    removeColor: {
        color: theme.palette.error.main,
        fontWeight: 'bold'
    }
}));




const RemoveStaffForm = ({ officeId, staffPersonnel, removeStaff, onCloseRemoveForm }) => {

    const classes = useStyles();

    const handleRemoveStaff = () => {
        removeStaff(officeId, staffPersonnel);
        onCloseRemoveForm();
    };

    return (
        <Box className={classes.xCenter}>
            <Grid container style={{maxWidth: '400px', minHeight: '370px'}}>
                <Grid item xs={12} className={classes.closeIcon}>
                    <IconButton aria-label="delete" className={classes.margin} onClick={onCloseRemoveForm}>
                        <CloseIcon fontSize="large"/>
                    </IconButton>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h3" align="center">
                        Remove Staff
                    </Typography>
                </Grid>
                <Grid item xs={12} className={classes.xCenterAlignCol}>
                    <div>
                        <Typography gutterBottom align="center">
                            Are you sure <br/>you want to <span className={classes.removeColor}>Remove</span>
                        </Typography>
                        <Typography variant="h4" style={{margin: '30px 0'}}>
                            {staffPersonnel.firstName} {staffPersonnel.lastName}
                        </Typography>
                    </div>
                    <Button variant="contained" size="large" className={classes.removeBtn} onClick={handleRemoveStaff}>
                        Remove
                    </Button>
                </Grid>
            </Grid>

        </Box>
    );
}

RemoveStaffForm.propTypes = {
    staffPersonnel: PropTypes.object.isRequired,
    officeId: PropTypes.string.isRequired,
    removeStaff: PropTypes.func.isRequired,
    onCloseRemoveForm: PropTypes.func.isRequired
};

export default connect(null, { removeStaff })(RemoveStaffForm);