# rstake - toward a community operated RChain staking pool

Starting with a high-trust / low automation (plain text) contract,
several of us have started on a staking pool. We aim toward
increasingly mechanized enforcement of the contract, reducing need for
trust and increasing scalability.

See also:
  - [shared brainstorming doc](https://docs.google.com/document/d/1stYOvtQIkIARIjLv9cJC4zXbcQXl8tEC38E5yIzgW5g/edit)

## Plain Text contract

See `rstake.md`.

## Toward smart contract

See `tools/StakingPool.rho` and `tools/Makefile`.

### Integration testing

In one terminal, start a validator:

`cd tools/` and then:

 1. `make validator` and then
 2. wait for it to print some validator public keys
 3. ctrl-c to stop it
 4. _IOU more detail about wallets.txt_
 5. `make validator` again

Once your `~/.rnode/genesis/` stuff is created in step 2,
you can skip to step 5 next time.

Then, to deploy `StakingPool.rho`, do `make deploy`.


## Toward node setup with ansible

So far, we can just ping using `ansible-playbook --ask-vault-pass rnode1.yml`.

See `ansible.cfg` and `rnode1.yml`.
