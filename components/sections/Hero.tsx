import Image from "next/image";
import React from "react";
import { IHero } from "../../interfaces";
import { useNextSanityImage } from "next-sanity-image";
import { sanityClient } from "../../lib/sanity.server";
import Link from "next/link";

const Hero = ({ title, image, description }: IHero) => {
  const imageProps = useNextSanityImage(sanityClient, image);
  return (
    <section id="hero" className="relative py-24">
      <Image
        className="object-cover"
        src={imageProps.src}
        loader={imageProps.loader}
        alt={image.alt}
        fill
        priority
      />
      <div className="lg:container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between">
        <div className="bg-white bg-opacity-90 rounded-md mx-auto p-8 text-center dark:bg-dark dark:bg-opacity-90 block">
          <h1 className="font-bold tracking-wide text-2xl md:text-4xl pb-2 break-words w-full inline-block">
            {title && title}
          </h1>
          <p className="font-normal text-lg font-semibold break-words w-full inline-block">
            {description && description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
