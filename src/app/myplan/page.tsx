"use client";

import AddBtnDataShow from "@/components/buttons/AddBtnDataShow";
import SaveBtnDataShow from "@/components/buttons/SaveBtnDataShow";
import { WorkoutContext } from "@/context/WorkOutContext";
import { Tlibrary } from "@/type/type";
import Link from "next/link";
import { useContext, useMemo, useState } from "react";

type TabType = "today" | "saved";
type SortType = "duration" | "calories" | "rating";

const MyPlan = () => {
  const { planData, saveData } = useContext(WorkoutContext) as {
    planData: Tlibrary[];
    saveData: Tlibrary[];
  };
  const [activeTab, setActiveTab] = useState<TabType>("today");

  // Sort state
  const [sortBy, setSortBy] = useState<SortType>("duration");

  const currentData: Tlibrary[] = activeTab === "today" ? planData : saveData;

  const stats = useMemo(() => {
    return {
      exercises: currentData.length,

      minutes: currentData.reduce(
        (total, workout) => total + workout.duration,
        0,
      ),

      calories: currentData.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0,
      ),
    };
  }, [currentData]);

  const sortedData = useMemo(() => {
    return [...currentData].sort((a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      return 0;
    });
  }, [currentData, sortBy]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">MY PLAN</h1>

        <p className="mt-2 text-gray-400">
          Cap of five lifts for today. Finish them, then load more
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-[#1a1d23] p-6 shadow">
          <p className="text-lg text-gray-400">Exercises</p>

          <h2 className="mt-2 text-4xl font-bold text-[#c6ff00]">
            {stats.exercises}
          </h2>
        </div>

        <div className="rounded-xl bg-[#1a1d23] p-6 shadow">
          <p className="text-lg text-gray-400">Minutes</p>

          <h2 className="mt-2 text-4xl font-bold text-white">
            {stats.minutes}
          </h2>
        </div>

        <div className="rounded-xl bg-[#1a1d23] p-6 shadow">
          <p className="text-lg text-gray-400">Calories</p>

          <h2 className="mt-2 text-4xl font-bold text-white">
            {stats.calories}
          </h2>
        </div>
      </div>

      <div className="mt-10 overflow-hidden rounded-xl bg-[#1a1d23]">
        <div className="flex border-b border-gray-700">
          <button
            type="button"
            onClick={() => setActiveTab("today")}
            className={`relative px-6 py-4 text-sm font-semibold transition ${
              activeTab === "today"
                ? "text-[#c6ff00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Today's Plan
            {activeTab === "today" && (
              <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#c6ff00]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("saved")}
            className={`relative px-6 py-4 text-sm font-semibold transition ${
              activeTab === "saved"
                ? "text-[#c6ff00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Saved
            {activeTab === "saved" && (
              <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#c6ff00]" />
            )}
          </button>

          {/* Sort Dropdown */}
          <div className="ml-auto flex items-center px-4">
            <label className="mr-2 text-sm text-gray-400">Sort By</label>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortType)}
              className="cursor-pointer rounded-md border border-gray-600 bg-[#1a1d23] px-3 py-2 text-sm text-white outline-none focus:border-[#c6ff00]"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        <div className="bg-gray-800 p-6 md:p-10">
          {activeTab === "today" && (
            <>
              {sortedData.length > 0 ? (
                <div className="space-y-3">
                  {sortedData.map((planbtndata: Tlibrary) => (
                    <AddBtnDataShow
                      key={planbtndata.id}
                      planbtndata={planbtndata}
                    />
                  ))}
                </div>
              ) : (
                <EmptyState />
              )}
            </>
          )}

          {activeTab === "saved" && (
            <>
              {sortedData.length > 0 ? (
                <div className="space-y-3">
                  {sortedData.map((savebtndata: Tlibrary) => (
                    <SaveBtnDataShow
                      key={savebtndata.id}
                      savebtndata={savebtndata}
                    />
                  ))}
                </div>
              ) : (
                <EmptyState />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <h2 className="text-xl font-bold text-white">NOTHING HERE YET</h2>

      <p className="mt-2 max-w-md text-gray-400">
        Browse the library and add a lift to get today moving
      </p>

      <Link href="/">
        <button
          type="button"
          className="mt-5 rounded-full bg-[#c6ff00] px-6 py-3 font-bold text-black transition hover:bg-[#d4ff33]"
        >
          Go to workouts
        </button>
      </Link>
    </div>
  );
};

export default MyPlan;
