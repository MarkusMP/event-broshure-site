export default {
  name: "scheduleSpeaker",
  type: "document",
  title: "Schedule Speaker",
  i18n: true,
  fields: [
    {
      title: "Image",
      description: "Upload image here.",
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity.",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: "time",
      type: "string",
      title: "Time, Example (13:30 - 14:00)",
    },
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "title",
      type: "string",
      title: "Title short description",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
  ],
};
