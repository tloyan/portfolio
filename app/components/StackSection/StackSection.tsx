export function StackSection() {
  return (
    <section className="flex flex-col border-t-[.1rem] py-[5.6rem] leading-none sm:py-[12.6rem]">
      <div className="flex flex-col flex-wrap items-center gap-[1.2rem] text-center font-oswald text-[3.2rem] font-medium tracking-[-.03em] sm:flex-row sm:justify-between sm:gap-x-0 sm:gap-y-[7rem] sm:text-[4.8rem] xl:text-[5.6rem]">
        <p className="w-full sm:w-1/2 sm:text-start lg:w-1/3 lg:text-start">
          React
        </p>
        <p className="w-full sm:w-1/2 sm:text-start lg:w-1/3 lg:text-center">
          Next.js
        </p>
        <p className="w-full sm:w-1/2 sm:text-start lg:w-1/3 lg:text-end">
          Typescript
        </p>
        <p className="w-full sm:w-1/2 sm:text-start lg:w-1/3 lg:text-start">
          Accessibility
        </p>
        <p className="w-full sm:w-1/2 sm:text-start lg:w-1/3 lg:text-center">
          Html/Css
        </p>
        <p className="w-full sm:w-1/2 sm:text-start lg:w-1/3 lg:text-end">
          FramerMotion
        </p>
      </div>
      <div className="text-neutral-gray mt-[4rem] flex flex-wrap justify-center gap-x-[2rem] gap-y-[.8rem] font-grotesk sm:mt-[10rem] sm:justify-start sm:gap-x-[4rem] sm:gap-y-[2rem] sm:text-[2.4rem]">
        <p>GraphQL</p>
        <p>RestAPI</p>
        <p>PostgresQL</p>
        <p>MongoDB</p>
        <p>Python</p>
        <p>Algorythm</p>
        <p>Clean Code</p>
        <p>Accessibility</p>
        <p>NestJS</p>
        <p>Git</p>
        <p>AWS</p>
      </div>
    </section>
  );
}
