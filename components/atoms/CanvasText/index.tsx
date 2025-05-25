import React from "react";
import { Text, Transformer as KonvaTransformer } from "react-konva";
import { Transformer } from "konva/lib/shapes/Transformer";

const rotationSnapTolerance = 5;
const rotationSnaps = [0, 45, 90, 135, 180, 225, 270, 315];

const CanvasText: React.FC<CanvasTextProps> = ({
  text,
  onDragEnd,
  isSelected,
  onTransformEnd,
  onMouseDown,
  onMouseOut,
  onMouseOver,
}) => {
  const transformerRef = React.useRef<Transformer>(null);
  const textRef = React.useRef(null);

  React.useEffect(() => {
    if (isSelected && transformerRef.current && textRef.current) {
      transformerRef.current.nodes([textRef.current]);
    } else {
      transformerRef.current?.nodes([]);
    }
  }, [isSelected]);

  return (
    <>
      <Text
        ref={textRef}
        draggable
        onDragEnd={onDragEnd}
        onTransformEnd={onTransformEnd}
        onMouseDown={onMouseDown}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
        text={text.text}
        x={text.x}
        y={text.y}
        scaleX={text.scaleX}
        scaleY={text.scaleY}
        rotation={text.rotation}
        fontSize={text.fontSize}
        fontFamily={text.fontFamily}
        fill={text.color}
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

export default CanvasText;
