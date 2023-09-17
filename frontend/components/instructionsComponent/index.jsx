import React, { useState } from 'react';
import { ethers } from 'ethers';
import UMKMContract from '../../artifacts/contracts/UMKM.sol/UMKM.json';
import FrontPage from './FrontPage';

const CONTRACT_ADDRESS = '0xD497CE0F797A8F00A9a80e4076C4d625ED0370Ea';

function App() {
  const [web3Provider, setWeb3Provider] = useState(null);
  const [umkmContract, setUMKMContract] = useState(null);
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, UMKMContract.abi, signer);
      const address = await signer.getAddress();

      setWeb3Provider(provider);
      setUMKMContract(contract);
      setAccount(address);
    } else {
      alert('Please install MetaMask or another Ethereum wallet extension.');
    }
  };

  const contributeToCrowdfunding = async (projectIndex, value) => {
    if (!account) {
      await connectWallet();
    }

    if (umkmContract && web3Provider) {
      const valueInWei = ethers.utils.parseEther(value.toString());

      try {
        const tx = await umkmContract.contribute({ value: valueInWei });
        await tx.wait();
        alert('Contribution successful!');
      } catch (error) {
        console.error('Error contributing:', error);
        alert('Error contributing to crowdfunding.');
      }
    }
  };

  return (
    <div className="App">
      <FrontPage
        contributeToCrowdfunding={contributeToCrowdfunding}
        connectWallet={connectWallet}
        account={account}
      />
    </div>
  );
}

export default App;
