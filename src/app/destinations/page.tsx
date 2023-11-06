"use client";
import { type Data } from "~/lib/types";
import rawData from "data.json";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
const data: Data = rawData;

export default function Destinations() {
  const { destinations } = data;
  const [currentDestination, setCurrentDestination] = useState(0);
  const { name, images, description, distance, travel } =
    destinations[currentDestination]!;

  return (
    <main
      id="main"
      className="grid h-screen overflow-hidden bg-[url('/assets/destination/background-destination-mobile.jpg')] bg-cover bg-bottom bg-no-repeat pt-[5.5625rem] text-white [grid-template-rows:min-content_1fr] sm:pt-32 md:bg-[url('/assets/destination/background-destination-tablet.jpg')] md:px-10 md:pt-36 lg:min-h-[900px] lg:bg-[url('/assets/destination/background-destination-desktop.jpg')] lg:px-[10.375rem] lg:pt-[13.25rem]"
    >
      <article className="grid grid-cols-1 place-items-center lg:grid-cols-2">
        <h1 className="font-barlowCondensed text-sm font-normal uppercase tracking-[2.7px] md:place-self-start md:text-[1.25rem] md:tracking-[3.375px] lg:col-span-2 lg:text-xl lg:tracking-[4.725px]">
          <span className="mr-4 font-semibold text-Fm-light-blue/30">01</span>{" "}
          pick your destination
        </h1>
        <div className="relative my-8 aspect-square w-44 md:w-[14.375rem] md:p-8 lg:mt-16 lg:w-[27.8125rem]">
          <Image
            src={`${images.webp}`}
            alt={`destination ${name}`}
            fill
            sizes="(100vw, 100vh)"
          />
        </div>
        <div className="grid grid-cols-1 place-items-center lg:place-content-start">
          <ul className="flex gap-7 font-barlowCondensed text-xs uppercase tracking-[2.36px] md:py-5 md:text-sm lg:ml-14 lg:place-self-start lg:text-sm lg:tracking-[2.7px]">
            {destinations.map((destination, i) => (
              <li
                key={destination.name}
                onClick={() => setCurrentDestination(i)}
                className={clsx(
                  currentDestination === i
                    ? "border-b-2 border-Fm-white text-white"
                    : "text-Fm-light-blue",
                  "cursor-pointer pb-2 hover:border-b-2 hover:border-Fm-white/20",
                )}
              >
                {destination.name}
              </li>
            ))}
          </ul>
          <article className="mx-6 grid grid-cols-1 place-items-center md:mx-14 md:pb-16 lg:place-items-start">
            <h2 className="font-bellefair text-3xl uppercase md:text-[5rem] lg:text-[6.25rem]">
              {name}
            </h2>
            <p className="text-center font-barlow text-[0.9375rem] leading-6 text-Fm-light-blue md:text-sm lg:text-left lg:text-base lg:leading-8">
              {description}
            </p>
            <div className="mt-8 w-full border-t border-Fm-light-blue/20 pt-8 md:mt-12 md:flex md:items-stretch md:justify-center md:gap-14 md:pt-4 lg:mt-14 lg:justify-start lg:pt-7">
              <div className="flex flex-col items-center gap-3 lg:items-start">
                <h3 className="font-barlowCondensed text-xs uppercase tracking-[2.36px] text-Fm-light-blue">
                  AVG. DISTANCE
                </h3>
                <p className="font-bellefair text-xl uppercase">{distance}</p>
              </div>
              <div className="flex flex-col items-center pb-14 pt-8 md:gap-3 md:pb-0 md:pt-0 lg:items-start">
                <h3 className="font-barlowCondensed text-xs uppercase tracking-[2.36px] text-Fm-light-blue">
                  EST. TRAVEL TIME
                </h3>
                <p className="font-bellefair text-xl uppercase">{travel}</p>
              </div>
            </div>
          </article>
        </div>
      </article>
    </main>
  );
}
