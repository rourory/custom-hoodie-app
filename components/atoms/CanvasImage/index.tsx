import React from "react";
import {
  Image as KonvaImage,
  Transformer as KonvaTransformer,
} from "react-konva";
import { Transformer } from "konva/lib/shapes/Transformer";

const rotationSnapTolerance = 5;
const rotationSnaps = [0, 45, 90, 135, 180, 225, 270, 315];
const imageInitialHeight = 500;

const CanvasImage: React.FC<CanvasImageProps> = ({
  img,
  onDragStart,
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
    return (img.image.width * imageInitialHeight) / img.image.height;
  }, [img.image.width, img.image.height]);

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
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onTransformEnd={onTransformEnd}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onMouseDown={onMouseDown}
        ref={imageRef}
      />
      <KonvaTransformer
        ref={transformerRef}
        rotationSnaps={rotationSnaps}
        rotationSnapTolerance={rotationSnapTolerance}
        preventDefault
      />
    </>
  );
};

export default CanvasImage;
