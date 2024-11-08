"use client";
import { useState } from "react";

import Image from "next/image";
import { cn } from "@/app/utils/cn";
import projects from "@/app/data/projects.json";
import Link from "next/link";

export function ProjectsSection() {
  const landingPageProjects = projects
    .filter((p) => p.landing_order)
    .sort((a, b) => (a.landing_order as number) - (b.landing_order as number));
  return (
    <section className="flex flex-col gap-[4rem] border-t-[.1rem] py-[5.6rem] sm:py-[12.6rem]">
      <p className="font-oswald text-[4rem] font-medium leading-none tracking-[-.03em] sm:text-[7.2rem] lg:text-[8rem]">
        Projects
      </p>
      <ListProjectCard projects={landingPageProjects} />
      <Link href="/projects"
        className="border-primary hover:text-primary self-center border-b-[.2rem] py-[.4rem] font-oswald text-[2.3rem] font-bold">
        see more
      </Link>
    </section>
  );
}

export function ListProjectCard({
  projects,
}: {
  projects: Array<{
    id: number;
    title: string;
    image: string;
    stack: string[];
    live_url: string;
    repo_url: string;
  }>;
}) {
  return (
    <div className="flex flex-col gap-[4rem] sm:flex-row sm:flex-wrap">
      {projects.map((project) => (
        <Card
          key={project.id}
          title={project.title}
          image={project.image}
          stack={project.stack}
          live_url={project.live_url}
          repo_url={project.repo_url}
        />
      ))}
    </div>
  );
}

function Card({
  title,
  image,
  stack,
  live_url,
  repo_url,
}: {
  title: string;
  image: string;
  stack: string[];
  live_url: string;
  repo_url: string;
}) {
  const [active, setActive] = useState(false);
  return (
    <div
      className="w-full leading-none sm:w-[calc(50%-2rem)]"
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
    >
      <div className="relative w-full">
        <Image
          src={`/images/projects/${image}`}
          alt={title}
          width={1080}
          height={800}
        />
        <div
          className={cn(
            "absolute left-0 top-0 hidden h-full w-full flex-col items-center justify-center space-y-[2rem] bg-[rgba(256,256,256,.5)] font-oswald text-[1.6rem] font-medium",
            active && "xl:flex",
          )}
        >
          <a
            href={live_url}
            target="_blank"
            className="border-primary hover:text-primary border-b-[.2rem] py-[1.2rem] uppercase"
          >
            view project
          </a>
          <a
            href={repo_url}
            target="_blank"
            className="border-primary hover:text-primary border-b-[.2rem] py-[1.2rem] uppercase"
          >
            view code
          </a>
        </div>
      </div>
      <p className="mt-[2.4rem] font-oswald text-[2.4rem] font-medium uppercase">
        {title}
      </p>
      <div className="text-neutral-lightgray mt-[1.2rem] flex flex-wrap gap-x-[1.6rem] gap-y-[.8rem] font-grotesk text-[1.8rem] font-medium">
        {stack.map((tech) => (
          <p key={tech} className="uppercase">
            {tech}
          </p>
        ))}
      </div>
      <div className="mt-[1.8rem] flex gap-[2.4rem] font-oswald text-[1.6rem] font-medium xl:hidden">
        <a
          href={live_url}
          target="_blank"
          className="border-primary hover:text-primary border-b-[.2rem] py-[1.2rem] uppercase"
        >
          view project
        </a>
        <a
          href={repo_url}
          target="_blank"
          className="border-primary hover:text-primary border-b-[.2rem] py-[1.2rem] uppercase"
        >
          view code
        </a>
      </div>
    </div>
  );
}
