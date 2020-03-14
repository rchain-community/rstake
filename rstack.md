<!----- Conversion time: 0.985 seconds.


Using this Markdown file:

1. Cut and paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β19
* Sat Mar 14 2020 08:52:00 GMT-0700 (PDT)
* Source doc: Toward an rchain-community staking pool
----->



# Toward an RChain Community Staking Pool _(or Pools?)_


## Mar 14

Let Kprivate be a secret key for the purpose of bonding to the **RChain testnet**, and Kpub be its corresponding public key, RA=1111BghN7CSDirW3oqHFinYqEo9yRpP2jH4N2aHMKR7hixnMM4W86 is the corresponding REV address. . I.e. a capability to accrue rewards in exchange for computing services to secure the RChain network.

For each REV that accrues to the RA account, let 1/3rd REV accrue to dckc, 1/3rd to jwhitescarver, and 1/3rd to garycoulter, (Steve hopes to join but is hesitant about tools).

dckc has contributed 1000REV in consideration. (Steve plans to contribute 3000) JW 200,000 GC 54,000 - total **255,000 testREV**

We acknowledge the 250,000 block epoch and the ongoing work to shorten it (JIRA #?)

And we assume the minimum staking amount for testnet is about the same as mainnet: 12K

Let RAdckc [to be chosen before bonding] be a rev address for the purpose of compensating dckc for his participation, and likewise RAjw and RAgc.

We [not yet hereby] request to bond to the rchain testnet using Kpub (or RA? whatever). &lt;- this is where we call the bonding method.

Executed this 14 March 2020

[dckc](https://keybase.io/dckc)

"e0b775d86fd207ab53c3570f4803febe988cb92ec5b354514af5a01e882b599c3c588e23378cfa87b02f92e8de6a805ca4ca61f6dd0b7caf335d117b39f2ae5d1b"

[garycoulter](https://keybase.io/garycoulter) 

214579ccfbe2d8e1825936c27f679658e0ab4224909b1d35caf14fe72439ba243e0d4939c65df7cd84a6063144799073c933dd6aea9898f63283e8cdcb9798421b

[jimscarver](https://keybase.io/jimscarver)

Cefd40ed5b5960a95960ff319444c7c27e385ff13b235dbc45bafda8e8345da12b36f9f6c17cde81527f6ea94c0e898556eaf339b81cd9556e479b61bc25cfa01c

(assuming our node is set up… a big assumption)

Time passes…

Transaction fees are routed by PoS contract to RA.

TODO: what is the trigger for dividing up the REV?

Proposal0: we get together by video, make a spreadsheet, and manually do the transfers. All 3 of us know the whole private key Kprivate; ~~we rotate who does the transfer; or~~ each of us transfers to ourselves; we trust each other to not use the key Kprivate otherwise. We can  change the method by consent. An arbitrator or arbitration process will be selected by consent.

(discussion of balance of risks…)

For later: (IOU issue in rstake)

JW offers XXX REV for insurance… if any pool is lost (hacked or whatever (judged by whom?))... from several pools.

Postpone decision process?

 Each (of, for example, 10…) pool votes… has a delegate for the ins. Council. Quorum? Majority? What about a tie? Unanimous? Simple majority; at least 6-4… (lower threshold to pay out) 2/3rds? (higher threshold).

Alternative: each on the council gives an amount of compensation, and we take the average. (or median?)

combination?


## Organizational Meeting Feb 29?

Proposed time: (comment/add proposal)



*   Saturday 8am pst ([time near you](https://www.timeanddate.com/worldclock/fixedtime.html?msg=thingy&iso=20200229T08&p1=234&ah=1&am=30)) in [https://zoom.us/j/6853551826](https://zoom.us/j/6853551826) 


## Interested participants

(feel free to add yourself):



*   [dckc](https://www.madmode.com/contact/); considering contributing
    *   [15+ years of technical organization building](https://www.w3.org/blog/2010/06/thanks-for-a-great-15-years-at/)
        *   Integrity is job #1. Therefore, until the coop demonstrates some by addressing [several issues](https://www.madmode.com/2019/rchain-blues.html), I’m not inclined to enter any agreement with them, including a bonding agreement, as that would be an endorsement of their business practices.
    *   Expertise in smart contracts, capability security, rholang; working knowledge of the [RChain core scala, rholang code](https://github.com/rchain/rchain); [decades of linux](https://www.madmode.com/2011/03/adding-server-operations-dba-to-my-bag.html)
    *   A node? [Rented colo](https://www.wholesaleinternet.net/cart/?id=274) in my home town? [frakenputer](https://www.madmode.com/2009/advogato_entry0065.html) in basement?
    *   Some REV.
        *   I am only prepared to make small financial contributions. I consider them an educational expense and I am prepared to lose them.
*   Jimscarver - $5k, up to 500k rev, testnet server
*   dsm
    *   Up to ~575k rev
    *   Own $500 slot on coop validated node
    *   No hardware yet but open to acquiring
    *   One of the original individual tezos node runners / bakers and have been operating a high performing node / baker since main net in 2018
*   A-Jay - $1k, 250k REV


## Ideas

Peer-to-peer decentralized organization: self management and sociocratic principles , peer to peer and working group agreements only. Unincorporated cooperative. Decentralized organization and collective intelligence best practices to enable cooperation at scale.

Testnet working group?



*   Testnet validator cooperation
*   Production staging
*   Application testing
*   Free test rev
*   Shard of mainnet?
*   Independent from the coop

dckc’s hardware/node SLA: if I get uncomfortable running it (e.g. too much electricity) I owe 48hrs notice before I shut it down; that gives time for someone else to take over. Private key is backed up with Shamir secret sharing.


## Reference



*   “Bonding minimum is 10,000 REV and maximum is 5,000,000 REV.” [RChain Mainnet announcement: the block height - RChain Blog](https://blog.rchain.coop/blog/2020/01/23/rchain-mainnet-announcement-the-block-height/) Jan 23, 2020
*   [Genesis Protocol Guide to creating an RChain network - Google Docs](https://docs.google.com/document/d/1Z5Of7OVVeMGl2Fw054xrwpRmDmKCC-nAoIxtIIHD-Tc/edit?pli=1#)

Jim’s machine


<table>
  <tr>
   <td><strong>Addon Type</strong>
   </td>
   <td><strong>Value</strong>
   </td>
   <td><strong>Price</strong>
   </td>
  </tr>
  <tr>
   <td colspan="2" >Plan base price
   </td>
   <td>$30.00
   </td>
  </tr>
  <tr>
   <td>Processor
   </td>
   <td>2x E5440 @ 2.83GHz 8 cores
   </td>
   <td>$0.00
   </td>
  </tr>
  <tr>
   <td>Ram
   </td>
   <td>16 GiB
   </td>
   <td>$0.00
   </td>
  </tr>
  <tr>
   <td>IPv4
   </td>
   <td>/29 IPs (5 Usable IPs)
   </td>
   <td>$0.00
   </td>
  </tr>
  <tr>
   <td>Disk
   </td>
   <td>2 TB
   </td>
   <td>$0.00
   </td>
  </tr>
  <tr>
   <td>Bandwidth
   </td>
   <td>1Gbit Port: 100TB Transfer
   </td>
   <td>$0.00
   </td>
  </tr>
  <tr>
   <td>Operating System
   </td>
   <td>Ubuntu 18.04 (Bionic)
   </td>
   <td>$0.00
   </td>
  </tr>
  <tr>
   <td colspan="2" ><p style="text-align: right">
Subtotal:</p>

   </td>
   <td>$30.00
   </td>
  </tr>
</table>


Dan’s colo machine


<table>
  <tr>
   <td><strong>Addon Type</strong>
   </td>
   <td><strong>Value</strong>
   </td>
   <td><strong>Price</strong>
   </td>
  </tr>
  <tr>
   <td colspan="2" >Plan base price
   </td>
   <td>$39.00
   </td>
  </tr>
  <tr>
   <td>Processor
   </td>
   <td>2x Opteron 6128 HE 16 cores
   </td>
   <td>$0.00
   </td>
  </tr>
  <tr>
   <td>Ram
   </td>
   <td>32 GiB
   </td>
   <td>$0.00
   </td>
  </tr>
  <tr>
   <td>Bandwidth
   </td>
   <td>1Gbit Port: 100TB Transfer
   </td>
   <td>$0.00
   </td>
  </tr>
  <tr>
   <td>Disk
   </td>
   <td>2 TB
   </td>
   <td>$0.00
   </td>
  </tr>
  <tr>
   <td>Operating System
   </td>
   <td>HP - Debian Stretch
   </td>
   <td>$0.00
   </td>
  </tr>
  <tr>
   <td colspan="2" ><p style="text-align: right">
Subtotal:</p>

   </td>
   <td>$39.00
   </td>
  </tr>
  <tr>
   <td colspan="2" ><p style="text-align: right">
Total:</p>

   </td>
   <td>$39.00
   </td>
  </tr>
</table>



<!-- Docs to Markdown version 1.0β19 -->
