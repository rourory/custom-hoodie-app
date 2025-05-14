"use client";

import { Html, useProgress } from "@react-three/drei";
import { Progress } from "@/components/ui/progress";

export default function Loader() {
  const { progress } = useProgress();
  return (
    <Html center className="w-[50vh] flex flex-col gap-3">
      <Progress value={Math.round(progress)} />
      <div className="w-full flex justify-center">
        {Math.round(progress)}/100
      </div>
    </Html>
  );
}
