import React from "react";
import { groq } from "next-sanity";
import { urlFor, usePreviewSubscription } from "../../lib/sanity";
import { getClient, sanityClient } from "../../lib/sanity.server";
import { QUERY_BLOG, QUERY_HEADER, QUERY_SETTINGS } from "../../data";
import Layout from "../../components/Layout";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";

function filterDataToSingleItem(data: any, preview: any) {
  if (!Array.isArray(data)) {
    return data;
  }

  if (data.length === 1) {
    return data[0];
  }

  if (preview) {
    return data.find((item) => item._id.startsWith(`drafts.`)) || data[0];
  }

  return data[0];
}

export async function getStaticPaths({ preview = false, locales }: any) {
  const allSlugsQuery = groq`*[defined(slug.current) && _type == "blog"]  {
    "slug": slug.current,
    __i18n_lang
  }`;
  const pages = await getClient(preview).fetch(allSlugsQuery);

  const paths = [] as any;
  pages.map((el: any) => {
    return locales.map((locale: any) => {
      if (el.__i18n_lang === "sv-se" && locale === "sv") {
        return paths.push({ params: { slug: `blog/${el.slug}` }, locale });
      } else if (el.__i18n_lang === "en-us" && locale === "en") {
        return paths.push({ params: { slug: `blog/${el.slug}` }, locale });
      } else {
        return;
      }
    });
  });

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params, preview = false, locale }: any) {
  const client = await getClient(preview);

  const query = QUERY_BLOG;
  const queryParams = {
    language: locale === "en" ? "en-us" : "sv-se",
    slug: `${params.slug}`,
  };
  const data = await client.fetch(query, queryParams);

  if (data.length === 0) {
    return { notFound: true };
  } else if (data.length > 0) {
    const { header, settings }: any = await client.fetch(
      `{
          "header": ${QUERY_HEADER},
          "settings": ${QUERY_SETTINGS},
        }`,
      queryParams
    );

    // Helper function to reduce all returned documents down to just one
    const page = filterDataToSingleItem(data, preview);

    return {
      props: {
        // Pass down the "preview mode" boolean to the client-side
        preview,
        header,
        settings,
        // Pass down the initial content, and our query
        data: { page, query, queryParams },
      },
      revalidate: 60,
    };
  }
}

export default function Page({ data, preview, header, settings }: any) {
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    // The hook will return this on first render
    // This is why it's important to fetch *draft* content server-side!
    initialData: data?.page,
    // The passed-down preview context determines whether this function does anything
    enabled: preview,
  });

  // Client-side uses the same query, so we may need to filter it down again
  const page = filterDataToSingleItem(previewData, preview);

  // Notice the optional?.chaining conditionals wrapping every piece of content?
  // This is extremely important as you can't ever rely on a single field
  // of data existing when Editors are creating new documents.
  // It'll be completely blank when they start!

  const myPortableTextComponents = {
    marks: {
      link: ({ children, value }: any) => {
        return (
          <a
            href={value.href}
            rel={"noreferrer noopener"}
            target="_blank"
            className="text-dark"
          >
            {children}
          </a>
        );
      },
    },
    types: {
      image: ({ value }: any) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const imageProps = useNextSanityImage(sanityClient, page?.mainImage);
        return (
          <Image
            className="object-cover"
            // @ts-ignore: Object is possibly 'null'.
            src={imageProps.src}
            // @ts-ignore: Object is possibly 'null'.
            loader={imageProps.loader}
            alt={value.alt}
            width={700}
            height={700}
          />
        );
      },
    },
  };

  const router = useRouter();
  if (router.isFallback) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    );
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const imageProps = useNextSanityImage(sanityClient, page?.mainImage);

  return (
    <>
      <NextSeo
        title={page?.titleSEO}
        description={page?.descriptionSEO}
        canonical={`https://event-broshure-site.vercel.app/blog/${page.slug}`}
      />
      <Layout header={header} footer={settings}>
        <section className="min-h-screen bg-primary dark:bg-secondary">
          <div className="mx-auto">
            <div className="h-60 relative">
              {page?.mainImage && (
                <Image
                  className="object-cover"
                  // @ts-ignore: Object is possibly 'null'.
                  src={imageProps.src}
                  // @ts-ignore: Object is possibly 'null'.
                  loader={imageProps.loader}
                  alt={page?.mainImage.alt}
                  fill
                  priority
                />
              )}

              <div className="w-full h-full relative">
                <div className="bg-primary bg-opacity-80 w-full h-full flex items-center rounded-md mx-auto text-center dark:bg-secondary dark:bg-opacity-80">
                  <h1 className="font-bold text-white tracking-wide text-2xl md:text-4xl pb-2 break-words w-full inline-block">
                    {page.title && page.title}
                  </h1>
                </div>
              </div>
            </div>

            <div className="py-12 lg:container px-8 mx-auto">
              <div className="prose prose-invert text-white max-w-xl mx-auto">
                {page?.body && (
                  <PortableText
                    value={page?.body}
                    components={myPortableTextComponents}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
