import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Torus, Octahedron, Stars } from "@react-three/drei";
import { useRef, Suspense } from "react";
import type { Mesh, Group } from "three";

function FloatingShape({
  position,
  color,
  shape,
  scale = 1,
}: {
  position: [number, number, number];
  color: string;
  shape: "ico" | "torus" | "octa";
  scale?: number;
}) {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.2;
      ref.current.rotation.y += delta * 0.25;
    }
  });

  const material = (
    <meshStandardMaterial
      color={color}
      roughness={0.15}
      metalness={0.6}
      wireframe={shape === "torus"}
    />
  );

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      {shape === "ico" && (
        <Icosahedron ref={ref} args={[1, 0]} position={position} scale={scale}>
          {material}
        </Icosahedron>
      )}
      {shape === "torus" && (
        <Torus ref={ref} args={[1, 0.35, 16, 60]} position={position} scale={scale}>
          {material}
        </Torus>
      )}
      {shape === "octa" && (
        <Octahedron ref={ref} args={[1, 0]} position={position} scale={scale}>
          {material}
        </Octahedron>
      )}
    </Float>
  );
}

function Rig() {
  const group = useRef<Group>(null);
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y =
        state.pointer.x * 0.3 + Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      group.current.rotation.x = state.pointer.y * 0.15;
    }
  });

  return (
    <group ref={group}>
      <FloatingShape position={[-3.5, 1.5, -2]} color="#8b5cf6" shape="ico" scale={1.1} />
      <FloatingShape position={[3.8, -1, -3]} color="#06b6d4" shape="torus" scale={1.3} />
      <FloatingShape position={[2.5, 2, -1]} color="#ec4899" shape="octa" scale={0.9} />
      <FloatingShape position={[-3, -1.8, -2]} color="#3b82f6" shape="octa" scale={0.8} />
      <FloatingShape position={[0, 0, -4]} color="#a78bfa" shape="ico" scale={1.6} />
      <FloatingShape position={[4.5, 1.5, -4]} color="#22d3ee" shape="ico" scale={0.7} />
    </group>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#a78bfa" />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#22d3ee" />
        <Stars radius={50} depth={50} count={2500} factor={4} saturation={0} fade speed={1} />
        <Rig />
      </Suspense>
    </Canvas>
  );
}
