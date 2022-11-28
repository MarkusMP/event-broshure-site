export default {
  name: "blogList",
  type: "document",
  title: "Blog List",
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
      name: "listBlog",
      type: "array",
      title: "List",
      of: [{ type: "reference", to: { type: "blog" } }],
    },
  ],
};
