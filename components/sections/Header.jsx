"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { links } from "@/lib/links";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header className="fixed left-0 right-0 w-full m-auto mt-[2rem] flex justify-center z-[100]">
        <nav className="hidden md:block">
          <ul className="flex gap-[2rem] font-[500] shadow-lg px-[1.8rem] py-[.7rem] bg-white/40 backdrop-blur-sm w-fit rounded-full border outline-none">
            {links.map((link) => (
              <li
                key={link.id}
                className="transition duration-300 ease-in text-neutral-400 hover:text-neutral-800"
              >
                <Link href={`#${link.path}`}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ----------------
      ---- SMALL NAV ---------
      --------------------- */}

        <nav className="relative flex justify-center w-full m-auto md:hidden">
          <div className="overflow-hidden border rounded-full shadow-xl">
            <FiMenu
              onClick={() => {
                setToggle(!toggle);
              }}
              className="mx-auto full w-[45px] h-[45px] backdrop-blur-sm p-[.3rem]"
            />
            {toggle && (
              <ul className="flex flex-col items-center gap-[2rem] absolute font-[600] top-[5rem] transform translate-x-[-43%] shadow-lg px-[5rem] py-[1.5rem] bg-white/40 backdrop-blur-sm w-fit rounded-[.8rem] border outline-none">
                {links.map((link) => (
                  <li
                    key={link.id}
                    onClick={() => {
                      setToggle(false);
                    }}
                    className="transition duration-300 ease-in text-neutral-400 hover:text-neutral-800"
                  >
                    <Link href={`#${link.path}`}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
