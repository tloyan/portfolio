"use client";
import { useState } from "react";

import Image from "next/image";
import { cn } from "@/app/utils/cn";

export function ProjectsSection() {
  return (
    <section className="flex flex-col gap-[4rem] border-t-[.1rem] py-[5.6rem] sm:py-[12.6rem]">
      <p className="font-oswald text-[4rem] font-medium leading-none tracking-[-.03em] sm:text-[7.2rem] lg:text-[8rem]">
        Projects
      </p>
      <div className="flex flex-col gap-[4rem] sm:flex-row sm:flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

function Card() {
  const [active, setActive] = useState(false);
  return (
    <div
      className="w-full leading-none sm:w-[calc(50%-2rem)]"
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
    >
      <div className="relative w-full">
        <Image
          src="/thumbnail-project-1-large.webp"
          alt="project 1"
          width={1080}
          height={800}
        />
        <div
          className={cn(
            "hidden absolute left-0 top-0 h-full w-full flex-col items-center justify-center space-y-[2rem] bg-[rgba(256,256,256,.5)] font-oswald text-[1.6rem] font-medium",
            active && "lg:flex",
          )}
        >
          <button className="border-primary border-b-[.2rem] py-[1.2rem] uppercase hover:text-primary">
            view project
          </button>
          <button className="border-primary border-b-[.2rem] py-[1.2rem] uppercase hover:text-primary">
            view code
          </button>
        </div>
      </div>
      <p className="mt-[2.4rem] font-oswald text-[2.4rem] font-medium uppercase">
        Design Portfolio
      </p>
      <div className="text-neutral-lightgray mt-[1.2rem] flex gap-[1.6rem] font-grotesk font-medium text-[1.8rem]">
        <p>HTML</p>
        <p>CSS</p>
        <p>JAVASCRIPT</p>
      </div>
      <div className="mt-[1.8rem] flex gap-[2.4rem] font-oswald text-[1.6rem] font-medium lg:hidden">
        <button className="border-primary border-b-[.2rem] py-[1.2rem] uppercase hover:text-primary">
          view project
        </button>
        <button className="border-primary border-b-[.2rem] py-[1.2rem] uppercase hover:text-primary">
          view code
        </button>
      </div>
    </div>
  );
}
