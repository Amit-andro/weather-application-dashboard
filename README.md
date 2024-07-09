# Weather Application

## Overview

This application provides weather information tailored for different user categories: farmers, event planners, and travelers. Each category has a dedicated dashboard that displays current weather details, a 7-day weather forecast, and various weather-related statistics.

## Features

### Common Features
- **Search Functionality**: Users can search for weather details by entering a city and country.
- **7-Day Weather Report**: Displays day-wise weather forecast including date, temperature, and an icon representing the weather condition.
- **Weather Statistics**: Each dashboard shows the following weather metrics:
  - Wind Status
  - UV Index
  - Sunrise and Sunset times
  - Humidity
  - Visibility
  - Feels like temperature
  - Pressure
  - Solar Energy

### Farmer Dashboard
- **Default Dashboard**: This is the default view when the application loads.
- **Weather Details**: Displays weather details for the searched location.

### Event Planner Dashboard
- **Custom Dashboard**: Activated when the "Event Planner" tab is clicked.
- **Weather Details**: Displays weather details for the searched location.

### Traveler Dashboard
- **Custom Dashboard**: Activated when the "Traveler" tab is clicked.
- **Two Search Boxes**: Allows users to enter a 'from' and 'to' locations.
- **Weather Details**: Displays weather details for the 'to' location.

## Usage

### Navbar Navigation
- The application features a navbar with three tabs: Farmer, Event Planner, and Traveler.
- By default, the Farmer dashboard is displayed.

### Farmer Dashboard
- Search for a city and country to get the current weather details and 7-day forecast.
- View detailed weather statistics.

### Event Planner Dashboard
- Click on the "Event Planner" tab to switch to the event planner dashboard.
- Search for a city and country to get the current weather details and 7-day forecast.
- View detailed weather statistics.

### Traveler Dashboard
- Click on the "Traveler" tab to switch to the traveler dashboard.
- Enter the 'from' and 'to' destinations in the provided search boxes.
- Get weather details and a 7-day forecast for the 'to' destination.
- View detailed weather statistics for the 'to' destination.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Amit-andro/weather-application-dashboard.git
    ```
2. Navigate to the project directory:
    ```sh
    cd weather-application
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Start the application:
    ```sh
    npm run dev
    ```

## Technologies Used
- **Frontend**: React.js
- **API**: OpenWeatherMap API (or any other weather API)
