import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from 'three'

function CameraTarget({ currentPos }) {
    const targetRef = useRef()

    const camPos = {
        home: [5, 9, 10],
        drawers: [0, 0, .8],
        wardrobe: [1, 1, 1.6],
        shelves: [-.7, 1.5, -.8],
        frames: [-1.6, .7, -1],
        squareShelves: [1.8, 1, 0],
        duvet: [.4, 1, -.7],
        underbedStorage: [3, -.5, -.85],
        bedframe: [-1.6, .5, 1],
        rug: [2, 3, 2],
        bedsideCabinet: [1.9, -.55, -1]
    }

    const targetPos = {
        home: [0, 0, 0],
        drawers: [-2, -.5, 0],
        wardrobe: [-1.5, 0, 1.6],
        shelves: [-2, 1, -1.4],
        frames: [-1.6, .7, -2.2],
        squareShelves: [0.65, 1, -2],
        duvet: [.4, 0, -1.8],
        underbedStorage: [1.5, -.5, -.85],
        bedframe: [0, 0, -.9],
        rug: [1, 0, 1.2],
        bedsideCabinet: [1.4, -.6, -2]
    }

    const camVec = new THREE.Vector3(...camPos.home)
    const targetVec = new THREE.Vector3(...camPos.home)

    useFrame(({ camera }) => {
        switch (currentPos) {
            case null:
                targetVec.set(...targetPos.home)
                targetRef.current.position.lerp(targetVec, .01)
                camera.position.lerp(camVec.set(...camPos.home), .01)
                camera.updateProjectionMatrix()
                break;
        
            default:
                targetVec.set(...targetPos[currentPos])
                targetRef.current.position.lerp(targetVec, .025)
                camera.position.lerp(camVec.set(...camPos[currentPos]), .03)
                camera.updateProjectionMatrix()
                break;
        }

        camera.lookAt(targetRef.current.position)

        return null
    })

    return (
        <mesh ref={targetRef}>
            {/* <coneBufferGeometry attach='geometry' args={[1, 5, 5]} />
            <meshLambertMaterial attach='material' color='pink' /> */}
        </mesh>
    )
}

export default CameraTarget