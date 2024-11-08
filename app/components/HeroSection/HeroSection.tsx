// import Image from "next/image";
import * as motion from "framer-motion/client";

export function HeroSection() {
  return (
    <div className="flex flex-col pb-[14rem] pt-[10rem] font-oswald">
      <div className="relative flex flex-col items-center">
        <Title />
        <div className="mt-[-1.4rem] h-[20.2rem] w-[20.2rem] rounded-[1rem] bg-slate-200 sm:mt-[-2.8rem]">
          {/* <Image src={null} alt="" /> */}
        </div>
        <h2 className="mt-[.4rem] text-center text-[2.4rem] font-medium leading-none tracking-[-.03em]">
          Frontend Engineer <br className="sm:hidden" />
          <span className="hidden sm:inline">|</span> 8 years in web
          technologies
        </h2>
      </div>
    </div>
  );
}

function Title() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "tween",
      },
    },
  };

  return (
    <motion.h1
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center text-center text-[7.2rem] font-bold uppercase leading-none tracking-[-.06em] sm:text-[11.8rem] lg:text-[14.4rem]"
    >
      <span className="flex">
        <motion.span
          initial={{
            opacity: 0,
            x: -2000,
          }}
          variants={letterVariants}
        >
          t
        </motion.span>
        <motion.span
          initial={{
            opacity: 0,
            y: -2000,
          }}
          variants={letterVariants}
        >
          h
        </motion.span>
        <motion.span
          initial={{
            opacity: 0,
            y: 2000,
          }}
          variants={letterVariants}
        >
          o
        </motion.span>
        <motion.span
          initial={{
            opacity: 0,
            y: -2000,
          }}
          variants={letterVariants}
        >
          m
        </motion.span>
        <motion.span
          initial={{
            opacity: 0,
            y: 2000,
          }}
          variants={letterVariants}
        >
          a
        </motion.span>
        <motion.span
          initial={{
            opacity: 0,
            x: 2000,
          }}
          variants={letterVariants}
        >
          s
        </motion.span>
      </span>
      <span className="flex">
        <motion.span
          initial={{
            opacity: 0,
            x: -2000,
          }}
          variants={letterVariants}
        >
          l
        </motion.span>
        <motion.span
          initial={{
            opacity: 0,
            y: -2000,
          }}
          variants={letterVariants}
        >
          o
        </motion.span>
        <motion.span
          initial={{
            opacity: 0,
            y: 2000,
          }}
          variants={letterVariants}
        >
          y
        </motion.span>
        <motion.span
          initial={{
            opacity: 0,
            y: -2000,
          }}
          variants={letterVariants}
        >
          a
        </motion.span>
        <motion.span
          initial={{
            opacity: 0,
            x: 2000,
          }}
          variants={letterVariants}
        >
          n
        </motion.span>
      </span>
    </motion.h1>
  );
}
