import {
  createContext,
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";

import { MetaMaskInpageProvider } from "@metamask/providers";

import { Contract, providers } from "ethers";
import { createDefaultState, loadContract, Web3State } from "./utils";
import { ethers } from "ethers";
interface web3ContextProps {
  children?: React.ReactNode;
}

const Web3Context = createContext<Web3State>(createDefaultState());

const Web3Provider: FunctionComponent<web3ContextProps> = ({ children }) => {
  const [web3Api, setWeb3Api] = useState<Web3State>(createDefaultState());

  useEffect(() => {
    async function initWeb3() {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum as any
      );
      const contract = await loadContract("NftMarket", provider);
      const ethereum = window.ethereum;
      setWeb3Api({
        ethereum: ethereum,
        provider: provider,
        contract: contract,
        isLoading: true,
      });
    }
    initWeb3();
  }, []);

  return (
    <Web3Context.Provider value={web3Api}>{children}</Web3Context.Provider>
  );
};

export function useWeb3() {
  return useContext(Web3Context);
}

export default Web3Provider;
