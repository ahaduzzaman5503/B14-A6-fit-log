"use client";
import { WorkoutContext } from "@/context/WorkOutContext";
import { Tlibrary } from "@/type/type";
import { useContext } from "react";
import { TbCalendarEvent } from "react-icons/tb";

const AddBtn = ({workout}: {workout: Tlibrary}) => {

    const {planData, setplanData} = useContext(WorkoutContext)
    
    
  const handleAddBtn = () => {
    setplanData([...planData, workout])
    console.log("add button clicked");
    alert(`Todeys plan data "${workout.name}" added`)
  };
  return (
    <div>
      <button
        onClick={() => handleAddBtn()}
        type="button"
        className="rounded-md bg-[#c6ff00] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#d4ff33]"
      >
        <span className="flex gap-2 items-center font-bold">
          {" "}
          <TbCalendarEvent />
          Add to today`s plan
        </span>
      </button>
    </div>
  );
};

export default AddBtn;
