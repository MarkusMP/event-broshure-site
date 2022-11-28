import { FaCog } from "react-icons/fa";

export default {
  name: "settings",
  type: "document",
  title: "Settings",
  i18n: true,
  icon: FaCog,
  fields: [
    {
      name: "copyright",
      type: "string",
      title: "Copyright",
    },
  ],
};
