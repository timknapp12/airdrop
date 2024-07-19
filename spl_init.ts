import { Keypair, Connection } from '@solana/web3.js';
import { createMint } from '@solana/spl-token';
import wallet from './dev-wallet.json';

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection('https://api.devnet.solana.com', 'confirmed');

(async () => {
  const mint = await createMint(
    connection,
    keypair,
    keypair.publicKey,
    null,
    6
  );

  console.log('Mint address: ', mint.toBase58());
})();
