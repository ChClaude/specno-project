import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";

export default function SearchBox() {

    const [searchValue, setSearchValue] = React.useState("");

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    }

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