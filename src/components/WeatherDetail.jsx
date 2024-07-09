import React from "react";

import { Box, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import WindIcon from "@mui/icons-material/Air";
import UvIcon from "@mui/icons-material/WbSunny";
import SunriseIcon from "@mui/icons-material/WbTwilight";
import SunsetIcon from "@mui/icons-material/Brightness2";
import HumidityIcon from "@mui/icons-material/Opacity";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FeelsLikeIcon from "@mui/icons-material/Thermostat";
import CompressIcon from '@mui/icons-material/Compress';
import SolarPowerIcon from '@mui/icons-material/SolarPower';

const DashboardContainer = styled(Box)({
  backgroundColor: "#121212",
  // minHeight: '100vh',
  padding: "2rem",
  color: "#ffffff",
});

const DashboardItem = styled(Paper)({
  padding: "1rem",
  backgroundColor: "#1e1e1e",
  color: "#ffffff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
});

const IconBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "1rem",
  fontSize: "2rem",
});

const WeatherDetail = (weather) => {
  return (
    <DashboardContainer>
      <Typography variant="h4" gutterBottom>
        Today's overview
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={2} md={3}>
          <DashboardItem>
            <Typography>Wind Status</Typography>
            <IconBox>
              <WindIcon sx={{ fontSize: "80px" }} />
            </IconBox>
            <div
              className="wind"
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "100px",
              }}
            >
              <div>
                <Typography>{weather?.weather?.currentConditions?.windspeed} km/h</Typography>
              </div>
              <div>
                <Typography>{weather?.weather?.currentConditions?.winddir}</Typography>
              </div>
            </div>
          </DashboardItem>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardItem>
            <Typography>UV Index</Typography>
            <IconBox>
              <UvIcon sx={{ fontSize: "70px" }} />
            </IconBox>
            <div
              className="wind"
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "60px",
              }}
            >
              <div>
                <Typography>{weather?.weather?.currentConditions?.uvindex} uv</Typography>
              </div>
            </div>
          </DashboardItem>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardItem>
            <Typography>Sunrise and Sunset</Typography>

            <IconBox>
              <SunriseIcon sx={{ fontSize: "60px" }} />
              <SunsetIcon sx={{ fontSize: "60px" }} />
            </IconBox>
            <div
              className="wind"
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "60px",
              }}
            >
              <div>
                <Typography>Sunrise: {weather?.weather?.currentConditions?.sunrise} AM</Typography>
              </div>
              <div>
                <Typography>Sunset: {weather?.weather?.currentConditions?.sunset} PM</Typography>
              </div>
            </div>
          </DashboardItem>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardItem>
            <Typography>Humidity</Typography>

            <IconBox>
              <HumidityIcon sx={{fontSize:'80px'}} />
            </IconBox>
            <Typography>{weather?.weather?.currentConditions?.humidity}</Typography>
          </DashboardItem>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardItem>
            <Typography>Visibility</Typography>

            <IconBox>
              <VisibilityIcon sx={{fontSize:"60px"}} />
            </IconBox>
            <Typography>{weather?.weather?.currentConditions?.visibility}</Typography>
          </DashboardItem>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardItem>
            <Typography>Feels like</Typography>
            <IconBox>
              <FeelsLikeIcon sx={{fontSize:"80px"}} />
            </IconBox>
            <Typography>{weather?.weather?.currentConditions?.feelslike}</Typography>
          </DashboardItem>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardItem>
            <Typography>Pressure</Typography>

            <IconBox>
              <CompressIcon sx={{fontSize:"80px"}} />
            </IconBox>
            <Typography>{weather?.weather?.currentConditions?.pressure}</Typography>
            {/* <Typography>Humidity is making it feel hotter</Typography> */}
          </DashboardItem>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardItem>
            <Typography>Solar Energy</Typography>

            <IconBox>
              <SolarPowerIcon sx={{fontSize:"75px"}} />
            </IconBox>
            <Typography>{weather?.weather?.currentConditions?.solarenergy}</Typography>
          </DashboardItem>
        </Grid>
      </Grid>
    </DashboardContainer>
  );
};

export default WeatherDetail;
