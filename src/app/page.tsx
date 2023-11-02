import Link from "next/link";

export default function HomePage() {
  return (
    <main className="grid min-h-screen overflow-hidden bg-[url('/assets/home/background-home-mobile.jpg')] bg-cover bg-bottom bg-no-repeat pt-28 text-white [grid-template-rows:min-content_1fr] md:bg-[url('/assets/home/background-home-tablet.jpg')] md:pt-52 lg:min-h-[900px] lg:bg-[url('/assets/home/background-home-desktop.jpg')] lg:pt-96">
      <article className="my-12 grid grid-cols-1 place-items-center gap-y-20 px-6 text-center md:mb-[5.625rem] md:mt-[6.625rem] lg:mx-[10.3125rem] lg:mt-0 lg:h-full lg:grid-cols-2 lg:grid-rows-1 lg:px-0 lg:pb-32">
        <div className="space-y-4 md:mx-[9.9375rem] lg:place-self-end">
          <h1 className="font-barlowCondensed text-sm font-normal uppercase tracking-[2.7px] text-Fm-light-blue md:mb-6 md:max-w-[445px] md:text-[1.25rem] md:tracking-[3.375px] lg:h-44 lg:text-left lg:text-xl">
            so, you want to travel to
            <span className="mt-4 block font-bellefair text-[5rem] leading-[6.25rem] text-Fm-white md:mt-6 md:text-9xl lg:h-44 lg:text-left lg:align-middle lg:leading-none">
              space
            </span>
          </h1>
          <p className="font-barlow text-[0.9375rem] leading-[1.5625rem] text-Fm-light-blue md:mx-[0.1875] md:mt-6 md:text-center md:text-sm md:leading-[1.75rem] lg:mt-32 lg:text-left lg:text-base">
            Let&quot;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&quot;ll give you a truly out of
            this world experience!
          </p>
        </div>
        <Link href={"/destinations"} className="lg:place-self-end">
          <button className="group relative z-10 inline-grid aspect-square w-[9.375rem] place-items-center rounded-full bg-white font-bellefair text-[1.25rem] uppercase tracking-[1.25px] text-Fm-black md:w-60 md:text-2xl md:tracking-[2px]">
            explore
            <div className="absolute inset-0 -z-10 h-full w-full rounded-full bg-white/10 opacity-0 group-hover:scale-150 group-hover:opacity-100 group-hover:transition-all"></div>
          </button>
        </Link>
      </article>
    </main>
  );
}
