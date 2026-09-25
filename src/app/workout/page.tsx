import WorkoutCard from "@/components/DataDisplay/WorkOutCard";
import { Tlibrary } from "@/type/type";

const Workout = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return (
    <div className="container mx-auto my-10">
      <div>
        <h1 className="text-2xl">THE LIBRARY</h1>
        <p className="py-3">Twelve lifts covering every major muscle group</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((sData: Tlibrary, ind: number) => (
          <WorkoutCard key={ind} sData={sData} />
        ))}
      </div>
    </div>
  );
};

export default Workout;
