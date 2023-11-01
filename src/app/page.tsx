"use client";
import Image from "next/image";
import clsx from "clsx";
import data from "data.json";
import { useState } from "react";

export default function HomePage() {
  const [isActive, setIsActive] = useState(false);
  return (
    <main className="h-screen w-screen overflow-hidden bg-[url('/assets/home/background-home-mobile.jpg')] bg-cover bg-bottom bg-no-repeat text-white md:bg-[url('/assets/home/background-home-tablet.jpg')] lg:bg-[url('/assets/home/background-home-desktop.jpg')]">
      <header className="relative flex items-center justify-between px-6 pt-6 lg:mt-8">
        <div className="relative h-10 w-10 md:h-12 md:w-12 lg:flex lg:items-center">
          <Image src={"/assets/shared/logo.svg"} alt="logo" fill />
          <div className="invisible lg:visible lg:absolute lg:z-20 lg:ml-40 lg:w-[clamp(473px,300%,500px)] lg:border-b lg:border-white/20"></div>
        </div>
        <button
          aria-controls="primary-navigation"
          className={clsx(
            isActive
              ? "bg-[url('/assets/shared/icon-close.svg')]"
              : "bg-[url('/assets/shared/icon-hamburger.svg')]",
            "z-10 h-[21px] w-[24px] cursor-pointer bg-no-repeat sm:hidden",
          )}
          onClick={() => setIsActive(!isActive)}
        >
          <span className="sr-only" aria-expanded={isActive}>
            Menu
          </span>
        </button>
        <nav
          className={clsx(
            isActive ? "visible" : "invisible",
            "fixed left-1/3 right-0 top-0 h-screen bg-white/5 backdrop-blur-lg sm:visible md:right-0 md:h-24 lg:left-[43%] lg:mt-8",
          )}
        >
          <ul
            id="primary-navigation"
            className="mx-8 mt-28 space-y-8 md:mx-12 md:mt-0 md:flex md:h-full md:items-center md:justify-between md:space-y-0 lg:ml-32 lg:mr-40"
          >
            <li className="font-barlowCondensed text-sm font-normal uppercase tracking-[2.7px] ">
              <span
                className="mr-3 font-barlowCondensed text-sm font-bold tracking-[2.7px] sm:invisible lg:visible "
                aria-hidden="true"
              >
                00
              </span>
              home
            </li>
            {Object.keys(data).map((key, i) => (
              <li
                key={key}
                className="font-barlowCondensed text-sm font-normal uppercase tracking-[2.7px]"
              >
                <span
                  className="mr-3 font-barlowCondensed text-sm font-bold tracking-[2.7px] sm:invisible lg:visible"
                  aria-hidden="true"
                >
                  0{i + 1}
                </span>
                {key}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </main>
  );
}
