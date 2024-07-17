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

  const balance = await connection.getBalance(fromKeypair.publicKey);

  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: fromKeypair.publicKey,
      toPubkey: toKeyPair.publicKey,
      lamports: balance,
    })
  );

  transaction.feePayer = fromKeypair.publicKey;
  transaction.recentBlockhash = blockhash;

  const fee =
    (await connection.getFeeForMessage(transaction.compileMessage())).value ||
    0;

  // Empties the instructions array
  transaction.instructions.pop();
  console.log('balance', balance);

  transaction.add(
    SystemProgram.transfer({
      fromPubkey: fromKeypair.publicKey,
      toPubkey: toKeyPair.publicKey,
      lamports: balance - fee,
    })
  );

  try {
    const txSignature = await sendAndConfirmTransaction(
      connection,
      transaction,
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
