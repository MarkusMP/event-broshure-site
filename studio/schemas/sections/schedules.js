export default {
  name: "schedules",
  type: "document",
  title: "Schedules",
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
      name: "scheduleList",
      type: "array",
      title: "List",
      of: [{ type: "reference", to: { type: "scheduleDays" } }],
    },
  ],
};
