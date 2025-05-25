declare interface CanvasEditorProps {
  uvUrl: string;
  aspectWidth: number;
  aspectHeight: number;
}

declare interface CanvasObject {
  id: number;
  x: number;
  y: number;
  scaleX: number;
  scaleY: number;
  rotation: number;
}

declare interface CanvasAppImage extends CanvasObject {
  image?: HTMLImageElement;
}

declare interface CanvasAppText extends CanvasObject {
  text?: string;
  fontSize?: number;
  fontFamily?: string;
  color?: string;
}

declare interface DraggableCanvasObject extends CanvasAppText, CanvasAppImage {
  type: "text" | "image";
}

declare interface CanvasStageSize {
  width: number;
  height: number;
  scale: number;
}

declare type ResponsiveCanvasHook = (
  aspectWidth: number,
  aspectHeight: number,
  containerRef: React.RefObject<HTMLDivElement | null>
) => {
  stageSize: CanvasStageSize;
  containerRef: React.RefObject<HTMLDivElement | null>;
};

declare interface DraggableCanvasComponentProps {
  isSelected: boolean;
  onDragEnd: (e: KonvaEventObject<DragEvent>) => void;
  onTransformEnd: (e: KonvaEventObject<Event>) => void;
  onMouseOver: () => void;
  onMouseOut: () => void;
  onMouseDown: () => void;
}

declare interface CanvasImageProps extends DraggableCanvasComponentProps {
  img: CanvasAppImage;
}

declare interface CanvasTextProps extends DraggableCanvasComponentProps {
  text: CanvasAppText;
}

declare interface FloatingDeleteButtonProps extends IComponentClassNameAsProp {
  visible: boolean;
  onClick: () => void;
}
