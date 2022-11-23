const solana = require("@solana/web3.js");
// generating new keypair in solana find public key and check balance

const a = async () => {
  const { generateKeyPair } = require("crypto");
  //const {generateKeyPair}= require('crypto');
  //console.log(solana);
  const connection = new solana.Connection(
    solana.clusterApiUrl("devnet"),
    "confirmed"
  );
  const publicKey = solana.Keypair.generate().publicKey;

  let tokenAmount = await connection.getBalance(publicKey);
  console.log(tokenAmount);

  const airdropsig = await connection.requestAirdrop(
    publicKey,
    2 * solana.LAMPORTS_PER_SOL
  );

  await connection.confirmTransaction(airdropsig);

  tokenAmount = await connection.getBalance(publicKey);
  console.log(tokenAmount);
};

a();
