"use client";

import React, { PropsWithChildren, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Vector3 } from "three";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils.js";
import { cn } from "@/lib/utils";
import ModelLoader from "@/components/atoms/ModelLoader";
import { ScrollArea } from "@/components/ui/scroll-area";
import ScrollableColorPicker from "../ScrollableColorPicker";

const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "black",
  "white",
  "grey",
  "orange",
  "purple",
  "pink",
  "brown",
  "cyan",
  "magenta",
  "olive",
  "teal",
  "navy",
  "maroon",
];

const Customizer: React.FC<PropsWithChildren<ICustomizer>> = ({
  children,
  className,
  position = new Vector3(-1, 1, 3.5),
  fov = 25,
}) => {
  return (
    <div
      className={cn(
        "absolute top-[80px] left-0 h-[calc(100vh-80px)] w-full flex flex-col sm:flex-row",
        className
      )}
    >
      <div className="bg-background hidden sm:block md:hidden lg:block w-[110px] border-2 rounded-xl my-[10px] ml-[10px]">
        <ScrollableColorPicker
          className="h-full w-full"
          colors={colors}
          orientation="vertical"
        />
      </div>
      <Canvas
        className="w-[500px]"
        shadows
        gl={{ preserveDrawingBuffer: true }}
        // eventSource={document.getElementById("root")!}
        eventPrefix="client"
        camera={{ position, fov }}
      >
        <Suspense fallback={<ModelLoader />}>
          <OrbitControls
            minPolarAngle={degToRad(65)}
            maxPolarAngle={degToRad(115)}
            maxDistance={5}
            minDistance={2}
            enablePan={false}
          />

          <Environment preset="city" environmentIntensity={0.5} />
          <Center>{children}</Center>
        </Suspense>
      </Canvas>
      <div className=" md:min-w-[40vw] md:max-w-[40vw] lg:min-w-[30vw] lg:max-w-[30vw] hidden md:block">
        <div className="bg-background h-full md:h-[calc(100%-110px)] lg:h-[calc(100%-20px)] border-2 rounded-xl mr-[10px] my-[10px]">
          <ScrollArea className="h-full w-full p-4">
            <div className="flex flex-col items-center w-full h-full bg-background ">
              <div className="w-[100px] h-[40px] bg-amber-100"></div>
              <div className="w-[100px] h-[40px] bg-amber-200"></div>
              <div className="w-[100px] h-[40px] bg-amber-300"></div>
              <div className="w-[100px] h-[40px] bg-amber-400"></div>
              <div className="w-[100px] h-[40px] bg-amber-500"></div>
              <div className="w-[100px] h-[40px] bg-amber-600"></div>
              <div className="w-[100px] h-[40px] bg-amber-700"></div>
              <div className="w-[100px] h-[40px] bg-amber-800"></div>
              <div className="w-[100px] h-[40px] bg-amber-900"></div>
              <div className="w-[100px] h-[40px] bg-amber-100"></div>
              <div className="w-[100px] h-[40px] bg-amber-200"></div>
              <div className="w-[100px] h-[40px] bg-amber-300"></div>
              <div className="w-[100px] h-[40px] bg-amber-400"></div>
              <div className="w-[100px] h-[40px] bg-amber-500"></div>
              <div className="w-[100px] h-[40px] bg-amber-600"></div>
              <div className="w-[100px] h-[40px] bg-amber-700"></div>
              <div className="w-[100px] h-[40px] bg-amber-800"></div>
              <div className="w-[100px] h-[40px] bg-amber-900"></div>
            </div>
          </ScrollArea>
        </div>
        <div className="bg-background h-[80px] lg:hidden border-2 rounded-xl my-[10px] mr-[10px]">
          <ScrollableColorPicker colors={colors} orientation="horizontal" />
        </div>
      </div>
      <div className="bg-background h-[80px] sm:hidden border-2 rounded-xl mx-[10px] mb-[10px]">
        <ScrollableColorPicker colors={colors} orientation="horizontal" />
      </div>
    </div>
  );
};

export default Customizer;
