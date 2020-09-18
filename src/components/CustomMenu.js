import React from 'react';
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import EditIcon from "@material-ui/icons/Edit";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import withStyles from "@material-ui/core/styles/withStyles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    listItemText: {
        width: 85
    },

    listItemIcon: {
        maxWidth: 12
    }
}));


const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);


export default function CustomMenu ({anchorEl, handleClose}) {

    const classes = useStyles();

    return (
        <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <StyledMenuItem>
                <ListItemText primary="Edit" className={classes.listItemText}/>
                <ListItemIcon className={classes.listItemIcon}>
                    <EditIcon fontSize="small"/>
                </ListItemIcon>
            </StyledMenuItem>
            <StyledMenuItem>
                <ListItemText primary="Remove" className={classes.listItemText}/>
                <ListItemIcon className={classes.listItemIcon}>
                    <RemoveCircleIcon fontSize="small"/>
                </ListItemIcon>
            </StyledMenuItem>
        </StyledMenu>
    );
};

CustomMenu.propTypes = {
    anchorEl: PropTypes.object,
    handleClose: PropTypes.func.isRequired
};