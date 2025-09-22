# Test Marinade State with anchor 0.31.0

Marinade Liquid Staking program is built with
[Anchor version 0.27.0](https://github.com/marinade-finance/liquid-staking-program/blob/26147376b75d8c971963da458623e646f2795e15/programs/marinade-finance/Cargo.toml#L22)
which is incompatible when one wants to use
[`anchor_client`](https://github.com/solana-foundation/anchor/blob/master/client/example/src/blocking.rs)
in newer version like 0.31.0
he will fail as the IDL format has changed and the anchor versions are not backward compatible.

To solve this problem we can use the library [`anchor-gen`](https://github.com/saber-hq/anchor-gen)
that is utility that generates from IDL the useful Rust binding to the new Anchor version.

So we take the IDL from on-chain program, we covert it to the new format and then we generate the Rust binding.
This is all prepared under the repository [`marinade-cpi`](https://github.com/saber-hq/anchor-gen/tree/master/examples/marinade-cpi).
