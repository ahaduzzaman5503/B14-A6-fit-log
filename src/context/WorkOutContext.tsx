"use client";
import { createContext, useState } from "react";

export const WorkoutContext = createContext({});

const WorkoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [planData, setplanData] = useState([]);
  const [saveData, setSaveData] = useState([]);
  const sharedData = { planData, setplanData, saveData, setSaveData };
  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}{" "}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
