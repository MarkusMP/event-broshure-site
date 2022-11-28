export default {
  name: "pricing",
  type: "document",
  title: "Pricing",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      title: "Description",
      name: "description",
      type: "string",
    },
    {
      name: "pricingList",
      type: "array",
      title: "List",
      of: [{ type: "pricingItem" }],
    },
  ],
};
