require('dotenv').config()

const {
    Client,
    PrivateKey,
    AccountId,
} = require("@hashgraph/sdk");

// console.log("PK", process.env.PRIVATE_KEY)

export const tokenId = process.env.TOKENID;
export const accountKey = PrivateKey.fromString(process.env.PRIVATE_KEY);
export const accountId = AccountId.fromString(process.env.ACCOUNT_ID);
export const client = Client.forTestnet().setOperator(accountId, accountKey);