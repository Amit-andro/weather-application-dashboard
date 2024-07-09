import React, { useState, useEffect } from "react";
import { Container, Grid, Box } from "@mui/material";
import WeatherOverview from "../WeatherOverview";
import WeeklyWeatherForecast from "../WeeklyWeatherForecast";
import WeatherDetail from "../WeatherDetail";
import SearchBox from "../SearchBox/SearchBox";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/system";
import DescriptionCard from "../DescriptionCard/DescriptionCard";
import axios from "axios";

const EventPlanner = () => {
  const [destination, setDestination] = useState("USA");
  const [weather, setWeather] = useState(null);

  const handleSearch = () => {
    axios
      .get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${destination}?unitGroup=us&key=PTHN64WQP9RRD39VYLXVWBBSZ&contentType=json
        `
      )
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the weather!", error);
      });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const capitalizedValue = value.toUpperCase();
    setDestination(capitalizedValue);
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <Container
      maxWidth="xl"
      sx={{ backgroundColor: "#121212", color: "#fff", minHeight: "100vh" }}
    >
      <Box sx={{ marginBottom: "40px", marginTop: "10px" }}></Box>
      <Grid container spacing={3}>
        <Grid>
          <SearchBox
            destination={destination}
            onChange={handleChange}
            onSearch={handleSearch}
          />
          <Grid item xs={12} md={3} sx={{ marginLeft: "10px" }}>
            <WeatherOverview weather={weather} />
          </Grid>
          <Divider sx={{ backgroundColor: "#1e1e1e", height: "0.2px" }} />
          <DescriptionCard description={weather?.days[0]?.description} />
        </Grid>
        <Divider
          sx={{ backgroundColor: "#1e1e1e", height: "85vh" }}
          orientation="vertical"
        />
        <Grid item xs={12} md={9} sx={{ marginLeft: "45px" }}>
          <WeeklyWeatherForecast weather={weather} />
          <Grid item xs={12}>
            <WeatherDetail weather={weather} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EventPlanner;
