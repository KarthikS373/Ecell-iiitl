import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";

import Scene from "../components/Scene";
import Loader from "../components/Loader";

const HomePage = ({ fov }) => {
  return (
    <>
      <Canvas
        concurrent
        shadowMap
        camera={{ position: [0, 0, 5], fov:75 }}
      >
        <color attach="background" args={["#000"]} />
        <Suspense fallback={<Loader />}>
          <Scene />
        </Suspense>
        <ambientLight intensity={0.4} />
      </Canvas>
    </>
  );
};

export default HomePage;
