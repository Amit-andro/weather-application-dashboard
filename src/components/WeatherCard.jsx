import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';

const WeatherCard = ({ day, temp, icon, date }) => {
  return (
    <Grid item xs={6} sm={4}>
      <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#1e1e1e', color:'#fff' }}>
        <Typography variant="h6">{day} {date}</Typography>
        <Typography variant="h4">{temp}°C</Typography>
        <img src={icon} alt="Weather Icon" style={{ width: "80px", marginRight: "8px" }} />
      </Paper>
    </Grid>
  );
};

export default WeatherCard;
