import React from "react";
import {
  Image as KonvaImage,
  Transformer as KonvaTransformer,
} from "react-konva";
import { Transformer } from "konva/lib/shapes/Transformer";
import { getTransformerVisualSettings } from "@/lib/component-visual-settings";

const imageInitialHeight = 500;
const transformerSettings = getTransformerVisualSettings();

const CanvasImage: React.FC<CanvasImageProps> = ({
  img,
  onDragEnd,
  isSelected,
  onTransformEnd,
  onMouseDown,
  onMouseOut,
  onMouseOver,
}) => {
  const imageRef = React.useRef(null);
  const transformerRef = React.useRef<Transformer>(null);

  const imageWidth = React.useMemo(() => {
    if (img.image)
      return (img.image.width * imageInitialHeight) / img.image.height;
  }, [img.image?.width, img.image?.height]);

  React.useEffect(() => {
    if (isSelected && transformerRef.current && imageRef.current) {
      transformerRef.current.nodes([imageRef.current]);
    } else {
      transformerRef.current?.nodes([]);
    }
  }, [isSelected]);

  return (
    <>
      <KonvaImage
        image={img.image}
        x={img.x}
        y={img.y}
        draggable
        scaleX={img.scaleX}
        scaleY={img.scaleY}
        rotation={img.rotation}
        height={imageInitialHeight}
        width={imageWidth}
        onDragEnd={onDragEnd}
        onTransformEnd={onTransformEnd}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onMouseDown={onMouseDown}
        onTap={onMouseDown}
        ref={imageRef}
      />
      <KonvaTransformer
        ref={transformerRef}
        preventDefault
        {...transformerSettings}
      />
    </>
  );
};

export default CanvasImage;
