/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import React from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Text3D, OrbitControls, Center } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import ParticleField from "@/components/atoms/ParticleField";
import { Color, Fog } from "three";
import ModelLoader from "@/components/atoms/ModelLoader";

const SceneSetup: React.FC = () => {
  const { scene } = useThree();
  scene.fog = new Fog("#0a0a1a", 5, 25);
  return null;
};

const NotFoundPage: React.FC = () => {
  return (
    <div style={{ width: "100vw", height: "calc(100vh - 80px)" }}>
      <Canvas camera={{ position: [0, 0, 12], fov: 50 }} shadows>
        <React.Suspense fallback={<ModelLoader />}>
          {/* Setup fog */}
          <SceneSetup />

          {/* Particle backdrop */}
          <ParticleField />

          {/* Lights */}
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <ambientLight intensity={0.2} />
          <directionalLight
            position={[5, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />

          {/* Central 3D 404 Text */}
          <Center position={[0, 1.5, 0]}>
            <Text3D
              font="/fonts/gentilis_bold.typeface.json"
              size={1.5}
              height={0.3}
              curveSegments={16}
              bevelEnabled
              bevelThickness={0.04}
              bevelSize={0.03}
              bevelSegments={8}
              castShadow
              receiveShadow
            >
              404
              <meshStandardMaterial
                color="#ff4f81"
                emissive={new Color("#ff4f81")}
                emissiveIntensity={0.7}
              />
            </Text3D>
          </Center>

          {/* Subtitle */}
          <Center position={[0, -1.5, 0]}>
            <Text3D
              font="/fonts/gentilis_bold.typeface.json"
              size={0.4}
              height={0.1}
              curveSegments={8}
              bevelEnabled
              bevelThickness={0.015}
              bevelSize={0.01}
            >
              Page not found
              <meshStandardMaterial
                color="#ffffff"
                emissive={new Color("#ffffff")}
                emissiveIntensity={0.3}
              />
            </Text3D>
          </Center>

          {/* Post-processing effects */}
          <EffectComposer>
            <Bloom
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
              intensity={0.6}
            />
            <Noise opacity={0.1} />
            <Vignette eskil={false} offset={0.5} darkness={1.1} />
          </EffectComposer>

          {/* Camera controls */}
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.9}
            enablePan={false}
          />
        </React.Suspense>
      </Canvas>
    </div>
  );
};

export default NotFoundPage;
