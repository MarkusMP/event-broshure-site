export const QUERY_HOME = `
*[_type == "home" && __i18n_lang == $language] {
      titleSEO,
      descriptionSEO,
      ogImage,
      content[] {
            ...,
            listBlog[]-> {
                  title,
                  _id,
                  slug,
                  description,
                  mainImage,
                  publishedAt,
                  __i18n_lang,
            },
            scheduleList[]-> {
                  _id,
                  date,
                  day,
                  scheduleSpeakerList[]-> {
                        description,
                        name,
                        time,
                        image,
                        title,
                        _id,
                  }
            },
            galleryList[]-> {
                  image,
                  _id,
            }
      }
}`;

export const QUERY_BLOG = `
*[_type == "blog" && slug.current == $slug && __i18n_lang == $language] {
      _id,
      title,
      ogImage,
      mainImage,
      publishedAt,
      body,
      "slug": slug.current,
      titleSEO,
      descriptionSEO,
      __i18n_lang,
}
`;
