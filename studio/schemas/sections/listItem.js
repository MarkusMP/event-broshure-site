export default {
  name: "listItem",
  type: "document",
  title: "Icon List Item",
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
    {
      name: "subTitle",
      type: "string",
      title: "Sub Title",
    },
  ],
};
