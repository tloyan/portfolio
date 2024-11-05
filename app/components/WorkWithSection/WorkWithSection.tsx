import {
  Franprix,
  Monoprix,
  Porsche,
  Lacentrale,
} from "@/app/icons/BrandIcons";

export function WorkWithSection() {
  return (
    <section className="border-t-[.1rem] py-[5.6rem] sm:py-[12.6rem]">
      <div className="flex w-full flex-wrap items-center justify-center gap-x-[5vw] gap-y-[3vw] sm:flex-nowrap">
        <Monoprix className="w-[40%]" />
        <Franprix className="w-[40%]" />
        <Porsche className="w-[40%]" />
        <Lacentrale className="w-[40%]" />
      </div>
      <div className="mt-[4rem] flex flex-col items-center sm:mt-[rem] sm:items-start">
        <p className="text-center font-oswald text-[1.8rem] font-bold leading-none tracking-[-.03] sm:text-[2.4rem]">
          Creation de la version actuelle du site web
        </p>
        <div className="mt-[1.2rem] flex flex-wrap items-center justify-center gap-x-[1.6rem] gap-y-[.4rem] font-grotesk text-[1.2rem] font-medium leading-none sm:mt-[1.6rem] sm:text-[1.6rem] text-neutral-gray">
          <p>Javascript</p>
          <p>ReactJS</p>
          <p>GraphQL</p>
          <p>Google Cloud Platform</p>
        </div>
        <p className="mt-[1.6rem] text-center font-grotesk text-[1.4rem] sm:mt-[2.4rem] sm:text-start sm:text-[1.8rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          ultricies lobortis rutrum. Cras gravida dui eget justo molestie
          tempus. Nullam tincidunt tortor felis. Integer venenatis sapien eget
          felis molestie, non scelerisque est facilisis. Vivamus aliquam, justo
          at aliquam placerat, eros erat imperdiet nisi, sit amet sagittis
          mauris mauris nec odio. Nam lacus turpis, ornare in tortor non,
          viverra varius velit. Ut sollicitudin vulputate purus eget vulputate.
          Cras non imperdiet sem. 
        </p>
      </div>
    </section>
  );
}

function Brand() {
  return (
    <div className="w-[40%]">
      <Monoprix />
    </div>
  );
}
