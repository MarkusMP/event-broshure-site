import React from "react";
import { INewsletter } from "../../interfaces";

const Newsletter = ({ title, btnText, inputText }: INewsletter) => {
  return (
    <section className="py-12 bg-light dark:bg-dark">
      <div className="lg:container px-8 mx-auto">
        <h2 className="text-3xl font-semibold text-center uppercase pb-2">
          {title && title}
        </h2>
        <form className="flex flex-col sm:flex-row pt-8 max-w-xl mx-auto">
          <input
            type="text"
            placeholder={inputText}
            className="bg-primary dark:bg-secondary focus:dark:bg-primary focus:outline-none focus:bg-secondary transition-all placeholder:text-white text-white p-3 rounded-md w-full grow-0"
          />
          <button className="w-full sm:w-36 mt-4 sm:mt-0 uppercase text-white font-semibold bg-primary hover:bg-secondary transition-all dark:bg-secondary hover:dark:bg-primary px-4 py-3 sm:py-1 rounded-md sm:ml-2 ">
            {btnText && btnText}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
