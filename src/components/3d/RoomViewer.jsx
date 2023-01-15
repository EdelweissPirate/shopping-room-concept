import * as THREE from 'three'
import { Environment, Center, PresentationControls } from "@react-three/drei"
import { Canvas, useLoader } from "@react-three/fiber"
import { RGBELoader } from 'three-stdlib'

import CameraController from "./CameraController"
import Room_GoldenHour from './rooms/Room_GoldenHour'

function RoomViewer({ onClick }) {
    const camConfig = {
        position: [5, 9, 10], //Desktop: [5, 9, 10] 
        zoom: 1.6 //DESKTOP: 2
    }

    const texture = useLoader(RGBELoader, './the_sky_is_on_fire_1k.hdr') //'src/assets/the_sky_is_on_fire_1k.hdr'
    texture.mapping = THREE.EquirectangularReflectionMapping
    
    return (
        <section>
            <Canvas camera={camConfig}>
                <CameraController />
                <ambientLight intensity={0.4} color={'#FF9470'} />
                <spotLight color={'#FF9470'} position={[-8, 6, 0]} angle={0.3} penumbra={.2} intensity={1}/>
                <Environment  near={1} far={1000} resolution={256} map={texture} />
                <Room_GoldenHour onClick={onClick} />
            </Canvas>
        </section>
    )
}

export default RoomViewer