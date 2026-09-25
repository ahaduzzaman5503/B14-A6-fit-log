import { Tlibrary } from "@/type/type";
import Image from "next/image";

export default function WorkoutCard({ sData }: { sData: Tlibrary }) {
  return (
    <div className="w-full max-w-[650px] overflow-hidden rounded-[24px] border border-[#292d35] bg-[#15171c] shadow-lg">
      <div className="relative h-[320px] w-full overflow-hidden">
        <Image
          src={sData.image}
          alt="Barbell Bench Press"
          fill
          className="object-cover"
        />
      </div>

      <div className="px-10 py-9">
        <div className="mb-7 flex flex-wrap gap-3">
          <span className="rounded-full bg-[#c6ff00] px-5 py-2 text-[14px] font-bold uppercase tracking-wide text-black">
            {sData?.muscleGroups?.[0]}
          </span>

          {sData?.muscleGroups?.[1] && (
            <span className="rounded-full bg-[#c6ff00] px-5 py-2 text-[14px] font-bold uppercase tracking-wide text-black">
              {sData.muscleGroups[1]}
            </span>
          )}
        </div>

        <h2 className="text-[34px] font-black uppercase leading-none tracking-tight text-white"></h2>
        <p className="mt-3 text-[20px] text-[#9ca3af]">{sData.equipment}</p>
        <div className="my-7 h-px w-full bg-[#292d35]" />
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-[18px] text-[#a1a8b3]">
          <div className="flex items-center gap-2">
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>

            <span>{sData.duration}</span>
            <span>min</span>
          </div>

          <div className="flex items-center gap-2">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.5 2.5c.3 3.2-1.5 4.8-3.1 6.2-1.5 1.3-2.9 2.5-2.9 5.1 0 3.5 2.7 6 6.5 6s6.5-2.7 6.5-6.3c0-3.1-1.8-5.8-5-8.2.1 2-.5 3.2-1.6 4.1.2-2.4-.1-4.6-.4-6.9z" />
            </svg>

            <span>{sData.caloriesBurned}</span>
            <span>kcal</span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3z" />
            </svg>
            <span>{sData.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
