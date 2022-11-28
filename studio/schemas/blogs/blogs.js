import React from "react";
import SlugInput from "sanity-plugin-prefixed-slug";

export default {
  name: "blog",
  title: "Blog",
  type: "document",
  i18n: true,
  fieldsets: [
    {
      title: "SEO",
      name: "seo",
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    {
      title: "Title for SEO",
      description:
        "make it as enticing as possible to convert users in social feeds and google searches. Ideally between 15 and 70 characters.",
      name: "titleSEO",
      fieldset: "seo",
      type: "string",
      validation: (Rule) =>
        Rule.max(70).warning(`A title shouldn't be more than 70 characters.`),
    },
    {
      name: "descriptionSEO",
      type: "string",
      title: "Short paragraph for SEO (meta description)",
      description: "Ideally between 70 and 160 characters",
      fieldset: "seo",

      validation: (Rule) =>
        Rule.max(160).warning(
          `A description shouldn't be more than 160 characters.`
        ),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      title: "Relative address on the website",
      description: "Defines the URL of the page in the website.",
      name: "slug",
      type: "slug",
      inputComponent: SlugInput,
      options: {
        source: "title",
        basePath: "url.com",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "description",
      title: "Description (Preview text)",
      type: "string",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity.",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
};
