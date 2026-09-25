import React from "react";
import Bannarr from "@/assests/banner.png";
import Image from "next/image";

const Bannar = () => {
  return (
    <div className=" bg-[#0d0e11]">
      <div className="container mx-auto px-4 py-3">
        <div className="relative overflow-hidden rounded-xl border border-[#262930] bg-[#15171c]">
          <div className="flex min-h-[340px] flex-col items-center justify-between gap-8 px-8 py-10 md:flex-row md:px-11">
            {/* LEFT */}
            <div className="z-10 max-w-xl">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#c6ff00]">
                Workout Library
              </p>

              <h1 className="max-w-[520px] text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-[48px]">
                TRAIN WITH INTENT. LOG EVERY SET.
              </h1>

              <p className="mt-5 max-w-[520px] text-sm leading-6 text-[#9ca3af]">
                FitLog is a dark, no-nonsense gym companion: pick a lift, lock
                it into today's plan, and watch the week's work add up.
              </p>

              <button className="mt-6 rounded-md bg-[#c6ff00] px-5 py-3 text-[11px] font-extrabold uppercase text-black transition hover:bg-[#d4ff33]">
                BROWSE WORKOUTS
              </button>
            </div>

            <div className="relative flex w-full justify-center md:w-[42%] md:justify-end">
              <Image
                alt="Workout exercise"
                src={Bannarr}
                width={500}
                height={500}
                className="w-[260px] object-contain sm:w-[300px] md:w-[330px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
