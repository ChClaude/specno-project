import React from 'react';
import AppBar from "./components/AppBar";
import './App.css';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {Container} from "@material-ui/core";
import CardOffice from "./components/CardOffice";
// import EditOfficeForm from "./components/EditOfficeForm";
import RemoveOfficeForm from "./components/RemoveOfficeForm";
// import AddOfficeForm from "./components/AddOfficeForm";

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    }
}));


function App() {

    const classes = useStyles();

    return (
        <>
            <AppBar/>
            <Container>
                <Grid container spacing={3} className={classes.gridContainer}>
                    <Grid item xs={12}>
                        <CardOffice/>
                    </Grid>
                    <Grid item xs={12}>
                        <RemoveOfficeForm />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default App;
