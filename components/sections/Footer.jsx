import React from "react";
import { BsGithub } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between w-full gap-1 px-6 pt-4 mx-auto mt-8 mb-4 border-t-2">
      <div>
        <p className="flex items-center text-sm text-neutral-800">
          All rights reserved | Othman Ahmed
        </p>
      </div>

      <div className="flex items-center">
        <button>
          <a
            href="https://www.linkedin.com/in/othmanahmeddora/"
            target="_blank"
          >
            <IoLogoLinkedin className="w-8 h-8 mr-4 text-neutral-800" />
          </a>
        </button>

        <button>
          <a href="https://github.com/othmanahmeddora" target="_blank">
            <BsGithub className="h-7 w-7 text-neutral-800" />
          </a>
        </button>
      </div>
      <p className="flex items-center gap-1 text-xs text-neutral-800">
        Copyright{" "}
        <span className="flex items-center gap-1">
          <FaRegCopyright /> 2024
        </span>{" "}
      </p>
    </footer>
  );
};

export default Footer;
