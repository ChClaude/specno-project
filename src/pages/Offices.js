import React, { useEffect } from 'react';
import AppBar from "../components/Office/AppBar";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core";
import CardOffice from "../components/Office/CardOffice";
import { connect } from "react-redux";
import { getOffices } from "../actions/officeActions";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    }
}));


const Offices = ({getOffices}) => {

    const classes = useStyles();

    useEffect(() => {
        getOffices();
    }, [getOffices]);


    return (
        <>
            <AppBar/>
            <Container>
                <Grid container spacing={3} className={classes.gridContainer}>
                    <Grid item xs={12}>
                        <CardOffice/>
                    </Grid>
                </Grid>
            </Container>
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

export default connect(mapStateToProps, { getOffices })(Offices);