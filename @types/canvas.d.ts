declare interface CanvasImage {
  id: number;
  image: HTMLImageElement;
  x: number;
  y: number;
  scaleX: number;
  scaleY: number;
  rotation: number;
  context: string;
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
