export default {
  name: "gallery",
  type: "document",
  title: "Gallery",
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
      name: "galleryList",
      type: "array",
      title: "List",
      of: [{ type: "reference", to: { type: "galleryItem" } }],
    },
  ],
};
