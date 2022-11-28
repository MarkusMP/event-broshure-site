import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import React from "react";
import { IList, IListItem } from "../../interfaces";
import { sanityClient } from "../../lib/sanity.server";

const List = ({ title, subTitle, listItems }: IList) => {
  return (
    <section className="py-12">
      <div className="lg:container relative flex flex-wrap items-center justify-between px-8 mx-auto lg:justify-between">
        <div className="mx-auto">
          <h2 className="text-3xl font-semibold text-center uppercase pb-2">
            {title && title}
          </h2>
          <p className="text-xl text-center ">{subTitle && subTitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pt-8 gap-12">
            {listItems &&
              listItems.map((item: IListItem) => (
                <div
                  key={item._key}
                  className="text-center md:hover:scale-105 transition-all bg-light shadow rounded-md p-8 dark:bg-dark"
                >
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
                  <h3 className="text-xl font-semibold pb-2">
                    {item.title && item.title}
                  </h3>
                  <p>{item.subTitle && item.subTitle}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default List;
