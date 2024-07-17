# Rise In Bridge to Turbine

## Transaction Link from enroll.ts for final project

The link for the transaction is [here](https://explorer.solana.com/tx/38ZECGmjAbMYyC8t9DA5mvQzqhFPzmqo56sHta4C3ZzMbLmZotmhJHsJK8skuAWW15maC5eM3Rz8cKnq9NBtbmbf?cluster=devnet).

## Steps to Execute

### 1. Key Generation

- **Script Location**: `keygen.ts`
- **Command**: Run the script using `yarn keygen` or `npm run keygen` in your terminal.
- **Output Handling**: Replace the data from the console log for the secret key into a file called `dev-wallet.json`.
- **Security Note**: Add the `dev-wallet.json` file to your `.gitignore` file to prevent it from being made public.

### 2. Airdrop

- **Script Location**: `airdrop.ts`
- **Command**: Run `yarn airdrop` or `npm run airdrop` in your terminal to airdrop some SOL into the wallet created in the previous step.

### 3. Transfer

- **Script Location**: `transfer.ts`
- **Functionality**: The script will generate a new key pair and send 1 SOL to the wallet.
- **Command**: Run `yarn transfer` or `npm run transfer` in your terminal to execute the code.

### 4. Empty Wallet

- **Script Location**: `emptyWallet.ts`
- **Functionality**: This script will use a small portion for the transaction fee and then send the rest of the SOL from one wallet to a newly created wallet.
- **Command**: Run `yarn emptyWallet` or `npm run emptyWallet` in your terminal.
