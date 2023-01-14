import { extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import React from "react";

extend({ OrbitControls });

const CameraController = () => {
    const { camera, gl } = useThree();

    return (
        <orbitControls
            maxPolarAngle={Math.PI / 3}
            minPolarAngle={Math.PI / 3}
            args={[camera, gl.domElement]}
        />
    );
};

export default CameraController;