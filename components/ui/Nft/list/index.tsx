import React from "react";
import { NftMeta } from "@_types/nft";

import { NftItem } from "@ui";

type NftListProps = {
  nfts: NftMeta[];
};
export const NftList: React.FC<NftListProps> = ({ nfts }) => {
  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {nfts.map((nft, index) => (
        <div
          key={index}
          className="flex flex-col rounded-lg shadow-lg overflow-hidden"
        >
          <NftItem item={nft}></NftItem>
        </div>
      ))}
    </div>
  );
};
