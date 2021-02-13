# DRGZ
> Hedera Token Service hackathon project

## Motivation
The typical online checkout process involves multiple inputs and interactions. We wanted to remove all of the friction and pair our lightening-quick-Trello-like purchasing experience with a 'native' payment token that offers near real-time finality. **Genuine _Instant Purchases_ are now a thing!**

## What it does
When you come to the website you'll find some lovely products. You can purchase these products with DRGZ. On your first visit you'll need to 'Create an account' and then purchase some DRGZ through a mock credit / debit card transaction. Once you have some DRGZ available you can drag a product into the BUT IT NOW drop zone and the purchase happens instantly!

## Why have our own currency?
The DRGZ marketplace has its own currency, also called DRGZ! This brings some obvious benefits such as lower transaction costs. And with its own currency the DRGZ marketplace can make its own monetary decisions based on its specific interests and needs. For example it can help bootstrap liquidity... marketplaces need lots of buyers and lots of sellers, and monetary incentives can bring demand to the marketplace which is often the initial "chicken & egg" problem that marketplaces have to overcome to be successful.

## Understanding 'Finality'
The term *"finality of payment"* refers to the moment at which funds, recently transferred from one account to another, officially become the legal property of the receiving party.

*Finality* is important because when people transact they want to be confident that once their transactions go through they cannot be altered or reversed.

[Hedera](https://hedera.com/token-service) enables the transactions on our [DRGZ marketplace](https://drgz.store) to reach finality in 3 to 5 seconds!

### Why does this matter to me?
When you move money within the traditional banking system your money held in bank deposits encounters archaic legal infrastructure consisting of laws, regulations, and private contracts. And this infrastructure determines, among other things, the finality of a given transfer.

## Why Hedera Token Service?
Tokenization options on most public cryptocurrency networks force issuers to cope with high and fluctuating costs, low transaction speeds, and the constant threat of network forking. This often limits token issuance to proofs of concept and prevents enterprise or consumer scale.

With Hedera Token Service, Hedera provides the ability to issue tokens on a globally distributed public network without compromising on performance. Developers can now define and issue tokens directly to the Hedera mainnet. Tokens inherit many of the characteristics of [hbar](https://hedera.com/hbar) itself, including asynchronous byzantine fault tolerant consensus, thousands of transactions per second, and finality in a matter of seconds without a risk of forking.

## How we built it
We've connected The Hedera Token Service with our website (a nextjs site deployed to Netlify) via FaunaDB and some Netlify Functions.

We've mocked the credit card transactions so that our demo always delivers a successful payment, and this triggers our connection with Hedera to mint DRGZ tokens at a 1:1 ratio.

## What's next for DRGZ marketplace and currency
This project serves as a prototype for some bigger ideas we have, where the buying and selling of low cost items wouldn't be feasible without removing the vast majority of the usual fees involved with debit and credit card transactions. We're excited for this next chapter!

## Status

## Contact
Team formed by [Kelvin Lockwood](https://twitter.com/kelvinlockwood) - feel free to contact me!
