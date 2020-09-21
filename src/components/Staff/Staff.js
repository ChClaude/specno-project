import React from 'react';
import Typography from "@material-ui/core/Typography";
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CustomMenu from "../CustomMenu";
import PropTypes from "prop-types";


const useStyles = makeStyles((theme) => ({
    avatar: {
        backgroundColor: theme.palette.primary.main,
    },

    gridContainer: {
        padding: "6px 0 0 6px"
    }
}));

const Staff = ({staffPersonnel, onDeleteMenuItemClick, onEditMenuItemClick}) => {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Paper elevation={2}>
            <Grid container className={classes.gridContainer}>
                <Grid item xs={3}>
                    <Avatar className={classes.avatar}>
                        <PersonOutlineOutlinedIcon/>
                    </Avatar>
                </Grid>
                <Grid item xs={8} style={{display: "flex", alignItems: "center"}}>
                    <Typography>
                        {staffPersonnel.firstName} {staffPersonnel.lastName}
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <IconButton onClick={handleClick}>
                        <MoreVertIcon/>
                    </IconButton>
                    <CustomMenu
                        anchorEl={anchorEl} onClose={handleClose}
                        onDeleteMenuItemClick={() => {
                            onDeleteMenuItemClick();
                            handleClose();
                        }}
                        onEditMenuItemClick={(event) => {
                            onEditMenuItemClick();
                            handleClose();
                        }}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
};

Staff.propTypes = {
    staffPersonnel: PropTypes.object.isRequired,
    onDeleteMenuItemClick: PropTypes.func.isRequired,
    onEditMenuItemClick: PropTypes.func.isRequired,
};

export default Staff;