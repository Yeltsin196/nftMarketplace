/* eslint-disable @next/next/no-img-element */

import type { NextPage } from "next";
import { BaseLayout, NftList } from "@ui";
import { useListedNfts } from "hooks/web3";
import { Nft } from "@_types/nft";

const Home: NextPage = () => {
  const { nfts } = useListedNfts();

  return (
    <BaseLayout>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Amazing Creatures NFTs
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Mint a NFT to get unlimited ownership forever!
            </p>
          </div>
          <NftList />
        </div>
      </div>
    </BaseLayout>
  );
};

export default Home;
