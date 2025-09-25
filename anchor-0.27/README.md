# Marinade Liquid Staking Anchor Program State Test

See https://blog.chalda.cz

```bash
anchor --provider.cluster mainnet idl fetch MarBmsSgKXdrN1egZf5sqe1TMai9K1rChYNDJgjq7aD > ./src/idl/marinade.json
anchor-idl-to-ts ./src/idl/marinade.json -o ./src/types/marinade.ts
```