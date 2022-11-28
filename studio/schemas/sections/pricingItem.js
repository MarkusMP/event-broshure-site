export default {
  name: "pricingItem",
  type: "document",
  title: "Pricing",
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
      title: "Price",
      name: "price",
      type: "string",
    },
    {
      name: "textIconList",
      type: "array",
      title: "List",
      of: [{ type: "textIcon" }],
    },
    {
      title: "Button Text",
      name: "btnText",
      type: "string",
    },
  ],
};
