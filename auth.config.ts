import { Web3sdkioAuth } from "@web3sdkio/auth/next/solana";
import { domainName } from "./const/yourDetails";

export const { Web3sdkioAuthHandler, getUser } = Web3sdkioAuth({
  privateKey: process.env.PRIVATE_KEY as string,
  domain: domainName,
});
