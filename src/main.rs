use anchor_client::anchor_lang::AccountDeserialize;
use solana_commitment_config::CommitmentConfig;
use anchor_client::{
    solana_sdk::{
        signature::Keypair,
    },
    Client, Cluster,
};
use std::rc::Rc;
use std::str::FromStr;
use anchor_client::solana_sdk::account::ReadableAccount;
use anchor_client::solana_sdk::pubkey::Pubkey;
use anyhow::anyhow;
use marinade_cpi::State;

fn main() -> anyhow::Result<()> {
    let program_id = Pubkey::from_str("MarBmsSgKXdrN1egZf5sqe1TMai9K1rChYNDJgjq7aD")?;
    let state_account_address = Pubkey::from_str("8szGkuLTAux9XMgZ2vtY39jVSowEcpBfFfD8hXSEqdGC")?;
    let payer = Rc::new(Keypair::new());
    let provider = Client::new_with_options(
        Cluster::Mainnet,
        payer,
        CommitmentConfig::confirmed(),
    );
    let program = provider.program(program_id)?;
    // let marinade_state = program.account::<State>(state_account)?;

    let marinade_state = program.rpc().get_account(&state_account_address).map_err(|_| {
        anyhow!(
            "Couldn't find marinade state account: {}",
            &state_account_address.to_string()
        )
    })?;

    let data = marinade_state.data();
    let marinade_state_deserialized = State::try_deserialize(&mut data.as_ref())?;

    println!("Marinade state account lamports: {}: {:?}", marinade_state.lamports, marinade_state_deserialized.msol_mint);

    Ok(())
}
