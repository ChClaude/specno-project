import React from 'react';
import AppBar from "../components/Office/AppBar";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core";
import CardOffice from "../components/Office/CardOffice";

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    }
}));


const Office = () => {

    const classes = useStyles();

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

export default Office;