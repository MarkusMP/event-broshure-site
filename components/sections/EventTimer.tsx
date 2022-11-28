import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useCountdown } from "../../hooks/useCountDown";
import { IEventTimer } from "../../interfaces";

const EventTimer = ({ startingAt, title }: IEventTimer) => {
  const [timer, setTimer] = useState<Date>(new Date());
  const router = useRouter();

  useEffect(() => {
    setTimer(startingAt);
  }, [startingAt]);

  const [days, hours, minutes, seconds] = useCountdown(timer);

  return (
    <section className="py-12">
      <div className="lg:container relative flex flex-wrap items-center justify-between px-8 mx-auto lg:justify-between">
        <div className="mx-auto">
          <h2 className="text-3xl font-semibold text-center text-dark dark:text-white uppercase">
            {title && title}
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 pt-8 gap-12">
            <div className="bg-light shadow dark:bg-dark rounded-md p-8 text-primary text-center">
              <span className="text-6xl font-bold pb-2">{days}</span>
              <p className="text-xl font-semibold pt-2">
                {router.locale === "en" ? "Days" : "Dagar"}
              </p>
            </div>
            <div className="bg-light shadow dark:bg-dark rounded-md p-8 text-primary text-center">
              <span className="text-6xl font-bold pb-2">{hours}</span>
              <p className="text-xl font-semibold pt-2">
                {router.locale === "en" ? "Hours" : "Timmar"}
              </p>
            </div>
            <div className="bg-light shadow dark:bg-dark rounded-md p-8 text-primary text-center">
              <span className="text-6xl font-bold pb-2">{minutes}</span>
              <p className="text-xl font-semibold pt-2">
                {router.locale === "en" ? "Minutes" : "Minuter"}
              </p>
            </div>
            <div className="bg-light shadow dark:bg-dark rounded-md p-8 text-primary text-center">
              <span className="text-6xl font-bold mx-auto pb-2">{seconds}</span>
              <p className="text-xl font-semibold pt-2">
                {router.locale === "en" ? "Seconds" : "Sekunder"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTimer;
