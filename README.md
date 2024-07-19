# Rise In Bridge to Turbine

## Transaction Link from enroll.ts for final project

The link for the transaction is [here](https://explorer.solana.com/tx/38ZECGmjAbMYyC8t9DA5mvQzqhFPzmqo56sHta4C3ZzMbLmZotmhJHsJK8skuAWW15maC5eM3Rz8cKnq9NBtbmbf?cluster=devnet).

- This repo is a collection of scripts in typescript files that demonstrate different actions that can be taken on the solana blockchain

## Steps to execute each script in the repo

- after cloning the repo, run `yarn` or `npm i` in your terminal to install the necessary dependencies

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

### 5. Init SPL Token

- **Script Location**: `spl_init.ts`
- **Functionality**: This script will create a mint for an SPL token and will return a mint address that can be found on the explorer
- **Command**: Run `yarn spl_init` or `npm run spl_init` in your terminal.

### 6. Mint SPL Token

- **Script Location**: `spl_mint.ts`
- **Functionality**: This script will actually mint a certain amount of SPL tokens and will return a mint signature that can be found on the explorer
- **Command**: Run `yarn spl_mint` or `npm run spl_mint` in your terminal.

### 7. Transfer SPL Token

- **Script Location**: `spl_transfer.ts`
- **Functionality**: This script will transfer a certain amount of SPL tokens from the newly created mint account to a newly generated wallet
- **Command**: Run `yarn spl_transfer` or `npm run spl_transfer` in your terminal.

### 8. Enroll

- **Script Location**: `enroll.ts`
- **Functionality**: This script executes the program according to the IDL created by WBA as our final project to connect a githib account. The returned link for the transaction is found at the top of this `README.md`
- **Command**: Run `yarn enroll` or `npm run enroll` in your terminal.
