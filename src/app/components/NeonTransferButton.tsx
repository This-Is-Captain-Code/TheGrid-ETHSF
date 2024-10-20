import React, { useState } from 'react';
import { PublicKey } from '@solana/web3.js';
import {
  NEON_TRANSFER_CONTRACT_DEVNET,
  neonNeonTransactionWeb3,
} from '@neonevm/token-transfer-core';
import { sendSignedTransaction, neon } from './web3';
import { Button, Typography } from '@mui/material';

const NeonTransferButton = () => {
  const [signature, setSignature] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTransfer = async () => {
    const proxyUrl = 'https://devnet.neonevm.org';
    const neonWalletAddress = ''; // Hardcoded Neon EVM wallet address
    const solanaPublicKey = new PublicKey(''); // Hardcoded Solana public key
    const amount = 10; // Amount to transfer

    try {
      // Create the transaction for NEON transfer
      const transaction = await neonNeonTransactionWeb3(
        proxyUrl,
        neonWalletAddress,
        NEON_TRANSFER_CONTRACT_DEVNET,
        solanaPublicKey,
        amount
      );

      // Log the transaction details for debugging
      console.log('Generated Transaction:', transaction);

      // Send the transaction programmatically
      const transactionSignature = await sendSignedTransaction(
        neon,
        transaction, // Pass the transaction directly
        neonWalletAddress // Ensure only the address is passed as a signer
      );

      setSignature(transactionSignature);
      console.log('Transaction successful:', transactionSignature);
    } catch (err) {
      console.error('Transfer failed', err);
      setError(err.message || 'An error occurred during the transfer.');
    }
  };

  return (
    <div>
      <Button 
        onClick={handleTransfer} 
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
        Transfer NEON
      </Button>
      {signature && <Typography variant="body1">Transaction Signature: {signature}</Typography>}
      {error && <Typography variant="body1" sx={{ color: 'red' }}>{error}</Typography>}
    </div>
  );
};

export default NeonTransferButton;
