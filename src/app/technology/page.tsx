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
    <main className="grid min-h-screen overflow-hidden bg-[url('/assets/technology/background-technology-mobile.jpg')] bg-cover bg-bottom bg-no-repeat pt-28 text-white [grid-template-rows:min-content_1fr] md:bg-[url('/assets/technology/background-technology-tablet.jpg')] md:pt-52 lg:min-h-[900px] lg:bg-[url('/assets/technology/background-technology-desktop.jpg')] lg:pt-96">
      <article className="grid grid-cols-1 place-items-center">
        <h1>
          <span>03</span>space launch 101
        </h1>
        <div className="relative aspect-video w-full">
          <Image
            src={`/${images.portrait}`}
            alt={`technology ${name}`}
            fill
            sizes="(100vw, 100vh)"
          />
        </div>
        <ul className="flex gap-3">
          {technology.map((technology, i) => (
            <li
              key={i}
              onClick={() => setCurrentTechnology(i)}
              className={clsx(
                "grid h-8 w-8 place-items-center rounded-full border",
                currentTechnology === i
                  ? "bg-white text-black"
                  : "bg-transparent text-white",
              )}
            >
              {" "}
              {i + 1}
            </li>
          ))}
        </ul>
        <article>
          <h2>the terminology...</h2>
          <p>{name}</p>
          <p>{description}</p>
        </article>
      </article>
    </main>
  );
}
