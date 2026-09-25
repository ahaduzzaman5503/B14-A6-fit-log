import { WorkoutContext } from "@/context/WorkOutContext";
import { Tlibrary } from "@/type/type";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const AddBtnDataShow = ({ planbtndata }: { planbtndata: Tlibrary }) => {
  const { planData, setplanData } = useContext(WorkoutContext);

  const handleDelete = () => {
    const updatedPlan = planData.filter(
      (workout) => workout.id !== planbtndata.id,
    );

    setplanData(updatedPlan);

    toast.success(`${planbtndata.name} removed from today's plan`);
  };

    const handleMarkAsDone = () => {
    const updatedPlan = planData.filter(
      (workout) => workout.id !== planbtndata.id,
    );

    setplanData(updatedPlan);

    toast.success(`${planbtndata.name} Mark as done completed! `);
  };

  return (
    <div>
      <div className="flex w-full items-center gap-4 rounded-2xl border border-[#252a33] bg-[#15181e] px-4 py-3">
        <div className="h-16 w-32 shrink-0 overflow-hidden rounded-xl">
          <Image
            src={planbtndata?.image}
            alt={planbtndata?.name}
            height={200}
            width={200}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-bold uppercase text-white">
            {planbtndata.name}
          </h3>

          <p className="mt-0.5 text-xs text-gray-400">
            {planbtndata.muscleGroups.join(", ")}
          </p>

          <div className="mt-1.5 flex items-center gap-4 text-[11px] text-gray-400">
            <span className="flex items-center gap-1">
              <span className="text-[#baff00]">◷</span>
              {planbtndata.duration} min
            </span>

            <span className="flex items-center gap-1">
              <span className="text-[#baff00]">♨</span>
              {planbtndata.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1">
              <span className="text-[#baff00]">☆</span>
              {planbtndata.rating}
            </span>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <Link href={`/workout/${planbtndata.id}`}>
            <button className="rounded-full border border-[#343a45] px-4 py-2 text-[10px] text-gray-300 hover:bg-[#20242b]">
              View Details
            </button>
          </Link>

          <button 
          onClick={handleMarkAsDone}
          className="flex items-center gap-1.5 rounded-full bg-[#baff00] px-4 py-2 text-[10px] font-bold text-black hover:bg-[#c8ff32]">
            <span>✓</span>
            Mark as Done
          </button>

          <button
            onClick={handleDelete}
            className="ml-1 text-red-500 border-2 rounded-full p-1 text-xl"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBtnDataShow;
