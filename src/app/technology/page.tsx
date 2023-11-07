"use client";
import { type Data } from "~/lib/types";
import rawData from "data.json";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
const data: Data = rawData;
export default function Technology() {
  const { technology } = data;
  const [currentTechnology, setCurrentTechnology] = useState(0);
  const { description, images, name } = technology[currentTechnology]!;
  return (
    <main
      id="main"
      className="grid min-h-screen bg-[url('/assets/technology/background-technology-mobile.jpg')]   bg-cover bg-bottom bg-no-repeat pb-14 pt-[88px] text-white [grid-template-rows:min-content_1fr] sm:pt-32 md:bg-[url('/assets/technology/background-technology-tablet.jpg')] md:pt-32 lg:h-screen lg:min-h-[900px] lg:bg-[url('/assets/technology/background-technology-desktop.jpg')] lg:pt-56"
    >
      <article className="grid grid-cols-1 place-items-center md:pb-24 lg:grid-cols-[min-content_1fr_1fr] lg:grid-rows-[min-content_1fr] lg:pl-36">
        <h1 className="font-barlowCondensed text-sm font-normal uppercase tracking-[2.7px] md:place-self-start md:pl-9 md:text-[1.25rem] md:tracking-[3.375px] lg:order-1 lg:col-span-full lg:pl-0 lg:text-xl lg:tracking-[4.725px]">
          <span className="mr-4 font-semibold text-Fm-light-blue/70">03</span>
          space launch 101
        </h1>
        <div className="relative my-8 aspect-video h-[170px] w-full md:mb-14 md:h-[310px] lg:order-4 lg:h-[527px] lg:w-[512px] lg:place-self-end">
          <Image
            src={`${images.landscape}`}
            alt={`technology ${name}`}
            fill
            className="object-cover lg:hidden"
            sizes="(100vw, 100vh)"
          />
          <Image
            src={`${images.portrait}`}
            alt={`technology ${name}`}
            fill
            className="invisible absolute object-cover object-center lg:visible lg:static"
            sizes="(100vw, 100vh)"
          />
        </div>
        <ul className="flex items-center justify-center gap-3 lg:order-2 lg:flex-col">
          {technology.map((technology, i) => (
            <li
              key={i}
              onClick={() => setCurrentTechnology(i)}
              className={clsx(
                "flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/30 md:h-14 md:w-14 md:text-lg lg:h-20 lg:w-20 lg:text-2xl",
                currentTechnology === i
                  ? "bg-white text-black"
                  : "bg-transparent text-white",
              )}
            >
              {i + 1}
            </li>
          ))}
        </ul>
        <article className="mt-7 grid grid-cols-1 place-items-center md:mt-11 lg:order-3 lg:place-items-start lg:pl-20">
          <h2 className="font-barlowCondensed text-xs uppercase tracking-[2.36px] text-Fm-light-blue md:text-sm md:tracking-[2.7px] lg:text-sm lg:tracking-[2.7px]">
            the terminology...
          </h2>
          <p className="mb-4 mt-2 font-bellefair text-lg uppercase md:my-4 md:text-[2.5rem] lg:text-3xl">
            {name}
          </p>
          <p className="mx-6 text-center font-barlow text-[0.9375rem] leading-6 text-Fm-light-blue md:mx-[10.3rem] md:text-sm md:leading-7 lg:mx-0 lg:max-w-[444px] lg:text-left lg:text-base lg:leading-8 ">
            {description}
          </p>
        </article>
      </article>
    </main>
  );
}
