"use client";

/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Transformer } from "konva/lib/shapes/Transformer";
import {
  Stage,
  Layer,
  Image as KonvaImage,
  Transformer as KonvaTransformer,
} from "react-konva";
import { Delete } from "lucide-react";
import { useResponsiveCanvas, useTransformation } from "@/hooks/canvas";
import { Image } from "konva/lib/shapes/Image";
import { useCustomizerImagesStore } from "@/store/customizer";

interface CanvasEditorProps {
  editorContext: string;
}

const CanvasEditor: React.FC<CanvasEditorProps> = ({ editorContext }) => {
  const canvasContainerRef = React.useRef<HTMLDivElement>(null);

  const imageRefs = React.useRef<Record<number, Image>>({});

  const transformerRef = React.useRef<Transformer>(null);
  const [cursor, setCursor] = React.useState("default");

  const { transformerSelectedId, setTransformerSelectedId } = useTransformation(
    transformerRef,
    imageRefs
  );

  const {
    setSelectedImageId,
    images,
    addImage,
    deleteSelectedImage,
    updateImagePosition,
    updateImageScale,
    updateImageRotation,
  } = useCustomizerImagesStore();

  const { stageSize } = useResponsiveCanvas(16, 9, canvasContainerRef);
  return (
    <div className="w-full">
      <div
        ref={canvasContainerRef}
        className="relative"
        style={{ height: stageSize.height }}
      >
        <Stage
          className="bg-[url('/transparent-background-grid.webp')] bg-cover overflow-clip rounded-md shadow-sm absolute top-0 left-0"
          width={stageSize.width}
          height={stageSize.height}
          scaleX={stageSize.scale}
          scaleY={stageSize.scale}
          style={{
            cursor,
          }}
        >
          <Layer>
            {images.map(
              (img) =>
                editorContext === img.context && (
                  <KonvaImage
                    onDragStart={() => {
                      setTransformerSelectedId(img.id);
                      setSelectedImageId(img.id);
                    }}
                    onDragEnd={(e) => {
                      updateImagePosition(
                        img.id,
                        e.currentTarget.x(),
                        e.currentTarget.y()
                      );
                    }}
                    key={img.id}
                    image={img.image}
                    x={img.x}
                    y={img.y}
                    draggable
                    scaleX={img.scaleX}
                    scaleY={img.scaleY}
                    rotation={img.rotation}
                    height={500}
                    width={(img.image.width * 500) / img.image.height}
                    onTransformEnd={(e) => {
                      updateImagePosition(
                        img.id,
                        e.currentTarget.x(),
                        e.currentTarget.y()
                      );
                      updateImageRotation(img.id, e.currentTarget.rotation());
                      updateImageScale(
                        img.id,
                        e.currentTarget.scaleX(),
                        e.currentTarget.scaleY()
                      );
                    }}
                    onMouseOver={() => setCursor("move")}
                    onMouseOut={() => setCursor("default")}
                    onClick={() => {
                      setSelectedImageId(img.id);
                      setTransformerSelectedId(img.id);
                    }}
                    //@ts-ignore
                    ref={(node) => (imageRefs.current[img.id] = node)}
                  />
                )
            )}
            <KonvaTransformer
              ref={transformerRef}
              rotationSnaps={[0, 45, 90, 135, 180, 225, 270, 315]}
              rotationSnapTolerance={5}
              preventDefault
            />
          </Layer>
        </Stage>
        <Button
          className="absolute top-[calc(50%-20px)] right-2 rounded-[100%] p-0 h-[40px] scale-75 opacity-50 hover:opacity-100 hover:scale-100 cursor-pointer ease-in-out"
          style={{
            display:
              images.length > 0 && transformerSelectedId ? "block" : "none",
          }}
          onClick={() => {
            deleteSelectedImage();
            setTransformerSelectedId(null);
          }}
        >
          <Delete />
        </Button>
      </div>

      <Label className="mt-2" htmlFor="picture">
        Загрузите ваше изображение
      </Label>
      <Input
        className="mt-2 cursor-pointer"
        title="12"
        id="picture"
        type="file"
        accept="image/*"
        onChange={(e) => addImage(e.target.files?.[0], editorContext)}
      />
    </div>
  );
};

export default CanvasEditor;
