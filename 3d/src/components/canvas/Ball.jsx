import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  Icosahedron,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

//for showing percentage before loading finish
// import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          flatShading
          polygonOffset
          polygonOffsetFactor={-5}
        />
        <Decal map={decal} position={[0, 0, 1]} />
      </mesh>
    </Float>
  );
};

//Create a Canvas
const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" shadows gl={{ preserveDrawingBuffer: true }}>
      <Suspense
      // fallback={<CanvasLoader />}
      >
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
