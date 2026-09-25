import { Tlibrary } from '@/type/type';
import Image from 'next/image';

const SaveBtnDataShow = ({savebtndata}: {savebtndata:Tlibrary} ) => {
    
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

    <div className="mt-1.5 flex items-center gap-4 text-[11px] text-gray-400">
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

  <div className="flex shrink-0 items-center gap-3">
    <button className="rounded-full border border-[#343a45] px-4 py-2 text-[10px] text-gray-300 hover:bg-[#20242b]">
      View Details
    </button>


    <button className="ml-1 text-gray-600 hover:text-white">
      ×
    </button>
  </div>
</div>
        </div>
    );
};

export default SaveBtnDataShow;