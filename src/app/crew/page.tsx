"use client";
import { type Data } from "~/lib/types";
import rawData from "data.json";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
const data: Data = rawData;
export default function Crew() {
  const { crew } = data;
  const [currentCrew, setCurrentCrew] = useState(0);
  const { bio, images, name, role } = crew[currentCrew]!;
  return (
    <main
      id="main"
      className="grid h-screen overflow-hidden bg-[url('/assets/crew/background-crew-mobile.jpg')] bg-cover bg-center bg-no-repeat pt-[88px] text-white [grid-template-rows:min-content_1fr] sm:pt-32 md:bg-[url('/assets/crew/background-crew-tablet.jpg')] md:pl-[28.5px] md:pt-[136px] lg:min-h-[900px] lg:bg-[url('/assets/crew/background-crew-desktop.jpg')] lg:pl-40 lg:pt-[212px]"
    >
      <article className="grid grid-cols-1 place-items-center lg:grid-cols-2 lg:grid-rows-[min-content_1fr_min-content]">
        <h1 className="font-barlowCondensed text-sm font-normal uppercase tracking-[2.7px] md:order-1 md:place-self-start md:text-[1.25rem] md:tracking-[3.375px] lg:order-1 lg:col-start-1 lg:col-end-3 lg:text-xl lg:tracking-[4.725px]">
          <span className="mr-4 text-Fm-light-blue/20">02</span>meet your crew
        </h1>
        <div className="relative mb-8 mt-8 aspect-[3/4] h-56 w-[90%] border-b border-white/20 md:order-4 md:mb-1 md:h-[456px] lg:order-2 lg:col-start-2 lg:row-start-2 lg:row-end-4 lg:h-[712px]">
          <Image
            src={`${images.webp}`}
            alt={`crew ${name}`}
            fill
            sizes="(100vw, 100vh)"
            className="object-contain"
          />
        </div>
        <ul className="flex gap-3 md:order-3 lg:order-4 lg:-m-44 lg:ml-8 lg:gap-6 lg:place-self-start">
          {crew.map((crew, i) => (
            <li
              key={i}
              onClick={() => setCurrentCrew(i)}
              className={clsx(
                "h-3 w-3 cursor-pointer rounded-full hover:bg-Fm-white/30 md:h-[10px] md:w-[10px] lg:h-[15px] lg:w-[15px]",
                currentCrew === i ? "bg-white" : "bg-white/10",
              )}
            ></li>
          ))}
        </ul>
        <article className="mt-8 grid grid-cols-1 place-items-center md:order-2 lg:place-items-start lg:place-self-start lg:pt-20">
          <h2 className="mb-2 font-bellefair text-sm uppercase text-Fm-white/60 md:text-lg lg:text-2xl">
            {role}
          </h2>
          <p className="mb-4 font-bellefair text-lg uppercase md:text-[2.5rem] lg:text-3xl">
            {name}
          </p>
          <p className=" mx-6 mb-[6.5rem] text-center text-[0.9375rem] leading-6 text-Fm-light-blue md:mx-[8.7rem] md:mb-[40px] md:text-sm md:leading-7 lg:ml-0 lg:max-w-[28rem] lg:text-left lg:text-base lg:leading-8">
            {bio}
          </p>
        </article>
      </article>
    </main>
  );
}
