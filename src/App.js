import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useWeb3 } from '@openzeppelin/network/react';
const secrets = require('./secrets.json')

function App() {
  const web3Context = useWeb3(`wss://mainnet.infura.io/ws/v3/${secrets.infuraProjectId}`);
  const { networkId, networkName, providerName} = web3Context;
  return (
    <div className="App">
      <h1>Inufra/Metamask/Openzeppelin</h1>
      <div>
        Network: {networkId ? `${networkId} - ${networkName}`: 'No active connection'}
      </div>
      <div>
        Provider: {providerName}
      </div>
    </div>
  );
}

export default App;
