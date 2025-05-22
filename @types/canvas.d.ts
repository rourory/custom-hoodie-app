declare interface CanvasEditorProps {
  uvUrl: string;
  darkModeUvUrl: string;
  aspectWidth: number;
  aspectHeight: number;
}

declare interface CanvasImage {
  id: number;
  image: HTMLImageElement;
  x: number;
  y: number;
  scaleX: number;
  scaleY: number;
  rotation: number;
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

declare interface CanvasImageProps {
  img: CanvasImage;
  isSelected: boolean;
  onDragEnd: (e: KonvaEventObject<DragEvent>) => void;
  onTransformEnd: (e: KonvaEventObject<Event>) => void;
  onMouseOver: () => void;
  onMouseOut: () => void;
  onMouseDown: () => void;
}

declare interface FloatingDeleteButtonProps extends IComponentClassNameAsProp {
  visible: boolean;
  onClick: () => void;
}
