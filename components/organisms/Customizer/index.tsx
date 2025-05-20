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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CanvasEditor from "../CanvasEditor";

const colors = [
  "red",
  "green",
  "blue",
  "yellow",
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
      <div className="bg-background hidden sm:block md:hidden lg:block w-[110px] shadow-md rounded-xl my-[10px] ml-[10px]">
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
          <rectAreaLight position={new Vector3(0, 0, 2)} intensity={0.3} />
          <Environment preset="city" environmentIntensity={0.7} />
          <Center>{children}</Center>
        </Suspense>
      </Canvas>
      <div className=" md:min-w-[40vw] md:max-w-[40vw] lg:min-w-[30vw] lg:max-w-[30vw] hidden md:block">
        <div className="bg-background h-full md:h-[calc(100%-110px)] lg:h-[calc(100%-20px)] shadow-md rounded-xl mr-[10px] my-[10px]">
          <ScrollArea className="h-full w-full p-4">
            <div className="flex flex-col items-center w-full h-full bg-background ">
              <Tabs defaultValue="chest" className="w-full items-center">
                <TabsList>
                  <TabsTrigger value="chest" className="cursor-pointer">
                    Грудь
                  </TabsTrigger>
                  <TabsTrigger value="back" className="cursor-pointer">
                    Спинка
                  </TabsTrigger>
                  <TabsTrigger value="rightsleeve" className="cursor-pointer">
                    Правый рукав
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="chest" className="w-full">
                  <CanvasEditor editorContext="sweatshot.chest" />
                </TabsContent>
                <TabsContent value="back" className="w-full">
                  {/* <CanvasEditor editorContext="sweatshot.back" /> */}
                </TabsContent>
                <TabsContent value="rightsleeve" className="w-full">
                  {/* <CanvasEditor editorContext="sweatshot.rightSleeve" /> */}
                </TabsContent>
              </Tabs>
            </div>
          </ScrollArea>
        </div>
        <div className="bg-background h-[80px] lg:hidden shadow-md rounded-xl my-[10px] mr-[10px]">
          <ScrollableColorPicker colors={colors} orientation="horizontal" />
        </div>
      </div>
      <div className="bg-background h-[80px] sm:hidden shadow-md rounded-xl mx-[10px] mb-[10px]">
        <ScrollableColorPicker colors={colors} orientation="horizontal" />
      </div>
    </div>
  );
};

export default Customizer;
