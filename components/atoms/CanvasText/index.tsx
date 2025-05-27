import React from "react";
import { Text, Transformer as KonvaTransformer } from "react-konva";
import { Transformer } from "konva/lib/shapes/Transformer";
import { getTransformerVisualSettings } from "@/lib/component-visual-settings";

const transformerSettings = getTransformerVisualSettings();

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
        onTap={onMouseDown}
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
        fontStyle={text.fontStyle}
        textDecoration={text.fontDecoration}
      />
      <KonvaTransformer
        ref={transformerRef}
        {...transformerSettings}
        preventDefault
      />
    </>
  );
};

export default CanvasText;
