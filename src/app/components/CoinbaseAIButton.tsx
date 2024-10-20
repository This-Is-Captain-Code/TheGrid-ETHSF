"use client";
import React from "react";
import { Box, Button } from "@mui/material";

const CoinbaseAIButton: React.FC = () => {
  const handleClick = () => {
    window.open("https://the-grid-ethsf-cdk.vercel.app/", "_blank"); // Replace with your desired URL
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Button 
        onClick={handleClick} 
        sx={{ 
          color: 'white', // Set text color to white
          backgroundColor: 'transparent', // No background color
          border: '1px solid white', // Optional: add a border for better visibility
          '&:hover': {
            backgroundColor: 'transparent', // Ensure background remains transparent on hover
          },
          padding: '10px 20px', // Optional: adjust padding
        }}
      >
        Open Coinbase AI
      </Button>
    </Box>
  );
};

export default CoinbaseAIButton;
