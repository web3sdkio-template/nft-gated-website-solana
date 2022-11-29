import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { Web3sdkioProvider } from "@web3sdkio/react/solana";
import { Network } from "@web3sdkio/sdk/solana";
import type { AppProps } from "next/app";
import { domainName } from "../const/yourDetails";
import "../styles/globals.css";
require("@solana/wallet-adapter-react-ui/styles.css");

const network: Network = "devnet";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3sdkioProvider
      authConfig={{
        authUrl: "/api/auth",
        domain: domainName,
        loginRedirect: "/",
      }}
      network={network}
    >
      <WalletModalProvider>
        <Component {...pageProps} />
      </WalletModalProvider>
    </Web3sdkioProvider>
  );
}

export default MyApp;
