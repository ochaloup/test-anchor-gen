use anchor_client::anchor_lang::declare_program;
use anchor_client::solana_sdk::pubkey::Pubkey;
use anchor_client::{Client, Cluster, solana_sdk::signature::Keypair};
use solana_commitment_config::CommitmentConfig;
use std::rc::Rc;
use std::str::FromStr;

declare_program!(marinade);
use marinade::accounts::State;

fn main() -> anyhow::Result<()> {
    let state_account_address = Pubkey::from_str("8szGkuLTAux9XMgZ2vtY39jVSowEcpBfFfD8hXSEqdGC")?;
    let payer = Rc::new(Keypair::new());
    let provider = Client::new_with_options(Cluster::Mainnet, payer, CommitmentConfig::confirmed());
    let program = provider.program(marinade::ID)?;
    let marinade_state = program.account::<State>(state_account_address)?;

    println!(
        "Marinade state {} account: msol mint: {}",
        state_account_address, marinade_state.msol_mint
    );

    Ok(())
}
