import React, {useEffect} from 'react';
import AppBar from "../components/Staff/AppBar";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import SearchBox from "../components/Staff/SearchBox";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Staff from "../components/Staff/Staff";
import PropTypes from "prop-types";
import {getOffice, getStaff} from "../actions/officeActions";
import {connect} from "react-redux";


const useStyles = makeStyles((theme) => ({
    mainContainer: {
        marginTop: theme.spacing(2)
    }
}));

const Office = (props) => {

    const classes = useStyles();
    const {match, getOffice, getStaff, office, staff} = props;

    useEffect(() => {
        getOffice(match.params.officeId);
    }, [getOffice, match.params.officeId]);

    useEffect(() => {
        getStaff(match.params.officeId);
    }, [getStaff, match.params.officeId]);

    console.log(staff);

    return (
        <div>
            <AppBar office={office}/>
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
                            Staff Members <span>{staff.length}/{office.maxNumOccupants}</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="contained" color='primary'>
                            Add Staff
                        </Button>
                    </Grid>

                    {staff.map(personnel => (
                        <Grid item xs={12} key={personnel.id}>
                            < Staff staffPersonnel={personnel}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

Office.propTypes = {
    getOffice: PropTypes.func.isRequired,
    office: PropTypes.object.isRequired,
    staff: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    office: state.offices.item,
    staff: state.offices.staff
});

export default connect(mapStateToProps, {getOffice, getStaff})(Office);