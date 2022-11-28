import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IBlogList, IBlogListItem } from "../../interfaces";
import { sanityClient } from "../../lib/sanity.server";

const BlogList = ({ title, description, listBlog }: IBlogList) => {
  const imageProps = (image: any) => {
    return useNextSanityImage(sanityClient, image);
  };

  return (
    <section className="py-12" id="blog">
      <div className="lg:container relative flex flex-wrap items-center justify-between px-8 mx-auto lg:justify-between">
        <div className="mx-auto">
          <h2 className="text-3xl font-semibold text-center uppercase pb-2">
            {title && title}
          </h2>
          <p className="text-xl text-center">{description && description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pt-8 gap-12">
            {listBlog.map((item: IBlogListItem) => (
              <div
                key={item._id}
                className="shadow-md md:hover:scale-105 transition-all rounded-md p-8 bg-light relative dark:bg-dark"
              >
                <Link
                  className="hover:text-primary duration-150 border-b-2 mt-[2] border-transparent hover:border-primary"
                  href={`${
                    item.__i18n_lang == "en-us" ? "/blog/" : "/sv/blog/"
                  }${item.slug.current}`}
                >
                  {item.mainImage && (
                    <Image
                      className="object-contain rounded-md"
                      src={imageProps(item.mainImage).src}
                      loader={imageProps(item.mainImage).loader}
                      alt={item.mainImage.alt}
                      width={800}
                      height={400}
                    />
                  )}
                </Link>

                <h3 className="text-lg font-semibold py-2">{item.title}</h3>
                <p className="pb-2">{item.description}</p>
                <Link
                  className="hover:text-secondary duration-150 border-b-2 mt-[2] border-transparent hover:border-secondary dark:hover:text-primary dark:hover:border-primary"
                  href={`${
                    item.__i18n_lang == "en-us" ? "/blog/" : "/sv/blog/"
                  }${item.slug.current}`}
                >
                  {item.__i18n_lang == "en-us" ? "Read More" : "Läs Mer"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
