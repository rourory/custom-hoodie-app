import React from "react";
import { Vector3 } from "three";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import ScrollableColorPicker from "../ScrollableColorPicker";
import CanvasEditor from "../CanvasEditor";
import ModelCustomizerDrawer from "@/components/molecules/ModelCutomizerDrawer";
import { Button } from "@/components/ui/button";
import ModelViewer from "../ModelViewer";
import { Settings } from "lucide-react";

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

const Customizer: React.FC<ICustomizerComponent> = ({
  modelProps,
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
      {modelProps.model ? (
        <>
          {/* Vertical color picker on the left side of window */}
          <div className="bg-background hidden sm:block md:hidden lg:block w-[110px] border-1 border-border rounded-xl my-[10px] ml-[10px]">
            <ScrollableColorPicker
              className="h-full w-full"
              colors={colors}
              orientation="vertical"
            />
          </div>
          {/* Model vierew on the center of window */}
          <ModelViewer position={position} fov={fov} modelProps={modelProps} />
          {/* Desktop editor */}
          <div className="bg-background md:min-w-[40vw] md:max-w-[40vw] lg:min-w-[30vw] lg:max-w-[30vw] hidden md:block">
            <div className="bg-background h-full md:h-[calc(100%-110px)] lg:h-[calc(100%-20px)] border-1 border-border rounded-xl mr-[5px] my-[10px]">
              <ScrollArea className="h-full w-full p-3">
                <div className="flex flex-col items-center w-full h-full bg-background">
                  <CanvasEditor
                    uvUrl={modelProps.uvUrl}
                    aspectHeight={modelProps.textureAspectHeight}
                    aspectWidth={modelProps.textureAspectWidth}
                  />
                </div>
              </ScrollArea>
            </div>
            <div className="bg-background h-[80px] lg:hidden border-1 border-border rounded-xl my-[10px] mr-[5px]">
              <ScrollableColorPicker colors={colors} orientation="horizontal" />
            </div>
          </div>
          {/* Mobile editor */}
          <div className="bg-background absolute top-0 right-0 block md:hidden">
            <ModelCustomizerDrawer
              content={
                <CanvasEditor
                  uvUrl={modelProps.uvUrl}
                  aspectHeight={modelProps.textureAspectHeight}
                  aspectWidth={modelProps.textureAspectWidth}
                />
              }
            >
              <Button
                variant={"outline"}
                className="absolute top-4 right-4 flex"
              >
                <Settings />
              </Button>
            </ModelCustomizerDrawer>
          </div>
          {/* Horizontal color picker on the bottom of window */}
          <div className="bg-background h-[80px] sm:hidden border-1 border-border rounded-xl mx-[10px] mb-[10px]">
            <ScrollableColorPicker colors={colors} orientation="horizontal" />
          </div>
        </>
      ) : (
        <div className="absolute top-0 right-0 flex items-center justify-center h-full w-full text-xl font-bold">
          Модель не найдена :(
        </div>
      )}
    </div>
  );
};

export default Customizer;
