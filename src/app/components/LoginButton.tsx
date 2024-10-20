"use client";
import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Box } from "@mui/material";

const LoginButton: React.FC = () => {

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <WalletMultiButton />
    </Box>
  );
};

export default LoginButton;
