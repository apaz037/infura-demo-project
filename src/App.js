import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useWeb3 } from '@openzeppelin/network/react';
import Web3Data from './components/Web3Data.js';
const secrets = require('./secrets.json')

function App() {
  const web3Context = useWeb3(`wss://mainnet.infura.io/ws/v3/${secrets.infuraProjectId}`);
  return (
    <div className="App">
      <h1>Inufra React Dapp with Components</h1>
      <Web3Data title="Web3 Data" web3Context={web3Context} />
    </div>
  );
}

export default App;
