import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import React from "react";
import { IListItem, IListTwo } from "../../interfaces";
import { sanityClient } from "../../lib/sanity.server";

const ListTwo = ({ listItemsTwo }: IListTwo) => {
  return (
    <section className="py-12 bg-light dark:bg-dark">
      <div className="lg:container px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
          {listItemsTwo &&
            listItemsTwo.map((item: IListItem) => (
              <div key={item._key} className="text-center">
                <Image
                  className="object-cover mx-auto pb-2"
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  src={useNextSanityImage(sanityClient, item.icon).src}
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  loader={useNextSanityImage(sanityClient, item.icon).loader}
                  alt={item.icon.alt}
                  width={60}
                  height={60}
                />
                <h3 className="text-lg font-semibold pb-2">
                  {item.title && item.title}
                </h3>
                <p>{item.subTitle && item.subTitle}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ListTwo;
