import React, { useState } from 'react';

const DonateButton: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const walletAddress = '2ZvybgsN4fVq5e6beUefBXhpjXRKKJnnW3Dsn6mdFptk'; // Replace with your Solana wallet address

    const handleCopyAddress = () => {
        navigator.clipboard.writeText(walletAddress).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
        });
    };

    return (
        <button onClick={handleCopyAddress}>
            {copied ? 'Address Copied!' : 'Donate SOL'}
        </button>
    );
};

export default DonateButton;
