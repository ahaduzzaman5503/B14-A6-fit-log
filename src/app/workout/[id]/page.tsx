import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Tlibrary } from "@/type/type";
import AddBtn from "@/components/buttons/AddBtn";
import SaveBtn from "@/components/buttons/SaveBtn";

const WorkoutDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data: Tlibrary[] = await res.json();
  const workout = data.find((item) => item.id === Number(id));

  if (!workout) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0d0e11] text-white">
      <div className="container mx-auto px-4 py-10">
        <Link
          href={"/workout"}
          className="mb-8 inline-block text-sm text-gray-400 transition hover:text-[#c6ff00]"
        >
          ← Back to workouts
        </Link>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold uppercase">{workout.name}</h1>

            <p className="mt-4 leading-6 text-gray-400">
              {workout.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#c6ff00] px-3 py-1 text-xs font-bold text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-gray-800 bg-[#15171c]">
              <div className="flex justify-between border-b border-gray-800 px-4 py-4">
                <span className="text-gray-500">Equipment</span>

                <span>{workout.equipment}</span>
              </div>

              <div className="flex justify-between border-b border-gray-800 px-4 py-4">
                <span className="text-gray-500">Difficulty</span>
                <span>{workout.difficulty}</span>
              </div>

              <div className="flex justify-between border-b border-gray-800 px-4 py-4">
                <span className="text-gray-500">Sets</span>

                <span>{workout.sets}</span>
              </div>

              <div className="flex justify-between border-b border-gray-800 px-4 py-4">
                <span className="text-gray-500">Reps</span>

                <span>{workout.reps}</span>
              </div>

              <div className="flex justify-between border-b border-gray-800 px-4 py-4">
                <span className="text-gray-500">Duration</span>

                <span>{workout.duration} min</span>
              </div>

              <div className="flex justify-between border-b border-gray-800 px-4 py-4">
                <span className="text-gray-500">Calories</span>

                <span>{workout.caloriesBurned} kcal</span>
              </div>

              <div className="flex justify-between px-4 py-4">
                <span className="text-gray-500">Rating</span>

                <span>{workout.rating}</span>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold">Instructions</h2>

              <div className="mt-4 space-y-4">
                {workout.instructions.map((instruction, index) => (
                  <div key={index} className="flex gap-3 text-gray-400">
                    <span className="font-bold text-[#c6ff00]">
                      {index + 1}.
                    </span>

                    <p>{instruction}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <AddBtn workout={workout}></AddBtn>
              <SaveBtn workout={workout}></SaveBtn>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetailPage;
