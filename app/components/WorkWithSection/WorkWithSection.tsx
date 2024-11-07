"use client";

import {
  Franprix,
  Monoprix,
  Porsche,
  Lacentrale,
} from "@/app/icons/BrandIcons";
import { cn } from "@/app/utils/cn";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"
import workwithDatas from "@/app/data/workwith.json"

export function WorkWithSection() {
  const [id, setId] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("in Interval")
      if (id == 4) setId(1)
      else setId(id + 1)
    }, 10000)

    return () => clearTimeout(timeout)
  }, [id])

  const data = workwithDatas.find((i) => i.id == id);
  return (
    <section className="border-t-[.1rem] py-[5.6rem] sm:py-[12.6rem]">
      <div className="flex w-full flex-wrap items-center justify-center gap-x-[5vw] gap-y-[3vw] sm:flex-nowrap">
        <Monoprix
          className={cn("w-[40%] hover:cursor-pointer", id !== 1 && "fill-neutral-lightgray")}
          onClick={() => setId(1)}
        />
        <Franprix
          className={cn("w-[40%] hover:cursor-pointer", id !== 2 && "fill-neutral-lightgray")}
          onClick={() => setId(2)}
        />
        <Porsche
          className={cn("w-[40%] hover:cursor-pointer", id !== 3 && "fill-neutral-lightgray")}
          onClick={() => setId(3)}
        />
        <Lacentrale
          className={cn("w-[40%] hover:cursor-pointer", id !== 4 && "fill-neutral-lightgray")}
          onClick={() => setId(4)}
        />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut" }}
          className="mt-[4rem] flex flex-col items-center sm:mt-[rem] sm:items-start"
        >
          <p className="text-center font-oswald text-[1.8rem] font-bold leading-none tracking-[-.03] sm:text-[2.4rem]">
            {data?.title}
          </p>
          <div className="text-neutral-gray mt-[1.2rem] flex flex-wrap items-center justify-center gap-x-[1.6rem] gap-y-[.4rem] font-grotesk text-[1.2rem] font-medium leading-none sm:mt-[1.6rem] sm:text-[1.6rem]">
            {data?.stack.map((name) => <p key={name}>{name}</p>)}
          </div>
          <p className="mt-[1.6rem] text-center font-grotesk text-[1.4rem] sm:mt-[2.4rem] sm:text-start sm:text-[1.8rem]">
            {data?.description}
          </p>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}