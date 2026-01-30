"use client";

import Image from "next/image";
import { HiMiniSignal } from "react-icons/hi2";
import { LuGithub } from "react-icons/lu";
import Link from "next/link";
import SectionHeader from "../components/SectionHeader";
import { useEffect, useState } from "react";
import axiosInstance from "../../api/config";

const Work = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/projects.json")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error.message);
        console.error("Error response:", error.response);
      });
  }, []);

  return (
    <section id="work" className="max-w-[1300px] mx-auto pt-[6rem] px-[1rem]">
      <div className="flex flex-col items-center">
        <SectionHeader title="My Work" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-[2rem] lg:gap-[4rem] mt-[4rem]">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-[.8rem] shadow-xl lg:mb-0 mb-[2rem]"
          >
            <div className="w-full h-[18rem] overflow-hidden relative">
              <Image
                src={project.img}
                width={1000}
                height={1000}
                alt="Photo of the hero section"
                className="rounded-tr-[.8rem] rounded-tl-[.8rem] h-full"
              />

              <div className="absolute top-[1rem] left-1rem z-30 w-full h-full">
                <button className="absolute bg-white/40 backdrop-blur-sm left-[1rem] w-[31px] h-[31px] cursor-pointer rounded-full">
                  <Link href={project.liveLink} target="_blank">
                    <HiMiniSignal className="w-[30px] h-[30px] p-[.3rem]" />
                  </Link>
                </button>

                <button className="absolute bg-white/40 backdrop-blur-sm w-[31px] left-[3.5rem] h-[31px] cursor-pointer rounded-full">
                  <Link href={project.githubLink} target="_blank">
                    <LuGithub className="w-[30px] h-[30px] p-[.3rem]" />
                  </Link>
                </button>
              </div>
            </div>

            <div className="p-[1.5rem]">
              <h3 className="text-[1.2rem] font-[600] mb-[.6rem]">
                {project.title}
              </h3>

              <div className="flex flex-wrap items-center gap-[1rem] mb-[1rem]">
                {project.technologies.map((tech) => (
                  <p
                    key={tech.id}
                    className="bg-neutral-800 px-[.8rem] py-[.2rem] rounded-full text-white text-[13px] font-[500]"
                  >
                    {tech.name}
                  </p>
                ))}
              </div>

              <p className="text-neutral-400">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
