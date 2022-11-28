export default {
  name: "galleryItem",
  type: "document",
  title: "Gallery Item",
  fields: [
    {
      title: "Image",
      description: "Upload background image here.",
      name: "image",
      type: "image",
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
  ],
};
