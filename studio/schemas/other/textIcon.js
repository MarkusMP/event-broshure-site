export default {
  name: "textIcon",
  type: "document",
  title: "Text Icon",
  fields: [
    {
      title: "Icon",
      description: "Upload icon here.",
      name: "icon",
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
    {
      name: "title",
      type: "string",
      title: "Title",
    },
  ],
};
