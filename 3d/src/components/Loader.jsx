import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progess } = useProgress();
  console.log(progess);
  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        75%
      </p>
    </Html>
  );
};

export default Loader;
