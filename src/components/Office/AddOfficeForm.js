import React from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addOffice} from "../../actions/officeActions";

const useStyles = makeStyles((theme) => ({
    formRoot: {
        width: '100%'
    },

    closeIcon: {
        display: 'flex',
        justifyContent: 'flex-end'
    },

    xCenter: {
        display: 'flex',
        justifyContent: 'center'
    }
}));

const colors = [
    {
        value: 'red',
        label: 'Red',
    },
    {
        value: 'blue',
        label: 'Blue',
    },
    {
        value: 'green',
        label: 'Green',
    },
    {
        value: 'yellow',
        label: 'Yellow',
    },
    {
        value: 'teal',
        label: 'Teal',
    }
];

const AddOfficeForm = ({addOffice, onAddOfficeClick}) => {
    const classes = useStyles();

    const [name, setName] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [tellNumber, setTellNumber] = React.useState('');
    const [maxNumOccupants, setMaxNumOccupants] = React.useState(1);
    const [color, setColor] = React.useState('blue');

    const handleOnChange = (event) => {

        switch (event.target.name) {
            case "name" :
                setName(event.target.value);
                break;
            case "location" :
                setLocation(event.target.value);
                break;
            case "email" :
                setEmail(event.target.value);
                break;
            case "tellNumber" :
                setTellNumber(event.target.value);
                break;
            case "maxNumOccupants" :
                setMaxNumOccupants(event.target.value);
                break;
            case "color":
                setColor(event.target.value);
                break;
            default:
                return;
        }
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const office = {
            name: name,
            location: location,
            email: email,
            tellNumber: tellNumber,
            maxNumOccupants: maxNumOccupants,
            color: color
        };

        setName('');
        setLocation('');
        setEmail('');
        setTellNumber('');
        setMaxNumOccupants(1);
        setColor("blue");

        addOffice(office);
    };

    return (
        <Box className={classes.xCenter}>
            <Grid container style={{maxWidth: '500px', minHeight: '800px'}}>
                <Grid item xs={12} className={classes.closeIcon}>
                    <IconButton onClick={onAddOfficeClick}>
                        <CloseIcon fontSize="large"/>
                    </IconButton>
                </Grid>
                <Grid item xs={12} className={classes.xCenter}>
                    <Typography variant="h3" gutterBottom>
                        Add Office
                    </Typography>
                </Grid>
                <Grid item xs={12} className={classes.xCenter}>
                    <form className={classes.formRoot} onSubmit={handleOnSubmit}>
                        <div>
                            <TextField
                                 id="name"
                                 label="Office Name"
                                 name="name"
                                 type="text"
                                 value={name}
                                 onChange={handleOnChange}
                                 fullWidth
                            />
                        </div>
                        <div>
                            <TextField
                                id="email"
                                label="Email Address"
                                name="email"
                                type="email"
                                value={email}
                                onChange={handleOnChange}
                                fullWidth
                            />
                        </div>
                        <div>
                            <TextField
                                id="tellNumber"
                                label="Office Tell"
                                name="tellNumber"
                                type="tel"
                                value={tellNumber}
                                onChange={handleOnChange}
                                fullWidth
                            />
                        </div>
                        <div>
                            <TextField
                                id="location"
                                label="location"
                                name="location"
                                type="text"
                                value={location}
                                onChange={handleOnChange}
                                fullWidth
                            />
                        </div>
                        <div>
                            <TextField
                                id="maxNumOccupants"
                                label="Max Number of Occupants"
                                name="maxNumOccupants"
                                type="number"
                                value={maxNumOccupants}
                                onChange={handleOnChange}
                                fullWidth
                            />
                        </div>
                        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center'}}>
                            <TextField
                                id="color"
                                select
                                label="Office Color"
                                value={color}
                                onChange={handleOnChange}
                                name="color"
                                helperText="Please select your office color"
                            >
                                {colors.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                        <div style={{ marginTop: '30px'}}>
                            <Button variant="contained" size="large" color="primary" style={{width: '100%'}} type="submit">
                                Save Office
                            </Button>
                        </div>
                    </form>
                </Grid>
            </Grid>

        </Box>
    );
}

AddOfficeForm.propTypes = {
    onAddOfficeClick: PropTypes.func.isRequired,
    addOffice: PropTypes.func.isRequired
};

export default connect(null, { addOffice })(AddOfficeForm);
