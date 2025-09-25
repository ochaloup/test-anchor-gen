
import { Connection, Keypair, PublicKey } from '@solana/web3.js'
import { AnchorProvider, IdlAccounts, Program, Wallet } from '@coral-xyz/anchor'
import MarinadeIDL from "./idl/marinade.json"
import type { MarinadeFinance } from "./types/marinade";

const MARINADE_LIQUID_STAKE_STATE = new PublicKey("8szGkuLTAux9XMgZ2vtY39jVSowEcpBfFfD8hXSEqdGC")

export type MarinadeProgram = Program<MarinadeFinance>
export type MarinadeState = IdlAccounts<MarinadeFinance>['state']

async function main(): Promise<void> {
  const connection = new Connection("https://api.mainnet-beta.solana.com", 'confirmed')
  const keypair = Keypair.generate();
  const wallet = new Wallet(keypair);
  const provider = new AnchorProvider(
    connection,
    wallet,
    AnchorProvider.defaultOptions(),
  )
  const program = new Program<MarinadeFinance>(MarinadeIDL, provider)
  const marinadeState = await program.account.state.fetch(MARINADE_LIQUID_STAKE_STATE)

  console.log("Anchor 0.31 Marinade state:", marinadeState.msolMint.toBase58());
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});