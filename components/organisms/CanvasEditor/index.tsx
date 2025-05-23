/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import React, { useCallback } from "react";
import { Stage as KonvaStage, Layer as KonvaLayer } from "react-konva";
import { useResponsiveCanvas } from "@/hooks/canvas";
import {
  useCanvasCustomizerStore,
  useModelSettingsStore,
} from "@/store/customizer";
import { Stage } from "konva/lib/Stage";
import CanvasImage from "@/components/atoms/CanvasImage";
import { KonvaEventObject } from "konva/lib/Node";
import ImageInput from "@/components/atoms/ImageInput";
import FloatingDeleteButton from "@/components/atoms/DeleteButton";

const CanvasEditor: React.FC<CanvasEditorProps> = ({
  uvUrl,
  aspectWidth,
  aspectHeight,
}) => {
  const [cursor, setCursor] = React.useState("default");
  const [isCanvasReady, setIsCanvasReady] = React.useState(false);

  const canvasContainerRef = React.useRef<HTMLDivElement>(null);
  const stageRef = React.useRef<Stage>(null);

  const { setImage } = useModelSettingsStore();
  const { stageSize } = useResponsiveCanvas(
    aspectWidth,
    aspectHeight,
    canvasContainerRef
  );

  const {
    selectedImageId,
    setSelectedImageId,
    images,
    addImage,
    deleteSelectedImage,
    updateImagePosition,
    updateImageScale,
    updateImageRotation,
  } = useCanvasCustomizerStore();

  const checkDeselect = React.useCallback(
    (e: KonvaEventObject<MouseEvent>) => {
      const clickedOnEmpty = e.target === e.target.getStage();
      if (clickedOnEmpty) {
        setSelectedImageId(null);
      }
    },
    [setSelectedImageId]
  );

  const updateImageTextureOnModel = useCallback(() => {
    if (!isCanvasReady) return;
    stageRef.current
      ?.toImage({ pixelRatio: 7, quality: 1 })
      .then((img) => {
        if (img) setImage(img as HTMLImageElement);
      })
      .catch((error) =>
        console.log("Error while getting image from canvas:", error)
      );
  }, [stageRef, setImage, isCanvasReady]);

  React.useEffect(() => {
    updateImageTextureOnModel();
    setIsCanvasReady(true);
  }, [images, updateImageTextureOnModel, selectedImageId]);
  return (
    <div className="w-full">
      <div
        ref={canvasContainerRef}
        className="flex relative"
        style={{ height: stageSize.height }}
        onMouseLeave={() => setSelectedImageId(null)}
      >
        <KonvaStage
          style={{
            //@ts-ignore
            "--bg-image-url": `url(${uvUrl})`,
            cursor,
          }}
          className={`bg-[image:var(--bg-image-url)] bg-cover overflow-clip rounded-md absolute top-0 left-0`}
          width={stageSize.width}
          height={stageSize.height}
          scaleX={stageSize.scale}
          scaleY={stageSize.scale}
          onMouseDown={checkDeselect}
          ref={stageRef}
        >
          <KonvaLayer>
            {images.map((img) => (
              <CanvasImage
                img={img}
                key={img.id}
                isSelected={selectedImageId == img.id}
                onDragEnd={(e) => {
                  updateImagePosition(
                    img.id,
                    e.currentTarget.x(),
                    e.currentTarget.y()
                  );
                }}
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
                onMouseDown={() => {
                  setSelectedImageId(img.id);
                }}
              />
            ))}
          </KonvaLayer>
        </KonvaStage>
        <FloatingDeleteButton
          visible={Boolean(selectedImageId)}
          onClick={deleteSelectedImage}
        />
      </div>

      <ImageInput addImage={addImage} />
    </div>
  );
};

export default CanvasEditor;
