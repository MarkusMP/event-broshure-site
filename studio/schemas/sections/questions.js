export default {
  name: "questions",
  type: "document",
  title: "Questions",
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
      name: "questionsList",
      type: "array",
      title: "List",
      of: [{ type: "questionsList" }],
    },
  ],
};
