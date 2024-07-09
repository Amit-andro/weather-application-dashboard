import React, { useState, useEffect } from "react";
import { Container, Grid, Box } from "@mui/material";
import WeatherOverview from "../WeatherOverview";
import WeeklyWeatherForecast from "../WeeklyWeatherForecast";
import WeatherDetail from "../WeatherDetail";
import SearchBox from "../SearchBox/SearchBox";
import Divider from "@mui/material/Divider";
import DescriptionCard from "../DescriptionCard/DescriptionCard";
import axios from "axios";

const EventPlanner = () => {
  // State variables
  const [destination, setDestination] = useState("USA"); // Default destination state
  const [weather, setWeather] = useState(null); // Weather data state

  // Function to handle search based on destination
  const handleSearch = () => {
    axios
      .get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${destination}?unitGroup=us&key=PTHN64WQP9RRD39VYLXVWBBSZ&contentType=json`
      )
      .then((response) => {
        setWeather(response.data); // Set weather data from API response
      })
      .catch((error) => {
        console.error("There was an error fetching the weather!", error); // Log any errors
      });
  };

  // Function to handle input change in the search box
  const handleChange = (e) => {
    const value = e.target.value;
    const capitalizedValue = value.toUpperCase(); // Convert input to uppercase
    setDestination(capitalizedValue); // Update destination state
  };

  // useEffect hook to fetch weather data on component mount
  useEffect(() => {
    handleSearch(); // Initial weather data fetch when component mounts
  }, []);

  return (
    <Container
      maxWidth="xl"
      sx={{ backgroundColor: "#121212", color: "#fff", minHeight: "100vh" }}
    >
      <Box sx={{ marginBottom: "40px", marginTop: "10px" }}></Box>
      <Grid container spacing={3}>
        {/* Left side of the grid */}
        <Grid>
          {/* SearchBox component to input and search for a location */}
          <SearchBox
            destination={destination}
            onChange={handleChange}
            onSearch={handleSearch}
          />
          <Grid item xs={12} md={3} sx={{ marginLeft: "10px" }}>
            {/* WeatherOverview component to display a brief overview of the weather */}
            <WeatherOverview weather={weather} />
          </Grid>
          {/* Divider for separation */}
          <Divider sx={{ backgroundColor: "#1e1e1e", height: "0.2px" }} />
          {/* DescriptionCard component to display additional weather description */}
          <DescriptionCard description={weather?.days[0]?.description} />
        </Grid>
        <Divider
          sx={{ backgroundColor: "#1e1e1e", height: "85vh" }}
          orientation="vertical"
        />
        <Grid item xs={12} md={9} sx={{ marginLeft: "45px" }}>
          {/* WeeklyWeatherForecast component to display the weekly weather forecast */}
          <WeeklyWeatherForecast weather={weather} />
          <Grid item xs={12}>
            {/* WeatherDetail component to display detailed weather information */}
            <WeatherDetail weather={weather} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EventPlanner;
