import { Connection, Keypair, PublicKey } from '@solana/web3.js'
import { IDL as MarinadeIDL, MarinadeFinance } from './types/marinade'
import { AnchorProvider, IdlAccounts, Program, Wallet } from '@coral-xyz/anchor'
import { findBonds, findSettlements, getBondsFunding, getProgram, MARINADE_CONFIG_ADDRESS, Settlement } from '@marinade.finance/validator-bonds-sdk'
import { ProgramAccount } from '@marinade.finance/web3js-1x'

const MARINADE_LIQUID_STAKE_PROGRAM_ID = new PublicKey("MarBmsSgKXdrN1egZf5sqe1TMai9K1rChYNDJgjq7aD")
const MARINADE_LIQUID_STAKE_STATE = new PublicKey("8szGkuLTAux9XMgZ2vtY39jVSowEcpBfFfD8hXSEqdGC")
const VALIDATOR_BONDS_PROGRAM_ID = new PublicKey("vBoNdEvzMrSai7is21XgVYik65mqtaKXuSdMBJ1xkW4");

export type MarinadeProgram = Program<MarinadeFinance>
export type MarinadeState = IdlAccounts<MarinadeFinance>['state']

async function main(): Promise<void> {
  const connection = new Connection("XXXXXXXXXXXXXXXXXXXXXXXXXX", 'finalized')
  const keypair = Keypair.generate();
  const wallet = new Wallet(keypair);
  const provider = new AnchorProvider(
    connection,
    wallet,
    AnchorProvider.defaultOptions(),
  )
  // const program = new Program<MarinadeFinance>(MarinadeIDL, MARINADE_LIQUID_STAKE_PROGRAM_ID, provider)
  // const marinadeState = await program.account.state.fetch(MARINADE_LIQUID_STAKE_STATE)

  // console.log("Anchor 0.27 Marinade state:", marinadeState.msolMint.toBase58());

  const validatorBondsSdk = getProgram({
    connection,
    wallet,
    programId: VALIDATOR_BONDS_PROGRAM_ID,
  })
  const bondDataArray = await findBonds({
    program: validatorBondsSdk,
    configAccount: MARINADE_CONFIG_ADDRESS,
  })
  console.log(`Found ${bondDataArray.length} bonds`);
  const bondsAddresses = bondDataArray.map(bondData => bondData.publicKey)
  const funding = await getBondsFunding({
    program: validatorBondsSdk,
    configAccount: MARINADE_CONFIG_ADDRESS,
    bondAccounts: bondsAddresses
  })
  console.log("Validator Bonds funding:", JSON.stringify(funding, null, 2));

  const settlementDataArray: ProgramAccount<Settlement>[] = await findSettlements({
    program: validatorBondsSdk,
  })
  const settlementsGroupedByEpoch = settlementDataArray.reduce((acc, settlementData) => {
    const settlement = settlementData.account
    const epoch = settlement.epochCreatedFor.toString()
    if (!acc[epoch]) {
      acc[epoch] = []
    }
    acc[epoch].push(settlementData)
    return acc
  }, {} as Record<string, typeof settlementDataArray>)
  console.log(`Found ${settlementDataArray.length} settlements in total, grouped by epoch:`, Object.entries(settlementsGroupedByEpoch).map(([epoch, settlements]) => ({ epoch, count: settlements.length })));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});