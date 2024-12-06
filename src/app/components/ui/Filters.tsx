import { Box, TextField, Button, FormControl, InputLabel, OutlinedInput, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FillterItem from './FillterItem';
import ColumnsItem from './ColumnsItem';
const Filters = () => {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', my: 2 }}>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
        <OutlinedInput
          placeholder='Search ...'
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>}
          label="Search"
        />
      </FormControl>
      <FillterItem />
      <ColumnsItem />
    </Box>
  );
};

export default Filters;
