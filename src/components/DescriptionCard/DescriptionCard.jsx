import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';

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

const DescriptionCard = ({ description }) => {
  if (!description) return null;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}> 
      <DashboardItem className="descriptionCard">
        <Typography variant="subtitle1" gutterBottom>Description:</Typography>
        <Typography variant="body2">{description}</Typography>
      </DashboardItem>
    </Grid>
  );
};

export default DescriptionCard;
