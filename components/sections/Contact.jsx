import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { GiClick } from "react-icons/gi";
import Link from "next/link";
import SectionHeader from "../components/SectionHeader";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-[1300px] mx-auto py-[6rem] px-[1rem]"
    >
      <div className="flex flex-col items-center">
        <SectionHeader title="Contact Me" />
      </div>

      <div className="flex items-start justify-center flex-col lg:flex-row gap-[4rem] mt-[5rem]">
        <div className="flex flex-1 flex-col gap-[2rem] w-full">
          <Link
            href={"mailto:othmanahmeddora@gmail.com"}
            target="_blank"
            className="flex flex-col items-center py-[1.5rem] w-full shadow-lg rounded-[.8rem]"
          >
            <MdOutlineMailOutline className="text-[1.5rem] text-neutral-800" />

            <h3 className="text-[1.1rem] mt-[.3rem] font-[500] text-neutral-800">
              Email
            </h3>

            <p className="text-neutral-400">othmanahmeddora@gmail.com</p>
          </Link>

          <Link
            href={"https://wa.me/201011889502"}
            target="_blank"
            className="flex flex-col items-center py-[1.5rem] w-full shadow-lg rounded-[.8rem]"
          >
            <FaWhatsapp className="text-[1.5rem] text-neutral-800" />

            <h3 className="text-[1.1rem] mt-[.3rem] font-[500] text-neutral-800">
              WhatsApp
            </h3>

            <p className="text-neutral-400">+0201011889502</p>
          </Link>

          <Link
            href="https://www.linkedin.com/in/othmanahmeddora/"
            target="_blank"
            className="flex flex-col items-center py-[1.5rem] w-full shadow-lg rounded-[.8rem]"
          >
            <FaLinkedin className="text-[1.5rem] text-neutral-800" />

            <h3 className="text-[1.1rem] mt-[.3rem] font-[500] text-neutral-800">
              LinkedIn
            </h3>

            <p className="text-neutral-400">
              <p className="flex items-center gap-[.5rem]">
                Click Me <GiClick />
              </p>
            </p>
          </Link>

          <Link
            href="https://github.com/OthmanAhmed7"
            target="_blank"
            className="flex flex-col items-center py-[1.5rem] w-full shadow-lg rounded-[.8rem]"
          >
            <FaGithub className="text-[1.5rem] text-neutral-800" />

            <h3 className="text-[1.1rem] mt-[.3rem] font-[500] text-neutral-800">
              GitHub
            </h3>

            <p className="text-neutral-400">
              <p className="flex items-center gap-[.5rem]">
                Click Me <GiClick />
              </p>
            </p>
          </Link>
        </div>

        <div className="flex-[1.5] w-full">
          <form
            action="https://formspree.io/f/xpqajlvn"
            method="POST"
            className="flex flex-col gap-[2rem]"
          >
            <div className="relative">
              <input
                type="text"
                name="name"
                className="w-full px-[1rem] h-[3rem] border rounded-[.8rem] border-neutral-400"
              />
              <label className="absolute top-[-.8rem] bg-white border border-white left-[1rem]">
                Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                className="w-full px-[1rem] h-[3rem] border rounded-[.8rem] border-neutral-400"
              />
              <label className="absolute top-[-.8rem] bg-white border border-white left-[1rem]">
                Email
              </label>
            </div>

            <div className="relative">
              <textarea
                name="message"
                id="message"
                className="w-full p-[1rem] h-[18rem] border rounded-[.8rem] border-neutral-400"
              ></textarea>
              <label className="absolute top-[-.8rem] bg-white border border-white left-[1rem]">
                Message
              </label>
            </div>

            <button type="submit" className="text-right">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
