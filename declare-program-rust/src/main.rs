use anchor_client::anchor_lang::declare_program;
use anchor_client::solana_sdk::pubkey::Pubkey;
use anchor_client::{Client, Cluster, solana_sdk::signature::Keypair};
use anchor_lang::AccountDeserialize;
use solana_client::rpc_client::RpcClient;
use solana_client::rpc_config::CommitmentConfig as RpcCommitmentConfig;
use solana_client::rpc_request::Address;
use solana_commitment_config::CommitmentConfig;
use std::rc::Rc;
use std::str::FromStr;

declare_program!(marinade);
use marinade::accounts::State;

fn main() -> anyhow::Result<()> {
    let address_string = "8szGkuLTAux9XMgZ2vtY39jVSowEcpBfFfD8hXSEqdGC";
    let state_account_pubkey = Pubkey::from_str(address_string)?;
    let payer = Rc::new(Keypair::new());
    let provider = Client::new_with_options(Cluster::Mainnet, payer, CommitmentConfig::confirmed());
    let program = provider.program(marinade::ID)?;
    let marinade_state = program.account::<State>(state_account_pubkey)?;

    println!(
        "Anchor loaded Marinade state {} account: msol mint: {}",
        state_account_pubkey, marinade_state.msol_mint
    );

    let solana_rpc_client = RpcClient::new_with_commitment(
        "https://api.mainnet-beta.solana.com",
        RpcCommitmentConfig::confirmed(),
    );
    let state_account_address = Address::from_str_const(address_string);
    let account_data = solana_rpc_client.get_account_data(&state_account_address)?;
    let marinade_state_direct = State::try_deserialize(&mut account_data.as_slice())?;

    println!(
        "Client loaded Marinade state {} account: msol mint: {}",
        state_account_address, marinade_state_direct.msol_mint
    );

    Ok(())
}
