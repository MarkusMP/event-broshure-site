// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import header from "./navigation/header";
import home from "./pages/home";
import hero from "./sections/hero";
import eventTimer from "./sections/eventTimer";
import list from "./sections/list";
import listItem from "./sections/listItem";
import blogs from "./blogs/blogs";
import blockContent from "./blogs/blockContent";
import blogList from "./sections/blogList";
import listTwo from "./sections/listTwo";
import schedules from "./sections/schedules";
import scheduleDays from "./schedule/scheduleDays";
import scheduleSpeaker from "./schedule/scheduleSpeaker";
import imageList from "./sections/imageList";
import imageListItem from "./sections/imageListItem";
import gallery from "./sections/gallery";
import galleryItem from "./sections/galleryItem";
import questions from "./sections/questions";
import questionsItem from "./sections/questionsItem";
import questionsList from "./sections/questionsList";
import pricingItem from "./sections/pricingItem";
import pricing from "./sections/pricing";
import textIcon from "./other/textIcon";
import newsletter from "./sections/newsletter";
import contact from "./sections/contact";
import settings from "./settings";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    header,
    home,
    hero,
    eventTimer,
    list,
    listItem,
    blogs,
    blockContent,
    blogList,
    listTwo,
    schedules,
    scheduleDays,
    scheduleSpeaker,
    imageList,
    imageListItem,
    gallery,
    galleryItem,
    questions,
    questionsItem,
    questionsList,
    pricingItem,
    pricing,
    textIcon,
    newsletter,
    contact,
    settings,
  ]),
});
