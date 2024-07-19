import { Keypair, Connection, PublicKey } from '@solana/web3.js';
import { transfer, getOrCreateAssociatedTokenAccount } from '@solana/spl-token';
import wallet from './dev-wallet.json';

const fromKeypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const toKeypair = Keypair.generate();

const connection = new Connection('https://api.devnet.solana.com', 'confirmed'); // mint address was created from running the script in `spl_init.ts`
const mintAddress = new PublicKey(
  'DssiWWGJAojqsh3xZk3n2S9ezz3oQzgE7u8vhtEtJxFs'
);

(async () => {
  const fromAssociatedTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    fromKeypair,
    mintAddress,
    fromKeypair.publicKey
  );

  const toAssociatedTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    fromKeypair,
    mintAddress,
    toKeypair.publicKey
  );

  const txSignauture = await transfer(
    connection,
    fromKeypair,
    fromAssociatedTokenAccount.address,
    toAssociatedTokenAccount.address,
    fromKeypair,
    // fromAssociatedTokenAccount.amount // to send all of the balance
    10e6
  );

  console.log(
    `Success! Check out your tx here: https://explorer.solana.com/tx/${txSignauture}?cluster=devnet`
  );
})();
