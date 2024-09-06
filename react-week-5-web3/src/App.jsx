import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';
// import { SendTokens } from './SendTokens';
// import { SignMessage } from './SignMessage';
import { Airdrop } from './Airdrop';
function App() {
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/18enG4W4Tvm3DKduK76cMU4qB_2SsETA"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div >
            <WalletMultiButton />
            <WalletDisconnectButton />
          </div>
          {/* <RequestAirdrop />
                <ShowSolBalance /> */}
          {/* <Tokens /> */}
          {/* <SignMessage /> */}
          {/* <SendTokens /> */}
          <Airdrop />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App