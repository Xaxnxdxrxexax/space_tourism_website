"use client";
import { type Data } from "~/lib/types";
import rawData from "data.json";
import { useState } from "react";
import Image from "next/image";
const data: Data = rawData;

export default function Destinations() {
  const { destinations } = data;
  const [currentDestination, setCurrentDestination] = useState(0);
  const { name, images, description, distance, travel } =
    destinations[currentDestination]!;

  return (
    <main
      id="main"
      className="grid min-h-screen overflow-hidden bg-[url('/assets/destination/background-destination-mobile.jpg')] bg-cover bg-bottom bg-no-repeat pt-28 text-white [grid-template-rows:min-content_1fr] md:bg-[url('/assets/destination/background-destination-tablet.jpg')] md:pt-52 lg:min-h-[900px] lg:bg-[url('/assets/destination/background-destination-desktop.jpg')] lg:pt-96"
    >
      <article className="grid grid-cols-1 place-items-center">
        <h1>
          <span>01</span> pick your destination
        </h1>
        <div className="relative aspect-square w-44">
          <Image
            src={`${images.webp}`}
            alt={`destination ${name}`}
            fill
            sizes="(100vw, 100vh)"
          />
        </div>
        <ul className="flex gap-4 uppercase">
          {destinations.map((destination, i) => (
            <li key={destination.name} onClick={() => setCurrentDestination(i)}>
              {destination.name}
            </li>
          ))}
        </ul>
        <article>
          <h2>{name}</h2>
          <p>{description}</p>
          <div>
            <div>
              <h3>AVG. DISTANCE</h3>
              <p>{distance}</p>
            </div>
            <div>
              <h3>EST. TRAVEL TIME</h3>
              <p>{travel}</p>
            </div>
          </div>
        </article>
      </article>
    </main>
  );
}
