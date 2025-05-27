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
import CanvasText from "@/components/atoms/CanvasText";
import TextInput from "@/components/molecules/TextInput";
import TextStyleButtonBlock from "../TextStyleButtonBlock";
import AdvancedTextStyleButtonBlock from "../AdvancedTextStyleButtonBlock";
import StockImages from "../StockImages";

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
    selectedObjectId,
    selectedObjectType,
    setSelectedObjectId,
    objects,
    addImage,
    addText,
    changeSelectedText,
    changeSelectedTextColor,
    changeSelectedTextFontFamily,
    changeSelectedTextDecoration,
    changeSelectedTextStyle,
    deleteSelectedObject,
    updateObjectDimentions,
  } = useCanvasCustomizerStore();

  const handleOnDragObjectEnd = React.useCallback(
    (e: KonvaEventObject<DragEvent>, obj: DraggableCanvasObject) => {
      updateObjectDimentions(
        obj.id,
        e.currentTarget.x(),
        e.currentTarget.y(),
        obj.scaleX,
        obj.scaleY,
        obj.rotation
      );
    },
    []
  );

  const handleOnTransformObjectEnd = React.useCallback(
    (e: KonvaEventObject<Event>, obj: DraggableCanvasObject) => {
      updateObjectDimentions(
        obj.id,
        e.currentTarget.x(),
        e.currentTarget.y(),
        e.currentTarget.scaleX(),
        e.currentTarget.scaleY(),
        e.currentTarget.rotation()
      );
    },
    []
  );

  const checkDeselect = React.useCallback(
    (e: KonvaEventObject<MouseEvent>) => {
      const clickedOnEmpty = e.target === e.target.getStage();
      if (clickedOnEmpty) {
        setSelectedObjectId(null, null);
      }
    },
    [setSelectedObjectId]
  );

  const updateImageTextureOnModel = useCallback(() => {
    if (!isCanvasReady) return;
    stageRef.current
      ?.toImage({
        pixelRatio: 4,
        quality: 1,
        callback: setImage,
      })
      .catch((error) =>
        console.log("Error while getting image from canvas:", error)
      );
  }, [stageRef, setImage, isCanvasReady]);

  const textButtonsDisabled = React.useMemo(() => {
    return !selectedObjectId || selectedObjectType !== "text";
  }, [selectedObjectId, selectedObjectType]);

  React.useEffect(() => {
    updateImageTextureOnModel();
  }, [objects, selectedObjectId]);

  React.useEffect(() => {
    setIsCanvasReady(true);
  }, []);

  return (
    <div className="w-full">
      <div
        ref={canvasContainerRef}
        className="flex relative"
        style={{ height: stageSize.height }}
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
            {objects.map(
              (img) =>
                img.type === "image" && (
                  <CanvasImage
                    img={img}
                    key={img.id}
                    isSelected={selectedObjectId == img.id}
                    onDragEnd={(e) => handleOnDragObjectEnd(e, img)}
                    onTransformEnd={(e) => handleOnTransformObjectEnd(e, img)}
                    onMouseOver={() => setCursor("move")}
                    onMouseOut={() => setCursor("default")}
                    onMouseDown={() => {
                      setSelectedObjectId(img.id, "image");
                    }}
                  />
                )
            )}
            {objects.map(
              (txt) =>
                txt.type === "text" && (
                  <CanvasText
                    key={txt.id}
                    text={{
                      id: txt.id,
                      text: txt.text,
                      fontSize: txt.fontSize,
                      fontFamily: txt.fontFamily,
                      x: txt.x,
                      y: txt.y,
                      rotation: txt.rotation,
                      scaleX: txt.scaleX,
                      scaleY: txt.scaleY,
                      color: txt.color,
                      fontDecoration: txt.fontDecoration,
                      fontStyle: txt.fontStyle,
                    }}
                    isSelected={selectedObjectId == txt.id}
                    onDragEnd={(e) => handleOnDragObjectEnd(e, txt)}
                    onTransformEnd={(e) => handleOnTransformObjectEnd(e, txt)}
                    onMouseOver={() => setCursor("move")}
                    onMouseOut={() => setCursor("default")}
                    onMouseDown={() => {
                      setSelectedObjectId(txt.id, "text");
                    }}
                  />
                )
            )}
          </KonvaLayer>
        </KonvaStage>
        <FloatingDeleteButton
          visible={Boolean(selectedObjectId)}
          onClick={deleteSelectedObject}
        />
      </div>
      <div>
        <TextStyleButtonBlock
          textButtonsDisabled={textButtonsDisabled}
          isSelectedObjectIncludesStyle={(parameter) =>
            objects
              .find((obj) => obj.id === selectedObjectId)
              ?.fontStyle?.includes(parameter) || false
          }
          isSelectedObjectIncludesDecoration={(parameter) =>
            objects
              .find((obj) => obj.id === selectedObjectId)
              ?.fontDecoration?.includes(parameter) || false
          }
          changeSelectedTextStyle={changeSelectedTextStyle}
          changeSelectedTextDecoration={changeSelectedTextDecoration}
        />
        <AdvancedTextStyleButtonBlock
          selectedFontFamily={
            objects.find((obj) => obj.id === selectedObjectId)?.fontFamily
          }
          textButtonsDisabled={textButtonsDisabled}
          changeSelectedTextColor={changeSelectedTextColor}
          changeSelectedTextFontFamily={changeSelectedTextFontFamily}
          changeSelectedText={changeSelectedText}
          selectedTextColor={
            objects.find((obj) => obj.id === selectedObjectId)?.color
          }
        />
        <TextInput addText={addText} className="w-full mt-1" />
        <ImageInput addImage={addImage} className="w-full mt-1" />
        {/* our images */}
        <StockImages onAddImage={addImage}/>
      </div>
    </div>
  );
};

export default CanvasEditor;
