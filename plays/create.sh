#!/bin/sh

set -x

validator=cosmosvalconspub1zcjduepqpxgzs54ylrmuus4m8m64x0w6jyrp7v09u26d4hjuzw0xauf8u7xqhadm6k
chainName=testnet-1.17.0

ag-cosmos-helper tx staking create-validator \
  --amount=2000000uagstake \
  --broadcast-mode=block \
  --pubkey=$validator \
  --moniker="kc-strip" \
  --website="https://www.madmode.com/" \
  --details="KC Strip Staking" \
  --commission-rate="0.10" \
  --commission-max-rate="0.20" \
  --commission-max-change-rate="0.01" \
  --min-self-delegation="1" \
  --from=ag3-24 \
  --home=/keybase/private/dckc/agoric-testnet-creds \
  --keyring-backend=file \
  --chain-id=$chainName \
  --gas=auto \
  --gas-adjustment=1.4 \
  --node=http://178.62.245.23:26657 \
  --identity=8FE7514A4355FB59

