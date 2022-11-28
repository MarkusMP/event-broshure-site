export default {
  name: "imageList",
  type: "document",
  title: "Image List",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "listImage",
      type: "array",
      title: "List",
      of: [{ type: "imageListItem" }],
    },
  ],
};
