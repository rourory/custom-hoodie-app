/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { BufferAttribute, Points } from "three";

const ParticleField: React.FC = () => {
  const points = useMemo(() => {
    const positions: number[] = [];
    for (let i = 0; i < 500; i++) {
      positions.push((Math.random() - 0.5) * 50);
      positions.push((Math.random() - 0.5) * 50);
      positions.push((Math.random() - 0.5) * 50);
    }
    return new BufferAttribute(new Float32Array(positions), 3);
  }, []);

  const ref = useRef<Points>(null!);
  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        {/*@ts-ignore*/}
        <bufferAttribute attach="attributes-position" {...points} />
      </bufferGeometry>
      <pointsMaterial size={0.2} transparent opacity={0.7} color="#ffffff" />
    </points>
  );
};
export default ParticleField;
