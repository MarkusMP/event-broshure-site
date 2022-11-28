import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import React from "react";
import { ITextIconItem } from "../interfaces";
import { sanityClient } from "../lib/sanity.server";

interface IProps {
  data: ITextIconItem;
}

const TextListItem = ({ data: { icon, title } }: IProps) => {
  return (
    <div className="flex pb-1 ">
      <Image
        className="object-cover"
        src={useNextSanityImage(sanityClient, icon).src}
        loader={useNextSanityImage(sanityClient, icon).loader}
        alt={icon.alt}
        width={25}
        height={25}
      />
      <h4 className="ml-2">{title && title}</h4>
    </div>
  );
};

export default TextListItem;
