
import { Connection, Keypair, PublicKey } from '@solana/web3.js'
import * as generated from './types/marinade'
import { AnchorProvider, IdlAccounts, Program, Wallet } from '@coral-xyz/anchor'

const MARINADE_LIQUID_STAKE_PROGRAM_ID = new PublicKey("MarBmsSgKXdrN1egZf5sqe1TMai9K1rChYNDJgjq7aD")
const MARINADE_LIQUID_STAKE_STATE = new PublicKey("8szGkuLTAux9XMgZ2vtY39jVSowEcpBfFfD8hXSEqdGC")

export const MarinadeIDL = generated.IDL
export type Marinade = generated.MarinadeFinance
export type MarinadeProgram = Program<Marinade>
export type MarinadeState = IdlAccounts<Marinade>['state']

async function main(): Promise<void> {
  const connection = new Connection("https://api.mainnet-beta.solana.com", 'confirmed')
  const keypair = Keypair.generate();
  const wallet = new Wallet(keypair);
  const provider = new AnchorProvider(
    connection,
    wallet,
    AnchorProvider.defaultOptions(),
  )
  const program = new Program<Marinade>(MarinadeIDL, MARINADE_LIQUID_STAKE_PROGRAM_ID, provider)
  const marinadeState = await program.account.state.fetch(MARINADE_LIQUID_STAKE_STATE)

  console.log("Marinade state:", marinadeState.msolMint.toBase58());
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});