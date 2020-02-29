# rstake
toward community operated RChain staking pool

[shared brainstorming doc](https://docs.google.com/document/d/1stYOvtQIkIARIjLv9cJC4zXbcQXl8tEC38E5yIzgW5g/edit)

## Toward node setup with ansible

So far, we can just ping using `ansible-playbook --ask-vault-pass rnode1.yml`.

See `ansible.cfg` and `rnode1.yml`.

## Idea: Vault

https://www.vaultproject.io/docs/concepts/pgp-gpg-keybase/

$ vault operator init -address=http://127.0.0.1:8200 -key-shares=3 -key-threshold=2 -pgp-keys="keybase:dckc,keybase:jimscarver,keybase:garycoulter"
