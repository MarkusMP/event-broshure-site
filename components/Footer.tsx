import React from "react";

interface IProps {
  data: {
    copyright: string;
  };
}

const Footer = ({ data: { copyright } }: IProps) => {
  return (
    <footer className="py-4">
      <p className="text-center text-lg ">{copyright && copyright}</p>
    </footer>
  );
};

export default Footer;
