import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import React, { useState } from "react";
import { IScheduleSpeaker } from "../interfaces";
import { sanityClient } from "../lib/sanity.server";

interface IProps {
  speaker: IScheduleSpeaker;
  index: number;
  length: number;
}

const ScheduleItem = ({ speaker, length, index }: IProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div key={speaker._id}>
      <div
        onClick={() => setOpen(!open)}
        className={`bg-primary dark:bg-secondary hover:dark:bg-primary transition-all hover:bg-secondary cursor-pointer flex flex-col md:flex-row text-center md:text-left p-8 items-center ${
          index === 0 ? "rounded-t-md" : ""
        }
        ${index + 1 === length && !open ? "rounded-b-md" : ""}
        ${
          open
            ? "border-b-2 border-white"
            : index + 1 === length
            ? ""
            : "border-b-2 border-white"
        }`}
      >
        {speaker.image && (
          <Image
            className="object-cover inline object-cover w-16 h-16 mr-0 md:mr-4 mb-2 md:mb-0 rounded-full"
            // eslint-disable-next-line react-hooks/rules-of-hooks
            src={useNextSanityImage(sanityClient, speaker.image).src}
            // eslint-disable-next-line react-hooks/rules-of-hooks
            loader={useNextSanityImage(sanityClient, speaker.image).loader}
            alt={speaker.image.alt}
            width={70}
            height={70}
          />
        )}
        <div className="text-white">
          <h3>{speaker.time && speaker.time}</h3>
          <h4 className="py-1 md:py-0 font-bold">
            {speaker.title && speaker.title}
          </h4>
          <p>{speaker.name && speaker.name}</p>
        </div>
      </div>
      <div
        className={`p-8 bg-primary ${open ? "block" : "hidden"} ${
          index + 1 === length && open ? "rounded-b-md" : ""
        }  ${index + 1 === length ? "" : "border-b-2 border-white"}`}
      >
        <p className="text-white">
          {speaker.description && speaker.description}
        </p>
      </div>
    </div>
  );
};

export default ScheduleItem;
