"use client";

import React, { useState } from "react";
import { LuCalendarDays } from "react-icons/lu";
import SectionHeader from "../components/SectionHeader";

const Qualification = () => {
  const [type, setType] = useState("education");

  return (
    <section
      id="qualification"
      className="max-w-[1300px] mx-auto pt-[6rem] px-[1rem]"
    >
      <div className="flex flex-col items-center">
        <SectionHeader title="Experience" />
      </div>

      <div className="flex flex-col items-center">
        <div className="flex gap-[2rem] mb-[5rem]">
          <button
            onClick={() => setType("education")}
            className="px-[1.8rem] py-[.7rem] text-white bg-neutral-800 rounded-[.8rem] font-[500] text-[1.1rem] hover:text-neutral-800 hover:bg-white transition duration-300 ease-in"
          >
            Education
          </button>
          <button
            onClick={() => setType("experience")}
            className="px-[1.8rem] py-[.7rem] text-white bg-neutral-800 rounded-[.8rem] font-[500] text-[1.1rem] hover:text-neutral-800 hover:bg-white transition duration-300 ease-in"
          >
            Experience
          </button>
        </div>

        {type === "education" && (
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-[1fr,max-content,1fr] gap-x-[1rem] md:gap-x-[3rem]">
              <div className="pb-[2rem]">
                <h3 className="text-[1rem] md:text-[1.1rem] font-[500]">
                  Full-Stack (Python)
                </h3>
                <span className="text-neutral-400">
                  Information Technology <br />
                  Institute (ITI)
                </span>
                <div className="flex gap-[.5rem] items-center text-[.8rem] md:text-[1rem]">
                  <LuCalendarDays /> Mar 2025 - Present{" "}
                </div>
              </div>

              <div>
                <span className="inline-block w-[1rem] h-[1rem] bg-primary-400 rounded-full"></span>
                <span className="block w-[1px] h-[100%] bg-primary-400 transform translate-x-[7px] translate-y-[-7px]"></span>
              </div>
            </div>

            <div className="grid grid-cols-[1fr,max-content,1fr] gap-x-[1rem] md:gap-x-[3rem]">
              <div></div>

              <div>
                <span className="inline-block w-[1rem] h-[1rem] bg-primary-400 rounded-full"></span>
                <span className="block w-[1px] h-[100%] bg-primary-400 transform translate-x-[7px] translate-y-[-7px]"></span>
              </div>

              <div className="pb-[2rem]">
                <h3 className="text-[1rem] md:text-[1.1rem] font-[500]">
                  CS50x
                </h3>
                <span className="text-neutral-400">Harvard Online</span>
                <div className="flex gap-[.5rem] items-center text-[.8rem] md:text-[1rem]">
                  <LuCalendarDays /> Feb 2024 - May 2024{" "}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[1fr,max-content,1fr] gap-x-[1rem] md:gap-x-[3rem]">
              <div className="pb-[2rem]">
                <h3 className="text-[1rem] md:text-[1.1rem] font-[500]">
                  Front-end Developer
                </h3>
                <span className="text-neutral-400">LinkedIn Learning</span>
                <div className="flex gap-[.5rem] items-center text-[.8rem] md:text-[1rem]">
                  <LuCalendarDays /> Nov 2023 - jan 2024{" "}
                </div>
              </div>

              <div>
                <span className="inline-block w-[1rem] h-[1rem] bg-primary-400 rounded-full"></span>
                <span className="block w-[1px] h-[100%] bg-primary-400 transform translate-x-[7px] translate-y-[-7px]"></span>
              </div>
            </div>

            <div className="grid grid-cols-[1fr,max-content,1fr] gap-x-[1rem] md:gap-x-[3rem]">
              <div></div>

              <div>
                <span className="inline-block w-[1rem] h-[1rem] bg-primary-400 rounded-full"></span>
              </div>

              <div className="pb-[2rem]">
                <h3 className="text-[1rem] md:text-[1.1rem] font-[500]">
                  Web Development
                </h3>
                <span className="text-neutral-400">LinkedIn Learning</span>
                <div className="flex gap-[.5rem] items-center text-[.8rem] md:text-[1rem]">
                  <LuCalendarDays /> Aug 2021 - Aug 2022{" "}
                </div>
              </div>
            </div>
          </div>
        )}

        {type === "experience" && (
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-[1fr,max-content,1fr] gap-x-[1rem] md:gap-x-[3rem]">
              <div className="pb-[2rem]">
                <h3 className="text-[1rem] md:text-[1.1rem] font-[500]">
                  Frontend Developer
                </h3>
                <span className="text-neutral-400">Freelance</span>
                <div className="flex gap-[.5rem] items-center text-[.8rem] md:text-[1rem]">
                  <LuCalendarDays /> May 2024 - Present{" "}
                </div>
              </div>

              <div>
                <span className="inline-block w-[1rem] h-[1rem] bg-primary-400 rounded-full"></span>
                <span className="block w-[1px] h-[100%] bg-primary-400 transform translate-x-[7px] translate-y-[-7px]"></span>
              </div>
            </div>

            <div className="grid grid-cols-[1fr,max-content,1fr] gap-x-[1rem] md:gap-x-[3rem]">
              <div></div>

              <div>
                <span className="inline-block w-[1rem] h-[1rem] bg-primary-400 rounded-full"></span>
              </div>

              <div className="pb-[2rem]">
                <h3 className="text-[1rem] md:text-[1.1rem] font-[500]">
                  Civil Engineer
                </h3>
                <span className="text-neutral-400">
                  Egyptian Armed Forces Engineering Authority
                </span>
                <div className="flex gap-[.5rem] items-center text-[.7rem] md:text-[1rem]">
                  <LuCalendarDays /> Oct 2022 - Feb 2024{" "}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Qualification;
