"use client";

import AddBtnDataShow from "@/components/buttons/AddBtnDataShow";
import SaveBtnDataShow from "@/components/buttons/SaveBtnDataShow";
import { WorkoutContext } from "@/context/WorkOutContext";
import { Tlibrary } from "@/type/type";
import { useContext } from "react";

const MyPlan = () => {
  const { planData, setplanData, saveData, setSaveData } = useContext(WorkoutContext);
  return (
    <div className="container mx-auto">
      <div>
        <h1>MY PLAN</h1>
        <p>Cap of five lifts for today. Finish them, then load more</p>
      </div>

      <div>
        <div className="stats shadow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5">
          <div className="stat">
            <div className="stat-title text-xl">Exercises</div>
            <div className="stat-value text-yellow-300">
              {planData?.length || 0}
            </div>
          </div>

          <div className="stat">
            <div className="stat-title text-xl">Minutes</div>
            <div className="stat-value"> 
              {planData?.duration || 0}
            </div>
          </div>

          <div className="stat">
            <div className="stat-title text-xl">Calories</div>
            <div className="stat-value">0</div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex-1 my-10 bg-base-200">
          <div className="tabs tabs-border">

            <input
              type="radio"
              name="my_tabs_2"
              className="tab"
              aria-label="Today's Plan"
              defaultChecked
            />

            <div className="tab-content border-base-300 bg-gray-800 py-10">

              {planData && planData.length > 0 ? (
                planData.map((planbtndata: Tlibrary, ind: number) => (
                  <AddBtnDataShow
                    key={ind}
                    planbtndata={planbtndata}
                  />
                ))
              ) : (
                <div className="text-center">
                  <h1>NOTHING HERE YET</h1>

                  <p>
                    Browse the library and add a lift to get today moving
                  </p>

                  <button className="btn bg-yellow-200 text-black rounded-3xl my-3">
                    Go to workouts
                  </button>
                </div>
              )}

            </div>

            <input
              type="radio"
              name="my_tabs_2"
              className="tab"
              aria-label="Saved"
            />

            <div className="tab-content border-base-300 bg-gray-800 p-10">
              {saveData && saveData.length > 0 ? (
                saveData.map((savebtndata: Tlibrary, ind: number) => (
                  <SaveBtnDataShow
                    key={ind}
                    savebtndata={savebtndata}
                  />
                ))
              ) : (
                <div className="text-center">
                  <h1>NOTHING HERE YET</h1>

                  <p>
                    Browse the library and add a lift to get today moving
                  </p>

                  <button className="btn bg-yellow-200 text-black rounded-3xl my-3">
                    Go to workouts
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlan;