import React, { useState } from 'react';
import { PublicKey } from '@solana/web3.js';
import {
  NEON_TRANSFER_CONTRACT_DEVNET,
  neonNeonTransaction,
} from '@neonevm/token-transfer-core';
// @ts-ignore
import { sendSignedTransaction, neon } from './web3';
import { Button, Typography } from '@mui/material';

const NeonTransferButton = () => {
  const [signature, setSignature] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTransfer = async () => {
    const proxyUrl = 'https://devnet.neonevm.org';
    const neonWalletAddress = '0x5bf46dd847bc0189bd133f654e6bffa6e9825942667173c9bc3c1dd8231086cb'; // Hardcoded Neon EVM wallet address
    const solanaPublicKey = new PublicKey('2ZvybgsN4fVq5e6beUefBXhpjXRKKJnnW3Dsn6mdFptk'); // Hardcoded Solana public key
    const amount = 10; // Amount to transfer

    try {
      // Create the transaction for NEON transfer
      // @ts-ignore
      const transaction = await neonNeonTransactionWeb3(
        proxyUrl,
        neonWalletAddress,
        NEON_TRANSFER_CONTRACT_DEVNET,
        solanaPublicKey,
        amount
      );

      // Log the transaction details for debugging
      console.log('Generated Transaction:', transaction);
      // @ts-ignore
      // Send the transaction programmatically
      const transactionSignature = await sendSignedTransaction(
        neon,
        transaction, // Pass the transaction directly
        //@ts-ignore
        neonWalletAddress // Ensure only the address is passed as a signer
      );

      setSignature(transactionSignature);
      console.log('Transaction successful:', transactionSignature);
    } catch (err) {
      console.error('Transfer failed', err);
      //@ts-ignore
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
