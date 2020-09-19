import React from 'react';
import AppBar from "../components/Staff/AppBar";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import SearchBox from "../components/Staff/SearchBox";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Staff from "../components/Staff/Staff";


const useStyles = makeStyles((theme) => ({
    mainContainer: {
        marginTop: theme.spacing(2)
    }
}));

const Office = () => {

    const classes = useStyles();

    return (
        <div>
            <AppBar/>
            <Container className={classes.mainContainer}>
                <Grid
                    container
                    spacing={2}
                >
                    <Grid item xs={12}>
                        <SearchBox/>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography>
                            Staff Members <span>8/9</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="contained" color='primary'>
                            Add Staff
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Staff/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Office;