import "./search-box.styles.css";
import TextField from "@mui/material/TextField";

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <TextField
    type="search"
    id="outlined-basic"
    label="Search"
    variant="filled"
    color="success"
    placeholder={placeholder}
    onChange={onChangeHandler}
    sx={{color:"green"}}
  />
);

export default SearchBox;
