export default {
  name: "questionsList",
  type: "document",
  title: "Questions List",
  fields: [
    {
      title: "Title for internal reference",
      description:
        "This won't show up for users, just make sure you add a descriptive name which will make it easy to find this page later when adding link or searching & browsing the CMS.",
      name: "title",
      type: "string",
    },
    {
      name: "questionsListItem",
      type: "array",
      title: "List",
      of: [{ type: "questionsItem" }],
    },
  ],
};
