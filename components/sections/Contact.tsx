import { useRouter } from "next/router";
import React, { useState } from "react";
import { IContact } from "../../interfaces";

const Contact = ({ title, btnText, description }: IContact) => {
  const router = useRouter();
  return (
    <section className="py-12" id="contact">
      <div className="lg:container px-8 mx-auto">
        <h2 className="text-3xl font-semibold text-center uppercase pb-2">
          {title && title}
        </h2>
        <p className="text-xl text-center ">{description && description}</p>
        <form className="pt-8 max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row w-full">
            <div className="w-full sm:w-2/3 sm:mr-2">
              <label className="font-semibold" htmlFor="name">
                {router.locale === "sv" ? "Namn" : "Name"} *
              </label>
              <input
                type="text"
                placeholder={router.locale === "sv" ? "Namn" : "Name"}
                name="name"
                className="bg-primary my-2 dark:bg-secondary focus:dark:bg-primary focus:outline-none focus:bg-secondary transition-all placeholder:text-white text-white p-3 rounded-md w-full grow-0"
              />
            </div>
            <div className="w-full sm:w-2/3 sm:ml-2">
              <label className="font-semibold" htmlFor="email">
                {router.locale === "sv" ? "Email" : "Email"} *
              </label>
              <input
                type="email"
                placeholder={router.locale === "sv" ? "Email" : "Email"}
                name="email"
                className="bg-primary my-2 dark:bg-secondary focus:dark:bg-primary focus:outline-none focus:bg-secondary transition-all placeholder:text-white text-white p-3 rounded-md w-full grow-0"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="font-semibold" htmlFor="subject">
              {router.locale === "sv" ? "Ämne" : "Subject"} *
            </label>
            <input
              type="text"
              placeholder={router.locale === "sv" ? "Ämne" : "Subject"}
              name="subject"
              className="bg-primary my-2 dark:bg-secondary focus:dark:bg-primary focus:outline-none focus:bg-secondary transition-all placeholder:text-white text-white p-3 rounded-md w-full grow-0"
            />
          </div>
          <div className="w-full">
            <label className="font-semibold" htmlFor="message">
              {router.locale === "sv" ? "Meddelande" : "Message"} *
            </label>
            <textarea
              placeholder={
                router.locale === "sv" ? "Meddelande..." : "Message..."
              }
              name="message"
              className="bg-primary my-2 dark:bg-secondary focus:dark:bg-primary focus:outline-none focus:bg-secondary transition-all placeholder:text-white text-white p-3 rounded-md w-full grow-0"
            />
          </div>
          <button className="bg-primary my-4 hover:bg-secondary dark:bg-secondary hover:dark:bg-primary  text-white items-center justify-center w-full my-2 px-4 py-3 transition-all font-semibold uppercase rounded-md">
            {btnText && btnText}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
