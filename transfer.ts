import {
  Keypair,
  Connection,
  LAMPORTS_PER_SOL,
  SystemProgram,
  Transaction,
  sendAndConfirmTransaction,
} from '@solana/web3.js';

import wallet from './dev-wallet.json';

const fromKeypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const toKeyPair = Keypair.generate();

const connection = new Connection('https://api.devnet.solana.com', 'confirmed');

(async () => {
  // Fetch a recent blockhash so it does not time out
  const { blockhash } = await connection.getLatestBlockhash('confirmed');

  const transferInstruction = SystemProgram.transfer({
    fromPubkey: fromKeypair.publicKey,
    toPubkey: toKeyPair.publicKey,
    lamports: 1 * LAMPORTS_PER_SOL,
  });

  const tx = new Transaction().add(transferInstruction);
  tx.feePayer = fromKeypair.publicKey;
  tx.recentBlockhash = blockhash;

  try {
    const txSignature = await sendAndConfirmTransaction(
      connection,
      tx,
      [fromKeypair],
      {
        commitment: 'confirmed',
        preflightCommitment: 'confirmed',
        skipPreflight: false,
      }
    );

    console.log(`Success! Check out your TX here: 
          https://explorer.solana.com/tx/${txSignature}?cluster=devnet`);
  } catch (error) {
    console.error('Transaction failed:', error);
  }
})();
