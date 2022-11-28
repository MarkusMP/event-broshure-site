export default {
  name: "list",
  type: "document",
  title: "Icon list",
  fields: [
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
    {
      name: "listItems",
      type: "array",
      title: "List",
      of: [{ type: "listItem" }],
    },
  ],
};
