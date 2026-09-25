"use client";
import { WorkoutContext } from "@/context/WorkOutContext";
import { Tlibrary } from "@/type/type";
import { useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { toast } from "react-toastify";

const SaveBtn = ({ workout }: { workout: Tlibrary }) => {
  const { saveData, setSaveData } = useContext(WorkoutContext);
  console.log(saveData, "Save data");

  const handleSaveBtn = () => {
    const isDuplicate = saveData.some((item) => item.id === workout.id);

    if (isDuplicate) {
      toast.error(`You cannot add duplicate ${workout.name} again `);
      return;
    }
    setSaveData([...saveData, workout]);
    toast.success(`${workout.name} added to today's plan!`);
  };
  return (
    <div>
      <button
        onClick={() => handleSaveBtn()}
        type="button"
        className="rounded-md border border-gray-700 px-5 py-3 text-md font-bold text-white transition hover:border-[#c6ff00]"
      >
        <span className="flex gap-2 items-center font-bold">
          {" "}
          <FaRegBookmark /> Save for later
        </span>
      </button>
    </div>
  );
};

export default SaveBtn;
