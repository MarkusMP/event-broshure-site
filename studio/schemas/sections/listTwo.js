export default {
  name: "listTwo",
  type: "document",
  title: "Icon list Two",
  fields: [
    {
      name: "listItemsTwo",
      type: "array",
      title: "List",
      of: [{ type: "listItem" }],
    },
  ],
};
