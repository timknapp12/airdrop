import { Keypair, Connection, PublicKey } from '@solana/web3.js';
import { mintTo, getOrCreateAssociatedTokenAccount } from '@solana/spl-token';
import wallet from './dev-wallet.json';

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
// mint address was created from running the script in `spl_init.ts`
const mintAddress = new PublicKey(
  'DssiWWGJAojqsh3xZk3n2S9ezz3oQzgE7u8vhtEtJxFs'
);

(async () => {
  const associatedTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    keypair,
    mintAddress,
    keypair.publicKey
  );

  const mintSignature = await mintTo(
    connection,
    keypair,
    mintAddress,
    associatedTokenAccount.address,
    keypair,
    100e6
  );

  console.log(
    `Success! Check out your tx here: https://explorer.solana.com/tx/${mintSignature}?cluster=devnet`
  );
})();
