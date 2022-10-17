import React from "react";
import * as THREE from "three";
import { useMatcapTexture, Octahedron } from "@react-three/drei";

import useSlerp from "../hooks/use-slerp";
import useRenderTarget from "../hooks/use-render-target";

import MainTitle from "./Title";
import Mirrors from "./Mirrors";
import TitleCopies from "./TitleCopy";

function Scene() {
  const [cubeCamera, renderTarget] = useRenderTarget();
  const group = useSlerp();

  const [matcapTexture] = useMatcapTexture("C8D1DC_575B62_818892_6E747B");

  return (
    <>
      <group name="sceneContainer" ref={group}>
        <Octahedron
          layers={[11]}
          name="background"
          args={[20, 4, 4]}
          position={[0, 0, -5]}
        >
          <meshMatcapMaterial
            matcap={matcapTexture}
            side={THREE.BackSide}
            transparent
            opacity={0.3}
            color="#FFFFFF"
          />
        </Octahedron>
        <cubeCamera
          layers={[11]}
          name="cubeCamera"
          ref={cubeCamera}
          args={[0.1, 100, renderTarget]}
          position={[0, 0, 5]}
        />
        <MainTitle name="title" position={[0, 0, -10]} />
        <TitleCopies layers={[11]} />
        <Mirrors layers={[0, 11]} envMap={renderTarget.texture} />
      </group>
    </>
  );
}

export default Scene;
