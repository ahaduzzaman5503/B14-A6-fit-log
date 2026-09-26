"use client";

import { WorkoutContext } from "@/context/WorkOutContext";
import { Tlibrary } from "@/type/type";
import Image from "next/image";
import Link from "next/link";
import { useContext, type Dispatch, type SetStateAction } from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const SaveBtnDataShow = ({ savebtndata }: { savebtndata: Tlibrary }) => {
  const { saveData, setSaveData } = useContext(WorkoutContext) as {
    saveData: Tlibrary[];
    setSaveData: Dispatch<SetStateAction<Tlibrary[]>>;
  };

  const handleDelete = () => {
    const updatedSaveData = saveData.filter(
      (workout) => workout.id !== savebtndata.id,
    );

    setSaveData(updatedSaveData);
    toast.success(`${savebtndata.name} removed from saved workouts`);
  };

  return (
    <div>
      <div className="flex w-full items-center gap-4 rounded-2xl border border-[#252a33] bg-[#15181e] px-4 py-3">
        <div className="h-16 w-32 shrink-0 overflow-hidden rounded-xl">
          <Image
            src={savebtndata.image}
            alt={savebtndata.name}
            height={200}
            width={200}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-bold uppercase text-white">
            {savebtndata.name}
          </h3>

          <p className="mt-0.5 text-xs text-gray-400">
            {savebtndata.muscleGroups.join(", ")}
          </p>

          <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-gray-400 sm:gap-4 sm:text-[11px]">
            <span className="flex items-center gap-1">
              <span className="text-[#baff00]">◷</span>
              {savebtndata.duration} min
            </span>

            <span className="flex items-center gap-1">
              <span className="text-[#baff00]">♨</span>
              {savebtndata.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1">
              <span className="text-[#baff00]">☆</span>
              {savebtndata.rating}
            </span>
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-3">
          <Link
            href={`/workout/${savebtndata.id}`}
            className="w-full rounded-full border border-[#343a45] px-3 py-1.5 text-center text-[9px] text-gray-300 transition hover:bg-[#20242b] sm:w-auto sm:px-4 sm:py-2 sm:text-[10px]"
          >
            View Details
          </Link>

          <button
            type="button"
            onClick={handleDelete}
            className="mx-auto rounded-full border-2 border-red-500 p-1 text-lg text-red-500 transition hover:bg-red-500 hover:text-white sm:mx-0 sm:text-xl"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaveBtnDataShow;
