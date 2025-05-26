import ModelLoader from "@/components/atoms/ModelLoader";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { degToRad } from "three/src/math/MathUtils.js";

const ModelViewer: React.FC<IModelViewer> = ({ position, fov, modelProps }) => {
  return (
    <Canvas
      className="w-[500px] bg-background"
      shadows
      gl={{ preserveDrawingBuffer: true }}
      eventPrefix="client"
      camera={{ position, fov }}
    >
      <React.Suspense fallback={<ModelLoader />}>
        <OrbitControls
          minPolarAngle={degToRad(65)}
          maxPolarAngle={degToRad(115)}
          maxDistance={5}
          minDistance={2}
          enablePan={false}
        />
        <Environment preset="city" environmentIntensity={0.7} />
        <Center>{modelProps.model}</Center>
      </React.Suspense>
    </Canvas>
  );
};

export default ModelViewer;
