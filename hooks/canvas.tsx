import React, { useCallback, useEffect } from "react";
import { useState } from "react";

//   transformerRef: React.RefObject<Transformer | null>,
//   imageRefs: React.RefObject<Record<number, Image>>
// ) => {
//   const [transformerSelectedId, setTransformerSelectedId] = useState<
//     number | null
//   >(null);

//   React.useEffect(() => {
//     if (transformerRef.current) {
//       const layer = transformerRef.current.getLayer();
//       if (transformerSelectedId !== null) {
//         transformerRef.current.nodes([
//           imageRefs.current[transformerSelectedId],
//         ]);
//       } else {
//         transformerRef.current.nodes([]);
//       }
//       if (layer) {
//         layer.batchDraw();
//       }
//     }
//   }, [transformerSelectedId]);

//   return {
//     transformerSelectedId,
//     setTransformerSelectedId,
//   };
// };

export const useImages = (afterDeleteCallback: () => void) => {
  const [images, setImages] = useState<CanvasAppImage[]>([]);
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
      setImages((prev) => [
        ...prev,
        {
          id,
          image: img,
          x: 50,
          y: 50,
          height: img.height,
          width: img.width,
          context: "",
          rotation: 0,
          scaleX: 1,
          scaleY: 1,
        },
      ]);
    };
  };

  return { selectedId, setSelectedId, images, handleDelete, handleUpload };
};

export const useResponsiveCanvas: ResponsiveCanvasHook = (
  aspectWidth: number,
  aspectHeight: number,
  containerRef: React.RefObject<HTMLDivElement | null>
) => {
  const [stageSize, setStageSize] = useState<CanvasStageSize>({
    width: 2000 * aspectWidth,
    height: 2000 * aspectHeight,
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
