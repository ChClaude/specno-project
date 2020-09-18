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

const useStyles = makeStyles((theme) => ({
    cardContainer: {
        display: "inline-block",
        maxWidth: 350,
        minWidth: 290,
        height: 123,
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
        height: 123,
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


export default function CardOffice() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

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
                        04/20
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
                        title="Office Name"
                        subheader="Address"
                    />

                    <CustomMenu anchorEl={anchorEl} handleClose={handleClose}/>

                    <CardActions disableSpacing>

                        <Link href="#" onClick={preventDefault}>
                            info@specno.com
                        </Link>

                        <Box
                            className={classes.cardActionBox}
                            component={"span"}
                        >
                            <PhoneIcon color="action" className={classes.phoneIcon}/>
                            <Link href="#" onClick={preventDefault}>
                                083 256 1245
                            </Link>
                        </Box>

                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}