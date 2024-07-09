import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import rainIcon from "../assets/rain_240071.png";
import clearIcon from "../assets/moon_9231687.png";
import clearDayIcon from "../assets/sunny_136723.png";
import clearNightIcon from "../assets/cloudy-night_178339.png";
import sleetIcon from "../assets/sleet_3222742.png";
import snowIcon from "../assets/snowy_6566033.png";
import windIcon from "../assets/wind_300742.png";
import fogIcon from "../assets/mist_13882643.png";
import cloudyIcon from "../assets/summer-rain_136720.png";
import partlyCloudyDayIcon from "../assets/morning-rain_136714.png";
import partlyCloudyNightIcon from "../assets/cloudy-night_10991183.png";
import hailIcon from "../assets/hail_178341.png";
import thunderstormIcon from "../assets/storm_1946170.png";
import tornadoIcon from "../assets/tornado_1779931.png";

const iconMapping = {
  rain: rainIcon,
  clear: clearIcon,
  "clear-day": clearDayIcon,
  "clear-night": clearNightIcon,
  sleet: sleetIcon,
  snow: snowIcon,
  wind: windIcon,
  fog: fogIcon,
  cloudy: cloudyIcon,
  "partly-cloudy-day": partlyCloudyDayIcon,
  "partly-cloudy-night": partlyCloudyNightIcon,
  hail: hailIcon,
  thunderstorm: thunderstormIcon,
  tornado: tornadoIcon,
};

const convertFToC = (tempF) => ((tempF - 32) * 5) / 9;

const WeatherOverview = (weather) => {
  const icon = weather?.weather?.currentConditions?.icon;
  const iconPath = iconMapping[icon];
  const tempF = weather?.weather?.currentConditions?.temp;
  const tempC = tempF ? convertFToC(tempF).toFixed(1) : null;
  
  return (
    <Box
      position="relative"
      width="256px"
      height="200px"
      borderRadius="8px"
      padding="16px"
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        style={{ height: "100%" }}
      >
        <Grid item>
          <Typography variant="h6">{weather?.weather?.address}</Typography>
          <Typography variant="subtitle1">
            {weather?.weather?.resolvedAddress}
          </Typography>
        </Grid>
        <Grid item>
          <Box
            textAlign="left"
            display="flex"
            alignItems="left"
            flexDirection={"column"}
          >
            {iconPath && (
              <img
                src={iconPath}
                style={{ width: "80px", marginRight: "8px" }}
              />
            )}
            <Typography variant="h3">
              {tempC ? `${tempC}°C` : "N/A"}
            </Typography>
            <Box position="absolute" bottom={4} right={6} textAlign="right">
              <Typography sx={{ fontSize: "16px" }} variant="subtitle2">
                {weather?.weather?.currentConditions?.conditions}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WeatherOverview;
