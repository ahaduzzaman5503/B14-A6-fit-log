"use client";

import { WorkoutContext } from "@/context/WorkOutContext";
import { Tlibrary } from "@/type/type";
import { useContext, type Dispatch, type SetStateAction } from "react";
import { TbCalendarEvent } from "react-icons/tb";
import { toast } from "react-toastify";

const AddBtn = ({ workout }: { workout: Tlibrary }) => {
  const { planData, setplanData } = useContext(WorkoutContext) as {
    planData: Tlibrary[];
    setplanData: Dispatch<SetStateAction<Tlibrary[]>>;
  };

  const handleAddBtn = () => {
    const isDuplicate = planData.some((item) => item.id === workout.id);

    if (isDuplicate) {
      toast.error(`You cannot add duplicate ${workout.name} again `);
      return;
    }

    setplanData([...planData, workout]);
    toast.success(`Added to today's plan${workout.name}`);
  };

  return (
    <button
      onClick={handleAddBtn}
      type="button"
      className="rounded-md bg-[#c6ff00] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#d4ff33]"
    >
      <span className="flex items-center gap-2 font-bold">
        <TbCalendarEvent />
        Add to today&apos;s plan
      </span>
    </button>
  );
};

export default AddBtn;
