export default {
  name: "scheduleDays",
  type: "document",
  title: "Schedule Days",
  i18n: true,
  fields: [
    {
      name: "day",
      type: "string",
      title: "Day",
      options: {
        list: [
          { title: "Monday", value: "monday" },
          { title: "Tuesday", value: "tuesday" },
          { title: "Wednesday", value: "wednesday" },
          { title: "Thursday", value: "thursday" },
          { title: "Friday", value: "friday" },
          { title: "Saturday", value: "saturday" },
          { title: "Sunday", value: "Sunday" },
        ],
      },
    },
    {
      name: "date",
      type: "string",
      title: "Date, Example (14th July)",
    },
    {
      name: "scheduleSpeakerList",
      type: "array",
      title: "List",
      of: [{ type: "reference", to: { type: "scheduleSpeaker" } }],
    },
  ],
};
