import React, { useEffect, useState } from "react";
import { IScheduleDay, ISchedules, IScheduleSpeaker } from "../../interfaces";
import ScheduleItem from "../ScheduleItem";

const Schedules = ({ title, description, scheduleList }: ISchedules) => {
  const [dayz, setDay] = useState("monday");
  const [speakers, setSpeakers] = useState<IScheduleSpeaker[]>([]);

  useEffect(() => {
    if (scheduleList) {
      scheduleList.map((el: IScheduleDay) => {
        if (dayz === el.day) {
          setSpeakers(el.scheduleSpeakerList);
        }
      });
    }
  }, [dayz, scheduleList, speakers]);

  return (
    <section className="py-12 bg-light dark:bg-dark" id="schedule">
      <div className="lg:container px-8 mx-auto">
        <h2 className="text-3xl font-semibold text-center uppercase pb-2">
          {title && title}
        </h2>
        <p className="text-xl text-center">{description && description}</p>
        <div className="pt-8 max-w-4xl mx-auto flex flex-col md:flex-row">
          <div className="w-full md:w-80 pb-8 md:pb-0 mx-auto md:mr-auto">
            {scheduleList.map((day: IScheduleDay, index) => (
              <div
                onClick={() => setDay(day.day)}
                key={day._id}
                className={`${
                  dayz === day.day
                    ? "bg-secondary dark:bg-primary"
                    : "bg-primary dark:bg-secondary hover:dark:bg-primary hover:bg-secondary"
                } px-8 w-full max-w-full text-center md:text-left transition-all py-4 bg-primary dark:bg-secondary hover:dark:bg-primary md:max-w-fit text-white hover:bg-secondary cursor-pointer ${
                  index == 0 ? "rounded-t-md" : ""
                } ${index + 1 == scheduleList.length ? "rounded-b-md" : ""} ${
                  index + 1 != scheduleList.length
                    ? "border-b-2 border-white"
                    : ""
                }`}
              >
                <h3 className="pb-2 text-lg font-semibold capitalize">
                  {day.day && day.day}
                </h3>
                <p>{day.date && day.date}</p>
              </div>
            ))}
          </div>
          <div className="w-full">
            {speakers.length > 0 &&
              speakers.map((speaker: IScheduleSpeaker, index) => (
                <ScheduleItem
                  speaker={speaker}
                  key={speaker._id}
                  index={index}
                  length={speakers.length}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedules;
