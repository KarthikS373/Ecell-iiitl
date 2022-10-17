import React, { useMemo } from "react";
import * as THREE from "three";
import MainTitle from "./Title";

const TitleCopies = ({ layers }) => {
  const vertices = useMemo(() => {
    const y = new THREE.IcosahedronGeometry(10);
    return y.vertices;
  }, []);

  return (
    <group name="titleCopies">
      {vertices.map((vertex, i) => (
        <MainTitle
          name={"titleCopy-" + i}
          key={`title-${i}`}
          position={vertex}
          layers={layers}
        />
      ))}
    </group>
  );
};

export default TitleCopies;
