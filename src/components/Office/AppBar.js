import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";
import {Link as RouterLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function OfficeAppBar({onAddOfficeClick}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <RouterLink to="/" className={classes.title}>
                        <Typography variant="h6">
                            Office Man
                        </Typography>
                    </RouterLink>
                    <Button variant="contained" onClick={onAddOfficeClick}>
                        Add Office
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

OfficeAppBar.propTypes = {
    onAddOfficeClick: PropTypes.func.isRequired
}
