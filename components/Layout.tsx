import React, { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { AiOutlineArrowUp } from "react-icons/ai";

type Props = {
  children?: ReactNode;
  title?: string;
  header?: any;
  footer?: any;
};
export default function Layout({ children, header, footer }: Props) {
  const [show, setShow] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const handleGoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Header data={header} />
      <div className="flex flex-col relative">
        <button
          onClick={handleGoTop}
          className={`flex items-center ${
            !show ? "hidden" : ""
          } justify-center fixed z-90 bottom-8 right-8 border-0 w-14 h-14 rounded-md drop-shadow-md bg-primary hover:bg-secondary dark:bg-secondary hover:dark:bg-primary transition-all text-white text-3xl font-bold`}
        >
          <AiOutlineArrowUp />
        </button>
        <main className="flex-grow">{children}</main>
      </div>
      <Footer data={footer} />
    </>
  );
}
