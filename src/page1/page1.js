import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import Cube from "./cube";

export default function Page1() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Cube
          position={[-1.2, 0, 0]}
          onClick={() => window.appHistory.push("/page2")}
        />
      </Suspense>
    </Canvas>
  );
}
