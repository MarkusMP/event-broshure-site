import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import React from "react";
import { IPricing, IPricingItem, ITextIconItem } from "../../interfaces";
import { sanityClient } from "../../lib/sanity.server";
import TextListItem from "../TextListItem";

const Pricing = ({ title, description, pricingList }: IPricing) => {
  return (
    <section className="py-12 bg-light dark:bg-dark" id="pricing">
      <div className="lg:container px-8 mx-auto">
        <h2 className="text-3xl font-semibold text-center uppercase pb-2">
          {title && title}
        </h2>
        <p className="text-xl text-center ">{description && description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto pt-8 gap-12">
          {pricingList.map((el: IPricingItem) => (
            <div
              key={el._key}
              className="bg-white md:hover:scale-105 transition-all dark:bg-black flex flex-col shadow-md p-8 rounded-md"
            >
              <div className="flex-grow">
                <Image
                  className="object-cover pb-2"
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  src={useNextSanityImage(sanityClient, el.icon).src}
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  loader={useNextSanityImage(sanityClient, el.icon).loader}
                  alt={el.icon.alt}
                  width={50}
                  height={50}
                />
                <h3 className="text-xl font-bold">{el.title && el.title}</h3>
                <p className="pt-2 text-2xl font-bold">
                  {el.price && el.price}
                </p>
                <div className="py-4 flex flex-col justify-center w-full">
                  {el.textIconList &&
                    el.textIconList.map((item: ITextIconItem) => (
                      <TextListItem data={item} key={item._key} />
                    ))}
                </div>
              </div>

              <button className="bg-primary text-white items-center justify-center w-full max-w-xs px-4 py-2 hover:bg-secondary transition-all font-semibold text-lg uppercase rounded-md">
                {el.btnText && el.btnText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
