import { Box, Typography } from '@material-ui/core';

const CurrentCity = ({ cityName, current, color }) => {
  return (
    <Box>
      <Typography
        data-test="cityName"
        style={{ color: color, fontWeight: '700' }}
      >
        {cityName}
      </Typography>

      <Typography style={{ color: color, fontWeight: '700' }}>
        {current} <span> &#8451; </span>
      </Typography>
    </Box>
  );
};

export default CurrentCity;
