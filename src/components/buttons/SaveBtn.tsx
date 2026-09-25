"use client";
import { WorkoutContext } from "@/context/WorkOutContext";
import { Tlibrary } from "@/type/type";
import { useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";

const SaveBtn = ({workout}: {workout: Tlibrary}) => {

      const {saveData, setSaveData} = useContext(WorkoutContext);
      console.log(saveData, "Save data");


    const handleSaveBtn = () => {
        setSaveData([...saveData, workout ])
            console.log("Save button clicked");
    alert(`Saave data "${workout.name}" added`)
    }
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
