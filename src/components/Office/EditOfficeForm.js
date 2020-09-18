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

export default function EditOfficeForm() {
    const classes = useStyles();

    const [color, setColor] = React.useState('blue');

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <Box className={classes.xCenter}>
            <Grid container style={{maxWidth: '500px', minHeight: '800px'}}>
                <Grid item xs={12} className={classes.closeIcon}>
                    <IconButton aria-label="delete" className={classes.margin}>
                        <CloseIcon fontSize="large"/>
                    </IconButton>
                </Grid>
                <Grid item xs={12} className={classes.xCenter}>
                    <Typography variant="h3" gutterBottom>
                        Edit Office
                    </Typography>
                </Grid>
                <Grid item xs={12} className={classes.xCenter}>
                    <form className={classes.formRoot}>
                        <div>
                            <TextField
                                id="office"
                                label="Office Name"
                                name="office"
                                type="text"
                                fullWidth
                            />
                        </div>
                        <div>
                            <TextField
                                id="email"
                                label="Email Address"
                                name="email"
                                type="email"
                                fullWidth
                            />
                        </div>
                        <div>
                            <TextField
                                id="tel"
                                label="Office Tell"
                                name="telephone"
                                type="tel"
                                fullWidth
                            />
                        </div>
                        <div>
                            <TextField
                                id="address"
                                label="Address"
                                name="address"
                                type="text"
                                fullWidth
                            />
                        </div>
                        <div>
                            <TextField
                                id="maxNumOcp"
                                label="Max Number of Occupants"
                                name="maxNumOcp"
                                type="number"
                                fullWidth
                            />
                        </div>
                        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center'}}>
                            <TextField
                                id="officeColor"
                                select
                                label="Office Color"
                                value={color}
                                onChange={handleColorChange}
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
                            <Button variant="contained" size="large" color="primary" style={{width: '100%'}}>
                                Save Office
                            </Button>
                        </div>
                    </form>
                </Grid>
            </Grid>

        </Box>
    );
}
