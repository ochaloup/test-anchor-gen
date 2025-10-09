# Marinade Liquid Staking Anchor Program State Test

See https://blog.chalda.cz

## Use

```bash
pnpm cli
```

## Getting the IDL and generating types

```bash
avm use 0.31.0

PROGRAM_ID='MarBmsSgKXdrN1egZf5sqe1TMai9K1rChYNDJgjq7aD'

anchor --provider.cluster mainnet idl fetch $PROGRAM_ID > /tmp/marinade.json
anchor idl convert /tmp/marinade.json -o ./src/idl/marinade.json --program-id $PROGRAM_ID

anchor-idl-to-ts ./src/idl/marinade.json -o ./src/types/marinade.ts
```
