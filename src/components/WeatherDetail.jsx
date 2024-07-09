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

// Styled components for Dashboard layout and styling
const DashboardContainer = styled(Box)({
  backgroundColor: "#121212",
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

// Reusable component for dashboard items
const DashboardDetailItem = ({ title, icon, value, additionalValue }) => (
  <Grid item xs={12} sm={6} md={3}>
    <DashboardItem>
      <Typography>{title}</Typography>
      <IconBox>{icon}</IconBox>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "60px" }}>
        <div>
          <Typography>{value}</Typography>
        </div>
        {additionalValue && (
          <div>
            <Typography>{additionalValue}</Typography>
          </div>
        )}
      </div>
    </DashboardItem>
  </Grid>
);

// Main component to display weather details
const WeatherDetail = (weather) => {
  const currentConditions = weather?.weather?.currentConditions;

  return (
    <DashboardContainer>
      <Typography variant="h4" gutterBottom>
        Today's overview
      </Typography>
      <Grid container spacing={2}>
        {/* Wind Status */}
        <DashboardDetailItem
          title="Wind Status"
          icon={<WindIcon sx={{ fontSize: "80px" }} />}
          value={`${currentConditions?.windspeed} km/h`}
          additionalValue={currentConditions?.winddir}
        />
        {/* UV Index */}
        <DashboardDetailItem
          title="UV Index"
          icon={<UvIcon sx={{ fontSize: "70px" }} />}
          value={`${currentConditions?.uvindex} uv`}
        />
        {/* Sunrise and Sunset */}
        <DashboardDetailItem
          title="Sunrise and Sunset"
          icon={
            <Box>
              <SunriseIcon sx={{ fontSize: "60px" }} />
              <SunsetIcon sx={{ fontSize: "60px" }} />
            </Box>
          }
          value={`Sunrise: ${currentConditions?.sunrise} AM`}
          additionalValue={`Sunset: ${currentConditions?.sunset} PM`}
        />
        {/* Humidity */}
        <DashboardDetailItem
          title="Humidity"
          icon={<HumidityIcon sx={{ fontSize: '80px' }} />}
          value={currentConditions?.humidity}
        />
        {/* Visibility */}
        <DashboardDetailItem
          title="Visibility"
          icon={<VisibilityIcon sx={{ fontSize: "60px" }} />}
          value={currentConditions?.visibility}
        />
        {/* Feels like */}
        <DashboardDetailItem
          title="Feels like"
          icon={<FeelsLikeIcon sx={{ fontSize: "80px" }} />}
          value={currentConditions?.feelslike}
        />
        {/* Pressure */}
        <DashboardDetailItem
          title="Pressure"
          icon={<CompressIcon sx={{ fontSize: "80px" }} />}
          value={currentConditions?.pressure}
        />
        {/* Solar Energy */}
        <DashboardDetailItem
          title="Solar Energy"
          icon={<SolarPowerIcon sx={{ fontSize: "75px" }} />}
          value={currentConditions?.solarenergy}
        />
      </Grid>
    </DashboardContainer>
  );
};

export default WeatherDetail;
