import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children?: ReactNode;
  title?: string;
  header?: any;
  footer?: any;
};
export default function Layout({ children, header, footer }: Props) {
  return (
    <>
      <Header data={header} />
      <div className="flex flex-col">
        <main className="flex-grow">{children}</main>
      </div>
      <Footer data={footer} />
    </>
  );
}
