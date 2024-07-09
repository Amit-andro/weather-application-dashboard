import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';

// Styling the Paper component with custom styles using MUI's styled API
const DashboardItem = styled(Paper)({
  padding: "1rem",
  backgroundColor: "#1e1e1e",
  color: "#ffffff",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start", 
  wordWrap: "break-word",
  width: "100%", 
  boxSizing: "border-box", 
});

// Functional component for rendering a description card
const DescriptionCard = ({ description }) => {
  // Render nothing if description is not provided
  if (!description) return null;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}> 
      {/* Applying the styled Paper component with custom styles */}
      <DashboardItem className="descriptionCard">
        {/* Typography components for displaying description */}
        <Typography variant="subtitle1" gutterBottom>Description:</Typography>
        <Typography variant="body2">{description}</Typography>
      </DashboardItem>
    </Grid>
  );
};

export default DescriptionCard;
