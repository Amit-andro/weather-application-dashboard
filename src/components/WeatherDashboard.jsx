import React, { useState, useEffect } from "react";
import { Container, Grid, Box } from "@mui/material";
import WeatherOverview from "./WeatherOverview";
import WeeklyWeatherForecast from "./WeeklyWeatherForecast";
import WeatherDetail from "./WeatherDetail";
import SearchBox from "./SearchBox/SearchBox";
import DescriptionCard from "./DescriptionCard/DescriptionCard";
import Divider from "@mui/material/Divider";
import axios from "axios";

const WeatherDashboard = () => {
  // State to store the destination (location for weather forecast)
  const [destination, setDestination] = useState("INDIA");
  // State to store the fetched weather data
  const [weather, setWeather] = useState(null);

  // Function to fetch weather data based on the destination
  const handleSearch = () => {
    axios
      .get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${destination}?unitGroup=us&key=PTHN64WQP9RRD39VYLXVWBBSZ&contentType=json`
      )
      .then((response) => {
        // Update the weather state with the fetched data
        setWeather(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the weather!", error);
      });
  };

  // Function to handle the change of the search input and update the destination state
  const handleChange = (e) => {
    const value = e.target.value;
    const capitalizedValue = value.toUpperCase();
    setDestination(capitalizedValue);
  };

  // Fetch weather data when the component mounts
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
          {/* SearchBox component to input and search for a location */}
          <SearchBox
            destination={destination}
            onChange={handleChange}
            onSearch={handleSearch}
          />

          {/* WeatherOverview component to display a brief overview of the weather */}
          <Grid item xs={12} md={3} sx={{ marginLeft: "10px" }}>
            <WeatherOverview weather={weather} />
          </Grid>

          {/* Divider for separation */}
          <Divider sx={{ backgroundColor: "#1e1e1e", height: "0.2px" }} />

          {/* DescriptionCard component to display additional weather description */}
          <DescriptionCard description={weather?.description} />
        </Grid>

        <Divider
          sx={{ backgroundColor: "#1e1e1e", height: "85vh" }}
          orientation="vertical"
        />

        <Grid item xs={12} md={9} sx={{ marginLeft: "45px" }}>
          {/* WeeklyWeatherForecast component to display the weekly weather forecast */}
          <WeeklyWeatherForecast weather={weather} />

          {/* WeatherDetail component to display detailed weather information */}
          <Grid item xs={12}>
            <WeatherDetail weather={weather} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WeatherDashboard;
