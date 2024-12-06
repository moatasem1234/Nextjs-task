import { Box, Checkbox, Typography } from '@mui/material';

const ColumnsSelector = () => {
  const columns = ['ID', 'Capacity', '...'];
  return (
    <Box>
      <Typography variant="subtitle2">Columns</Typography>
      {columns.map((col) => (
        <Box key={col} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Checkbox />
          <Typography>{col}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ColumnsSelector;
