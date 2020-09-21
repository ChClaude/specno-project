import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {Box} from "@material-ui/core";
import {Link as RouterLink} from "react-router-dom";
import PropTypes from "prop-types";


const useStyles = makeStyles((theme) => ({

    navigationButton: {
        marginRight: theme.spacing(2),
    },

    toolbar: {
        minHeight: 200,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
    },

    title: {
        marginTop: theme.spacing(1),
        flexBasis: '90px',
    },

    subInfo: {
        alignSelf: 'flex-end',
        position: 'relative',
        left: '-90px'
    }
}));

// TODO: this component needs to be optimized for mobile view
export default function StaffAppBar({office}) {

    const classes = useStyles();

    return (
        <>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <RouterLink to="/" style={{color: "white", textDecoration: "none"}}>
                        <IconButton
                            edge="start"
                            className={classes.navigationButton}
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <KeyboardBackspaceIcon/>
                        </IconButton>
                    </RouterLink>

                    <Typography className={classes.title} variant="h5" >
                        { office.name }
                    </Typography>
                    <Box className={classes.subInfo}>
                        <Typography variant="body1" noWrap>
                            Address: <span>{office.location}</span>
                        </Typography>
                        <Typography variant="body1" noWrap>
                            Email: <span>{office.email}</span>
                        </Typography>
                        <Typography variant="body1" noWrap>
                            Office Tell: <span>{ office.tellNumber }</span>
                        </Typography>
                        <Typography variant="body1" noWrap>
                            Max Capacity: <span>{office.maxNumOccupants}</span>
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

// TODO: office should be required as prop, fix undefined bug
AppBar.propTypes = {
    // office: PropTypes.object.isRequired
    office: PropTypes.object
};
