"use client";
import Image from "next/image";
import clsx from "clsx";
import { type Data } from "~/lib/types";
import rawData from "data.json";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const data: Data = rawData;

export default function Header() {
  const linkClass =
    "block font-barlowCondensed text-sm font-normal uppercase tracking-[2.7px] hover:border-b hover:border-white/20 flex items-center";
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);
  return (
    <header className="absolute flex w-full items-center justify-between px-6 pt-6 text-white md:px-10 lg:mt-8 lg:px-14">
      <div className="relative h-10 w-10 md:h-12 md:w-12 lg:flex lg:items-center">
        <Image src={"/assets/shared/logo.svg"} alt="logo" fill />
        <div className="invisible lg:visible lg:absolute lg:z-20 lg:ml-40 lg:w-[clamp(473px,300%,500px)] lg:border-b lg:border-white/20"></div>
      </div>
      <button
        aria-controls="primary-navigation"
        className={clsx(
          isActive
            ? "fixed right-8 bg-[url('/assets/shared/icon-close.svg')]"
            : "bg-[url('/assets/shared/icon-hamburger.svg')]",
          "z-40 h-[21px] w-[24px] cursor-pointer bg-center bg-no-repeat sm:hidden",
        )}
        onClick={() => setIsActive(!isActive)}
      >
        <span className="sr-only" aria-expanded={isActive}>
          Menu
        </span>
      </button>
      <nav
        className={clsx(
          isActive ? "translate-x-0" : "translate-x-full",
          "fixed left-1/3 right-0 top-0 z-30 h-screen bg-white/5 backdrop-blur-lg transition-transform sm:visible sm:left-[20%] sm:right-0 sm:h-24 sm:translate-x-0 lg:left-[43%] lg:mt-8",
        )}
      >
        <ul
          id="primary-navigation"
          className="mx-8 mt-28 space-y-8 sm:mt-0 sm:flex sm:h-full sm:items-stretch sm:justify-between sm:gap-3 sm:space-y-0 sm:align-middle md:mx-12 lg:ml-32 lg:mr-40"
        >
          <Link
            href={"/"}
            className={clsx(linkClass, {
              "border-b border-Fm-white": pathname === `/`,
            })}
            onClick={() => setIsActive(false)}
          >
            <span
              className="mr-3 font-barlowCondensed text-sm font-bold tracking-[2.7px] sm:invisible sm:absolute lg:visible lg:static"
              aria-hidden="true"
            >
              00
            </span>
            home
          </Link>
          {Object.keys(data).map((key, i) => (
            <Link
              href={`/${key}`}
              key={key}
              className={clsx(linkClass, {
                "border-b border-Fm-white": pathname === `/${key}`,
              })}
              onClick={() => setIsActive(false)}
            >
              <span
                className="mr-3 font-barlowCondensed text-sm font-bold tracking-[2.7px] sm:invisible sm:absolute lg:visible lg:static"
                aria-hidden="true"
              >
                0{i + 1}
              </span>
              {key}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}
