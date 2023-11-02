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
      className="grid min-h-screen overflow-hidden bg-[url('/assets/crew/background-crew-mobile.jpg')] bg-cover bg-center bg-no-repeat pt-28 text-white [grid-template-rows:min-content_1fr] md:bg-[url('/assets/crew/background-crew-tablet.jpg')] md:pt-52 lg:min-h-[900px] lg:bg-[url('/assets/crew/background-crew-desktop.jpg')] lg:pt-96"
    >
      <article className="grid grid-cols-1 place-items-center">
        <h1>
          <span>01</span>meet your crew
        </h1>
        <div className="relative aspect-square w-44">
          <Image
            src={`${images.webp}`}
            alt={`crew ${name}`}
            fill
            sizes="(100vw, 100vh)"
          />
        </div>
        <ul className="flex gap-4">
          {crew.map((crew, i) => (
            <li
              key={i}
              onClick={() => setCurrentCrew(i)}
              className={clsx(
                "h-3 w-3 rounded-full",
                currentCrew === i ? "bg-white" : "bg-white/10",
              )}
            ></li>
          ))}
        </ul>
        <article>
          <h2>{role}</h2>
          <p>{name}</p>
          <p>{bio}</p>
        </article>
      </article>
    </main>
  );
}
