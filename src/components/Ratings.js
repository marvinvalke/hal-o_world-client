import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


function Ratings() {
  const [value, setValue] = React.useState(5);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />      
      {/* <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} /> */}
    </Box>
  );
}

export default Ratings