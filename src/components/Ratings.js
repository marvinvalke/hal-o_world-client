import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { HALO_URL } from "../config";
import axios from "axios";
import {useEffect} from 'react';


function Ratings(props) {
  const [value, setValue] = React.useState(1);
  const {missionId} = props

  useEffect (() => {
    const getValue = async () => {
                let response = await axios.get(`${HALO_URL}/profile/mymissions/${missionId}/review`, { withCredentials: true});
                console.log(response.data.rate) 
      }
      getValue()
  }, [])
  

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