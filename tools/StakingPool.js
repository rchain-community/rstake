/**
 * StakingPool contract
 *
 * This is reverse-translated from StakingPool.rho as a use case for a
 * JavaScript-to-Rholang compiler in progress.
 *
 * TODO: back-translate test code.
 */

import { bundlePlus, tuple } from 'rholangSyntax';

import deployResult from 'rho:rchain:deployId';
import RevAddress from 'rho:rev:address';
import regInsert from 'rho:registry:insertArbitrary';
import registryLookup from 'rho:registry:lookup';
import stdout from 'rho:io:stdout';

const console = harden({
    log(it) { E(stdout).run(it); },
});

export default
async function main() {
    const [AuthKey, RevVault] = await Promise.all([
        E(registryLookup).run(`rho:rchain:authKey`),  // what's the default function name? apply? run? send?
        E(registryLookup).run(`rho:rchain:revVault`),
    ]);

    const StakingPool = harden({
        create(unsealer) {
            const unf = {};
            const [revVaultAuthKey, revAddr] = await Promise.all([
                E(RevAddress).fromUnforgeable(unf),
                E(RevVault).unforgeableAuthKey(unf),
            ]);
            console.log({ "new staking pool rev addr": revAddr, "authKey": revVaultAuthKey });
            const { _0: ok, _1: vault } = await E(RevVault).findOrCreate(revAddr);
            if (!ok) { return; }  // only match true
            console.log({ "vault": vault });

            /* TODO: go beyond just testing the vault mechanics... */
            const self = harden({
                redeem(targetAddr, amount, sealedOrder, _return) {
                    console.log({ "redeem target": targetAddr, "amount": amount, "sealedOrder": sealedOrder });
                    const { _0: ok, _1: order } = await E(unsealer).run(sealedOrder);
                    console.log({ "ok": ok, "order": order });
                    if (ok && order === { _0: bundlePlus(self), _1: targetAddr, _2: amount, _3: _return }) {
                        const { _0: success, _1: msg } = await E(vault).transfer(targetAddr, amount, revVaultAuthKey);
                        console.log({ "transfer success": success, "msg": msg });
                        return tuple(success, success ? null : message);
                    } else {
                        return tuple(false, "sealed order does not match");
                    }
                }
            });
            return bundlePlus(self);
        },
    });
    const uri = await E(regInsert).run(bundlePlus(StakingPool));
    console.log({ "StakingPool uri": uri });
    E(deployResult).run(uri);
}
