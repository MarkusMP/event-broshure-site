import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import React from "react";
import { IGallery, IGalleryItem } from "../../interfaces";
import { sanityClient } from "../../lib/sanity.server";

const Gallery = ({ description, title, galleryList }: IGallery) => {
  return (
    <section className="py-12" id="gallery">
      <div className="lg:container px-8 mx-auto">
        <h2 className="text-3xl font-semibold text-center uppercase pb-2">
          {title && title}
        </h2>
        <p className="text-xl text-center ">{description && description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pt-8 gap-12">
          {galleryList.map((item: IGalleryItem) => (
            <div
              key={item._id}
              className="relative h-80 max-w-80 w-full md:hover:scale-105 transition-all mx-auto rounded-md"
            >
              <Image
                className="object-cover mx-auto rounded-md"
                src={useNextSanityImage(sanityClient, item.image).src}
                loader={useNextSanityImage(sanityClient, item.image).loader}
                alt={item.image.alt}
                fill
                sizes="(max-width: 320px) 100vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
