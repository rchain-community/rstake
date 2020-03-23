
#RNODE=rnode --grpc-host 127.0.0.1 --grpc-port=30401 --grpc-port-internal=30402
RNODE=rnode --grpc-host 127.0.0.1
#PMT=--phlo-limit 10000000 --phlo-price=1 --private-key-path=deploy.sk
# RAW PRIVATE KEY! ONLY IN DEV MODE!
FUN1SK=1d9d914e70e431f1f4ed05e0dc64715265fb05168563535d2d91471e92f844da
PMT=--phlo-limit 1000000000 --phlo-price=1 --private-key=$(FUN1SK)

# https://www.gnu.org/software/make/manual/html_node/Pattern-Examples.html#Pattern-Examples
%.rho.done: %.rho
	# rnode --grpc-host 127.0.0.1 eval $< && touch $@
	# rnode --grpc-host 127.0.0.1 --grpc-port=30401 --grpc-port-internal=30402 eval $< && touch $@ >>storage-log.txt
	echo xxx | $(RNODE) deploy $(PMT) $< && \
		$(RNODE) propose --print-unmatched-sends && \
		touch $@

deploy: fun1.sk StakingPool.rho.done

# Locker.rho.done

#all: fun1.sk fun.rho.done


validator: ~/.rnode/genesis
	rnode run --no-upnp --allow-private-addresses --host 127.0.0.1 --standalone --synchrony-constraint-threshold 0.0 --validator-private-key $$(cat ~/.rnode/genesis/*.sk | tail -1)

~/.rnode/genesis:
	echo "kill (ctrl-c) this after: BondsParser$ - Created validator ..."
	rnode run -s

# https://github.com/JoshOrndorff/freshr - Start a fresh RNode with casper

# https://raw.githubusercontent.com/rchain/rchain/dev/casper/src/main/resources/Registry.rho
# https://github.com/rchain/rchain/blob/dev/casper/src/main/resources/Registry.rho

# https://github.com/rchain/rchain/blob/dev/rholang/examples/tut-registry.rho
# https://raw.githubusercontent.com/rchain/rchain/dev/rholang/examples/tut-registry.rho

deploy.sk deploy.pk:
	$(RNODE) keygen --algorithm secp256k1 --private-key-path deploy.sk --public-key-path deploy.pk

tut-registry.rho.done: tut-registry.rho

genesis-contracts: genc/Registry.rho.done genc/ListOps.rho.done genc/AuthKey.rho.done \
			genc/MakeMint.rho genc/RevVault.rho.done \
			genc/Either.rho.done genc/NonNegativeNumber.rho  

fun.rho.done: fun.rho

local-dev-node:
	rnode run -s --host 127.0.0.1 --allow-private-addresses

clean:
	rm -rf *.done genc/*.done
