import { RiLayoutTop2Line } from "react-icons/ri";

export default {
  name: "header",
  type: "document",
  title: "Header Navigation",
  i18n: true,
  icon: RiLayoutTop2Line,
  fields: [
    {
      title: "Title for internal reference",
      description:
        "This won't show up for users, just make sure you add a descriptive name which will make it easy to find this page later when adding link or searching & browsing the CMS.",
      type: "string",
      name: "title",
    },
    {
      title: "Logo",
      name: "logo",
      type: "string",
    },
    {
      name: "menu",
      type: "array",
      title: "Menu Links",
      description: "Enter your menu links",
      validation: (Rule) => Rule.unique(),
      of: [
        {
          type: "object",
          fields: [
            {
              type: "string",
              name: "section",
              title: "Choose section to link",
              options: {
                list: [
                  { title: "Hero", value: "hero" },
                  { title: "Schedule", value: "schedule" },
                  { title: "Blog", value: "blog" },
                  { title: "Gallery", value: "gallery" },
                  { title: "Pricing", value: "pricing" },
                  { title: "Contact", value: "contact" },
                ],
              },
            },
            {
              type: "string",
              name: "title",
              title: "Title",
            },
          ],
          preview: {
            select: {
              title: "section",
              subtitle: "string",
            },
          },
        },
      ],
    },
  ],
};
