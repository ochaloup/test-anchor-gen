use anchor_client::anchor_lang::AccountDeserialize;
use anchor_client::solana_sdk::account::ReadableAccount;
use anchor_client::solana_sdk::pubkey::Pubkey;
use anchor_client::{Client, Cluster, solana_sdk::signature::Keypair};
use anyhow::anyhow;
use marinade_cpi::State;
use solana_commitment_config::CommitmentConfig;
use std::rc::Rc;
use std::str::FromStr;

fn main() -> anyhow::Result<()> {
    let program_id = Pubkey::from_str("MarBmsSgKXdrN1egZf5sqe1TMai9K1rChYNDJgjq7aD")?;
    let state_account_address = Pubkey::from_str("8szGkuLTAux9XMgZ2vtY39jVSowEcpBfFfD8hXSEqdGC")?;
    let payer = Rc::new(Keypair::new());
    let provider = Client::new_with_options(Cluster::Mainnet, payer, CommitmentConfig::confirmed());
    let program = provider.program(program_id)?;
    // let marinade_state = program.account::<State>(state_account)?;

    let marinade_state = program
        .rpc()
        .get_account(&state_account_address)
        .map_err(|_| {
            anyhow!(
                "Couldn't find marinade state account: {}",
                &state_account_address.to_string()
            )
        })?;

    let data = marinade_state.data();
    let marinade_state_deserialized = State::try_deserialize(&mut data.as_ref())?;

    let marinade_state_2: State = program.account(state_account_address)?;

    println!(
        "Marinade state account lamports: {}: msol mint: {} and msol mint 2: {}",
        marinade_state.lamports, marinade_state_deserialized.msol_mint, marinade_state_2.msol_mint
    );

    Ok(())
}
