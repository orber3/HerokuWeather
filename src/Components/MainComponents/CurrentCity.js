import { Box, Typography } from '@material-ui/core';

const CurrentCity = ({ cityName, current }) => {
  return (
    <Box>
      <Typography style={{ color: '#3f51b5', fontWeight: '700' }}>
        {cityName}
      </Typography>

      <Typography style={{ color: '#3f51b5', fontWeight: '700' }}>
        {current} <span> &#8451; </span>
      </Typography>
    </Box>
  );
};

export default CurrentCity;
