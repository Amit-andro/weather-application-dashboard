import React, { useState, useEffect } from "react";
import { Container, Grid, Box } from "@mui/material";
import WeatherOverview from "../WeatherOverview";
import WeeklyWeatherForecast from "../WeeklyWeatherForecast";
import WeatherDetail from "../WeatherDetail";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/system";
import PageviewIcon from "@mui/icons-material/Pageview";
import axios from "axios";

const Travelers = () => {
  const [fromDestination, setFromDestination] = useState("INDIA");
  const [toDestination, setToDestination] = useState("USA");
  const [fromWeather, setFromWeather] = useState(null);
  const [toWeather, setToWeather] = useState(null);

  const handleSearch = (destination, setWeatherState) => {
    axios
      .get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${destination}?unitGroup=us&key=PTHN64WQP9RRD39VYLXVWBBSZ&contentType=json`
      )
      .then((response) => {
        setWeatherState(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the weather!", error);
      });
  };

  const handleChange = (e, setDestinationState) => {
    const value = e.target.value;
    const capitalizedValue = value.toUpperCase();
    setDestinationState(capitalizedValue);
  };

  useEffect(() => {
    handleSearch(fromDestination, setFromWeather);
    handleSearch(toDestination, setToWeather);
  }, []);

  const IconBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1rem",
    fontSize: "2rem",
  });

  return (
    <Container
      maxWidth="xl"
      sx={{ backgroundColor: "#121212", color: "#fff", minHeight: "100vh" }}
    >
      <Box sx={{ marginTop: "50px" }}>
        <Grid container spacing={3}>
          <Grid
            container
            alignItems="center"
            spacing={1}
            sx={{ marginLeft: "5px" }}
          >
            <Grid sx={{ marginLeft: "20px" }}>
              <Grid item>
                <input
                  type="text"
                  value={fromDestination}
                  onChange={(e) => handleChange(e, setFromDestination)}
                  placeholder="Enter from destination"
                  style={{
                    padding: "8px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    marginRight: "8px",
                    width: "200px",
                  }}
                />
              </Grid>
              <Grid item sx={{ marginTop: "10px" }}>
                <input
                  type="text"
                  value={toDestination}
                  onChange={(e) => handleChange(e, setToDestination)}
                  placeholder="Enter to destination"
                  style={{
                    padding: "8px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    marginRight: "8px",
                    width: "200px",
                  }}
                />
              </Grid>
            </Grid>
            <Grid item className="searchIcon">
              <button
                onClick={() => {
                  handleSearch(fromDestination, setFromWeather);
                  handleSearch(toDestination, setToWeather);
                }}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  //   marginTop: "20px",
                }}
              >
                <IconBox>
                  <PageviewIcon sx={{ fontSize: "35px" }} />
                </IconBox>
              </button>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={3}>
        <Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{ marginLeft: "10px", marginTop: "15px" }}
          >
            <WeatherOverview weather={fromWeather} />
          </Grid>
          <Divider sx={{ backgroundColor: "#1e1e1e", height: "0.2px" }} />
          <Grid item xs={12} md={3} sx={{ marginLeft: "10px" }}>
            <WeatherOverview weather={toWeather} />
          </Grid>
        </Grid>
        <Divider
          sx={{ backgroundColor: "#1e1e1e", height: "85vh" }}
          orientation="vertical"
        />
        <Grid item xs={12} md={9} sx={{ marginLeft: "45px" }}>
          <WeeklyWeatherForecast weather={toWeather} />
          <Grid item xs={12}>
            <WeatherDetail weather={toWeather} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Travelers;
