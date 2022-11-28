import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { IHeader, IHeaderMenuItem } from "../interfaces";

interface IProps {
  data: IHeader;
}

export default function NavbarCenterMenu({ data }: IProps) {
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);

    if (router.locale === "en") {
      setLanguage(true);
    } else {
      setLanguage(false);
    }
  }, [router.locale]);

  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-[25px] h-[25px] text-white hover:text-primary"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-[25px] h-[25px] text-dark hover:text-primary"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  return (
    <>
      <div className="w-full dark:bg-dark">
        <nav className="lg:container relative flex flex-wrap items-center justify-between px-8 py-6 mx-auto lg:justify-between">
          {/* Logo  */}
          <Disclosure>
            {({ open }) => (
              <>
                <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                  <Link
                    href="/"
                    className="flex items-center space-x-2 text-2xl font-medium text-primary tracking-widest"
                  >
                    {data.logo && data.logo}
                  </Link>

                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="px-2 py-1 ml-auto text-primary rounded-md lg:hidden hover:text-primary focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>

                  <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden items-center">
                    <>
                      {data.menu.map((item: IHeaderMenuItem, index) => (
                        <Link
                          key={index}
                          href={`/#${item.section}`}
                          className="w-full px-4 py-2 -ml-4 text-gray-500 dark:text-gray-300 hover:text-primary dark:hover:text-primary duration-150 border-b-2 mt-[2] border-transparent hover:border-primary"
                        >
                          {item.title}
                        </Link>
                      ))}
                      <Link
                        locale={!language ? "en" : "sv"}
                        className="pr-4 text-lg font-normal hover:text-primary"
                        href={"/"}
                      >
                        {!language ? "ENG" : "SV"}
                      </Link>
                      {renderThemeChanger()}
                    </>
                  </Disclosure.Panel>
                </div>
              </>
            )}
          </Disclosure>

          {/* menu  */}
          <div className="hidden text-center lg:flex lg:items-center">
            <ul className="items-center justify-end flex-1 pt-6 lg:pt-0 list-reset lg:flex">
              {data.menu.map((item: IHeaderMenuItem, index) => (
                <li className="mr-3 nav__item" key={index}>
                  <Link
                    href={`/#${item.section}`}
                    className="inline-block px-4 py-2 text-lg font-normal light:text-gray-500 no-underline dark:text-gray-200 h hover:text-primary dark:hover:text-primary duration-150 border-b-2 mt-[2] border-transparent hover:border-primary"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden mr-3 space-x-1 lg:flex nav__item items-center">
            <Link
              locale={!language ? "en" : "sv"}
              className="px-3 py-2 text-lg font-normal hover:text-primary"
              href={"/"}
            >
              {!language ? "ENG" : "SV"}
            </Link>
            {renderThemeChanger()}
          </div>
        </nav>
      </div>
    </>
  );
}
