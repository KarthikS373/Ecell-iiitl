import React, { useEffect, useRef } from "react";
import { Text } from "@react-three/drei";

import useLayers from "../hooks/use-layers";

const TEXT_PROPS = {
  fontSize: 2.55,
  font:
    "https://fonts.gstatic.com/s/syncopate/v12/pe0pMIuPIYBCpEV5eFdKvtKqBP5p.woff",
};

const MainTitle = ({ layers, ...props }) => {
  const group = useRef();
  useEffect(() => {
    group.current.lookAt(0, 0, 0);
  }, []);

  const textRef = useLayers(layers);

  return (
    <group {...props} ref={group}>
      <Text
        ref={textRef}
        name="text-panna"
        depthTest={false}
        material-toneMapped={false}
        material-color="#FFFFFF"
        {...TEXT_PROPS}
      >
        Enspire
      </Text>
    </group>
  );
};

export default MainTitle;
