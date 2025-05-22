"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Vector3 } from "three";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils.js";
import { cn } from "@/lib/utils";
import ModelLoader from "@/components/atoms/ModelLoader";
import { ScrollArea } from "@/components/ui/scroll-area";
import ScrollableColorPicker from "../ScrollableColorPicker";
import CanvasEditor from "../CanvasEditor";
import ModelCustomizerDrawer from "@/components/molecules/ModelCutomizerDrawer";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

import { useCanvasCustomizerStore } from "@/store/customizer";

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

const Customizer: React.FC<ICustomizer> = ({
  modelProps,
  className,
  position = new Vector3(-1, 1, 3.5),
  fov = 25,
}) => {
  const { setSelectedImageId } = useCanvasCustomizerStore();

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
        className="w-[500px] bg-background"
        shadows
        gl={{ preserveDrawingBuffer: true }}
        eventPrefix="client"
        camera={{ position, fov }}
      >
        <React.Suspense fallback={<ModelLoader />}>
          <OrbitControls
            minPolarAngle={degToRad(65)}
            maxPolarAngle={degToRad(115)}
            maxDistance={5}
            minDistance={2}
            enablePan={false}
          />
          {/* <rectAreaLight position={new Vector3(0, 0, 2)} intensity={0.3} /> */}
          <Environment preset="city" environmentIntensity={0.7} />
          <Center>{modelProps.model}</Center>
        </React.Suspense>
      </Canvas>
      <div
        id="desktop-editor"
        className="bg-background md:min-w-[40vw] md:max-w-[40vw] lg:min-w-[30vw] lg:max-w-[30vw] hidden md:block"
      >
        <div className="bg-background h-full md:h-[calc(100%-110px)] lg:h-[calc(100%-20px)] shadow-md rounded-xl mr-[5px] my-[10px]">
          <ScrollArea className="h-full w-full p-3">
            <div className="flex flex-col items-center w-full h-full bg-background">
              <CanvasEditor
                uvUrl={modelProps.uvUrl}
                darkModeUvUrl={modelProps.darkModeUvUrl}
                aspectHeight={modelProps.textureAspectHeight}
                aspectWidth={modelProps.textureAspectWidth}
              />
            </div>
          </ScrollArea>
        </div>
        <div className="bg-background h-[80px] lg:hidden shadow-md rounded-xl my-[10px] mr-[10px]">
          <ScrollableColorPicker colors={colors} orientation="horizontal" />
        </div>
      </div>
      <div
        id="mobile-editor"
        className="bg-background absolute top-0 right-0 block md:hidden"
      >
        <ModelCustomizerDrawer
          onOpenChange={(open) => {
            if (!open) setSelectedImageId(null);
          }}
          content={
            <CanvasEditor
              uvUrl={modelProps.uvUrl}
              darkModeUvUrl={modelProps.darkModeUvUrl}
              aspectHeight={modelProps.textureAspectHeight}
              aspectWidth={modelProps.textureAspectWidth}
            />
          }
        >
          <Button variant={"outline"} className="absolute top-4 right-4">
            <Settings />
          </Button>
        </ModelCustomizerDrawer>
      </div>
      <div className="bg-background h-[80px] sm:hidden shadow-md rounded-xl mx-[10px] mb-[10px]">
        <ScrollableColorPicker colors={colors} orientation="horizontal" />
      </div>
    </div>
  );
};

export default Customizer;
