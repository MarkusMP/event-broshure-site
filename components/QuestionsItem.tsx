import React, { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

interface IProps {
  title: string;
  description: string;
  length: number;
  index: number;
}

const QuestionsItem = ({ title, description, length, index }: IProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div onClick={() => setOpen((prevState) => !prevState)}>
      <div
        className={`${"bg-primary dark:bg-secondary text-white items-center hover:dark:bg-primary hover:bg-secondary"} p-2 transition-colors bg-primary dark:bg-secondary hover:dark:bg-primary flex justify-between text-white hover:bg-secondary cursor-pointer ${
          index == 0 ? "rounded-t-md" : ""
        } ${index + 1 == length && !open ? "rounded-b-md" : ""} ${
          index + 1 != length ? "border-b-2 border-white" : ""
        } ${open ? "border-b-2 border-white" : ""}`}
      >
        <h3 className="font-semibold">{title && title}</h3>

        {open ? (
          <SlArrowUp size={20} className="ml-2 text-white" />
        ) : (
          <SlArrowDown size={20} className="ml-2 text-white" />
        )}
      </div>
      <div
        className={`bg-secondary p-2 bg-secondary dark:bg-primary text-white  ${
          open ? "block" : "hidden"
        } ${index + 1 == length && open ? "rounded-b-md" : ""}`}
      >
        <p>{description && description}</p>
      </div>
    </div>
  );
};

export default QuestionsItem;
