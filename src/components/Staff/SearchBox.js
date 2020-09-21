import React, {useEffect} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {setStaff} from "../../actions/officeActions";

const SearchBox = ({staff, setStaff}) => {

    const [searchValue, setSearchValue] = React.useState([]);
    const [initialStaffState, setInitialStaffState] = React.useState([]);

    const handleChange = (event) => {
        setSearchValue(event.target.value);

        if (event.target.value.length > 0) {
            const currentSearchValue = event.target.value.toLowerCase();

            const result = initialStaffState.filter(personnel => {
                    return (personnel.firstName.toLowerCase().includes(currentSearchValue)
                        || personnel.lastName.toLowerCase().includes(currentSearchValue));
                }
            );

            if (result) {
                setStaff(result); // setStaff action
                console.log(result);
            }
        } else {
            console.log("search value empty");
            setStaff(initialStaffState); // setStaff action
        }
    }

    useEffect(() => {

        if(staff.length > initialStaffState.length) {
            setInitialStaffState(staff);
        }

        console.log("looping");
    }, [staff, initialStaffState.length]);

    return (
        <>
            <FormControl fullWidth>
                <OutlinedInput
                    id="search-box"
                    type='text'
                    value={searchValue}
                    placeholder="Search..."
                    onChange={handleChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton>
                                <SearchIcon/>
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </>
    );
}

SearchBox.propTypes = {
    staff: PropTypes.array.isRequired,
    setStaff: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    staff: state.offices.staff
});

export default connect(mapStateToProps, { setStaff })(SearchBox);