"use client";

import { Button } from "@/components/ui/button";
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Transformer } from "konva/lib/shapes/Transformer";
import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  Stage,
  Layer,
  Image as KonvaImage,
  Transformer as KonvaTransformer,
} from "react-konva";
import { Delete } from "lucide-react";

interface CanvasImage {
  id: number;
  image: HTMLImageElement;
  x: number;
  y: number;
}

const useTransformation = (
  transformerRef: React.RefObject<Transformer | null>,
  imageRefs: React.RefObject<Record<number, any>>
) => {
  const [transformerSelectedId, setTransformerSelectedId] = useState<
    number | null
  >(null);

  React.useEffect(() => {
    if (transformerRef.current) {
      const layer = transformerRef.current.getLayer();
      if (transformerSelectedId !== null) {
        transformerRef.current.nodes([
          imageRefs.current[transformerSelectedId],
        ]);
      } else {
        transformerRef.current.nodes([]);
      }
      if (layer) {
        layer.batchDraw();
      }
    }
  }, [transformerSelectedId]);

  return {
    transformerSelectedId,
    setTransformerSelectedId,
  };
};

const useImages = (afterDeleteCallback: () => void) => {
  const [images, setImages] = useState<CanvasImage[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleDelete = () => {
    const newImages = images.filter((image) => image.id !== selectedId);
    // setTransformerSelectedId(null);
    setImages(newImages);
    afterDeleteCallback();
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const img = new window.Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      const id = Date.now();
      setImages((prev) => [...prev, { id, image: img, x: 50, y: 50 }]);
    };
  };

  return { selectedId, setSelectedId, images, handleDelete, handleUpload };
};

const useResponsiveCanvas = (
  aspectWidth: number,
  aspectHeight: number,
  containerRef: React.RefObject<HTMLDivElement | null>
) => {
  const [stageSize, setStageSize] = useState({
    width: 100 * aspectWidth,
    height: 100 * aspectHeight,
    scale: 1,
  });

  const updateSize = useCallback(() => {
    if (!containerRef?.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    const scale = containerWidth / stageSize.width;
    setStageSize({
      width: Math.round(stageSize.width * scale),
      height: Math.round(stageSize.height * scale),
      scale: scale,
    });
  }, [stageSize, containerRef]);

  useEffect(() => {
    updateSize();
    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return { stageSize, containerRef };
};

const CanvasEditor: React.FC = () => {
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  const imageRefs = useRef<Record<number, any>>({});
  const transformerRef = useRef<Transformer>(null);
  const [cursor, setCursor] = useState("default");

  const { transformerSelectedId, setTransformerSelectedId } = useTransformation(
    transformerRef,
    imageRefs
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { setSelectedId, images, handleDelete, handleUpload } = useImages(
    () => {
      console.log(123);
    }
  );
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
            {images.map((img) => (
              <KonvaImage
                onDragStart={() => {
                  setTransformerSelectedId(img.id);
                  setSelectedId(img.id);
                }}
                key={img.id}
                image={img.image}
                x={img.x}
                y={img.y}
                draggable
                height={500}
                width={(img.image.width * 500) / img.image.height}
                onMouseOver={() => setCursor("move")}
                onMouseOut={() => setCursor("default")}
                onClick={() => {
                  setSelectedId(img.id);
                  setTransformerSelectedId(img.id);
                }}
                //@ts-ignore
                ref={(node) => (imageRefs.current[img.id] = node)}
              />
            ))}
            <KonvaTransformer
              ref={transformerRef}
              rotationSnaps={[0, 45, 90, 135, 180, 225, 270, 315]}
              rotationSnapTolerance={5}
              preventDefault
            />
          </Layer>
        </Stage>
        <Button
          className="absolute top-[calc(50%-20px)] right-2 rounded-[100%] p-0 h-[40px] scale-75 opacity-50 hover:opacity-100 hover:scale-100 cursor-pointer"
          style={{
            display:
              images.length > 0 && transformerSelectedId ? "block" : "none",
          }}
        >
          <Delete />
        </Button>
      </div>

      <Label className="mt-2" htmlFor="picture">
        Выберите изображение
      </Label>
      <Input
        className="mt-2 cursor-pointer"
        id="picture"
        type="file"
        accept="image/*"
        onChange={handleUpload}
      />
    </div>
  );
};

export default CanvasEditor;
