export default {
  name: "imageListItem",
  type: "document",
  title: "Image List Item",
  fields: [
    {
      title: "Image",
      description: "Upload image here.",
      name: "image",
      type: "image",
      options: {
        isHighlighted: true,
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
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "subTitle",
      type: "string",
      title: "Sub Title",
    },
  ],
};
