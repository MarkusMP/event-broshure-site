import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import React from "react";
import { IImageList, IImageListItem } from "../../interfaces";
import { sanityClient } from "../../lib/sanity.server";

const ImageList = ({ title, description, listImage }: IImageList) => {
  return (
    <section className="py-12">
      <div className="lg:container px-8 mx-auto">
        <h2 className="text-3xl font-semibold text-center uppercase pb-2">
          {title && title}
        </h2>
        <p className="text-xl text-center ">{description && description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pt-8 gap-12">
          {listImage.map((item: IImageListItem) => (
            <div
              key={item._key}
              className="relative h-80 max-w-80 w-full md:hover:scale-105 transition-all mx-auto rounded-md"
            >
              <Image
                className="object-cover mx-auto rounded-md md:grayscale md:hover:grayscale-0 transition-all"
                // eslint-disable-next-line react-hooks/rules-of-hooks
                src={useNextSanityImage(sanityClient, item.image).src}
                // eslint-disable-next-line react-hooks/rules-of-hooks
                loader={useNextSanityImage(sanityClient, item.image).loader}
                alt={item.image.alt}
                fill
                sizes="(max-width: 320px) 100vw"
              />
              <div className="absolute bottom-0 left-0 p-4 bg-primary dark:bg-secondary text-white rounded ounded-bl-md">
                <h2 className="text-lg font-bold">
                  {item.title && item.title}
                </h2>
                <p>{item.subTitle && item.subTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageList;
