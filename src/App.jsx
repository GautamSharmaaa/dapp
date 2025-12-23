import React, { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";
import { RequestAirdrop } from "./airdrop";
import { ShowSolBalance } from "./balance";
import { SendTokens } from "./sendToken";
import { SignMessage } from "./signMessage";


function App() {
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div>
            <WalletMultiButton />
            <WalletDisconnectButton />
            <RequestAirdrop/>
            <ShowSolBalance></ShowSolBalance>
            <SendTokens></SendTokens>
            <SignMessage></SignMessage>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;