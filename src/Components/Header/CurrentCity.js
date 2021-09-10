import { Box, Typography } from '@material-ui/core';

const CurrentCity = ({ cityName, current }) => {
  return (
    <Box>
      <Typography>{cityName}</Typography>

      <Typography>{current} 'c</Typography>
    </Box>
  );
};

export default CurrentCity;
