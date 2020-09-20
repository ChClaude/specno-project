import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Link from "@material-ui/core/Link";
import PhoneIcon from '@material-ui/icons/Phone';
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CustomMenu from "../CustomMenu";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    cardContainer: {
        display: "inline-block",
        width: 450,
        minWidth: 290,
        height: 150,
        borderRadius: '0 4px 4px 0'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },

    cardActionBox: {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 'auto',
    },

    phoneIcon: {
        fontSize: 18,
        marginRight: 3
    },

    sidePaper: {
        display: "flex",
        backgroundColor: theme.palette.primary.main,
        width: '100%',
        height: 150,
        borderRadius: '4px 0 0 4px',
        color: 'white',
        flexFlow: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    peopleAltIcon: {
        fontSize: 50
    },

    listItemText: {
        width: 85
    },

    listItemIcon: {
        maxWidth: 12
    }
}));


export default function CardOffice({ office, onEditMenuItemClick, onDeleteMenuItemClick }) {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const {id, name, location, email, tellNumber, maxNumOccupants} = office;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const preventDefault = (event) => event.preventDefault();


    return (
        <Grid container>
            <Grid item xs={3} sm={1}>
                <Paper elevation={2} className={classes.sidePaper}>
                    <PeopleAltIcon className={classes.peopleAltIcon}/>
                    <Typography>
                        04/{maxNumOccupants}
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <Card className={classes.cardContainer}>
                    <CardHeader
                        action={
                            <IconButton aria-label="settings" onClick={(event) => handleClick(event)}>
                                <MoreVertIcon/>
                            </IconButton>
                        }
                        title={name}
                        subheader={location}
                    />

                    <CustomMenu
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        onEditMenuItemClick={() => {
                            handleClose();
                            onEditMenuItemClick();
                        }}
                        onDeleteMenuItemClick={() => {
                            handleClose();
                            onDeleteMenuItemClick();
                        }} />


                    <CardActions disableSpacing>

                        <Link href="#" onClick={preventDefault}>
                            { email }
                        </Link>
                        <RouterLink to={`/offices/${id}`} style={{marginLeft: "8px", position: "relative", bottom: "25px"}}>View</RouterLink>


                        <Box
                            className={classes.cardActionBox}
                            component={"span"}
                        >
                            <PhoneIcon color="action" className={classes.phoneIcon}/>
                            <Link href="#" onClick={preventDefault}>
                                { tellNumber }
                            </Link>
                        </Box>

                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}

CardOffice.propTypes = {
    office: PropTypes.object.isRequired,
    onEditMenuItemClick: PropTypes.func.isRequired,
    onDeleteMenuItemClick: PropTypes.func.isRequired
};
