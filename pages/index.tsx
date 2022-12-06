import type { NextPage } from "next";
import { getClient } from "../lib/sanity.server";
import { NextSeo } from "next-seo";
import { urlFor, usePreviewSubscription } from "../lib/sanity";
import { QUERY_HEADER, QUERY_HOME, QUERY_SETTINGS } from "../data";
import Layout from "../components/Layout";
import RenderSections from "../components/RenderSections";
import { useRouter } from "next/router";

function filterDataToSingleItem(data: any, preview: any) {
  if (!Array.isArray(data)) {
    return data;
  }

  if (data.length === 1) {
    return data[0];
  }

  console.log({ preview, data });

  if (preview) {
    return data.find((item) => item._id.startsWith(`drafts.`)) || data[0];
  }

  return data[0];
}

export async function getStaticProps({ params, preview = false, locale }: any) {
  const client = await getClient(preview);

  const query = QUERY_HOME;
  const queryParams = { language: locale === "en" ? "en-us" : "sv-se" };
  const data = await client.fetch(query, queryParams);

  if (!data) return { notFound: true };

  if (data.length === 0) {
    return { notFound: true };
  } else {
    const { header, settings }: any = await client.fetch(
      `{
      "header": ${QUERY_HEADER},
      "settings": ${QUERY_SETTINGS},
    }`,
      queryParams
    );

    const page = filterDataToSingleItem(data, preview);

    return {
      props: {
        preview,
        header,
        settings,
        data: { page, query, queryParams },
      },
      revalidate: 60,
    };
  }
}
const Home: NextPage = ({ data, preview, settings, header }: any) => {
  const router = useRouter();
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    initialData: data?.page,
    enabled: preview,
  });

  const page = filterDataToSingleItem(previewData, preview);

  return (
    <>
      <NextSeo
        title={page?.titleSEO}
        description={page?.descriptionSEO}
        canonical={`https://event-broshure-site.vercel.app/${
          router.locale === "en" ? "" : "sv"
        }`}
      />
      <Layout header={header} footer={settings}>
        {page?.content && <RenderSections sections={page.content} />}
      </Layout>
    </>
  );
};

export default Home;
