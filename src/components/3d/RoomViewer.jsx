import * as THREE from 'three'
import { Environment, Center, PresentationControls } from "@react-three/drei"
import { Canvas, useLoader } from "@react-three/fiber"
import { Suspense } from 'react'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { RGBELoader } from 'three-stdlib'

import CameraController from "./CameraController"
import Model_Bedframe from "./models/Model_BedFrame"
import Model_BedsideCabinet from "./models/Model_BedsideCabinet"
import Model_Drawers from "./models/Model_Drawers"
import Model_Duvet from "./models/Model_Duvet"
import Model_Matress from "./models/Model_Matress"
import Model_Pillows from "./models/Model_Pillows"
import Model_Room from "./models/Model_Room"
import Model_Rug from "./models/Model_Rug"
import Model_Window from "./models/Model_Window"
import Model_Shelves from "./models/Model_Shelves"
import Model_Wardrobe from "./models/Model_Wardrobe"
import Model_SquareShelves from "./models/Model_SquareShelves"
import Model_UnderbedStorage from "./models/Model_UnderbedStorage"
import Model_Frames from './models/Model_Frames'

function RoomViewer({ onClick }) {
    const camConfig = {
        position: [5, 9, 10], //Desktop: [5, 9, 10] 
        zoom: 1.6 //DESKTOP: 2
    }

    const texture = useLoader(RGBELoader, 'src/assets/the_sky_is_on_fire_1k.hdr')
    texture.mapping = THREE.EquirectangularReflectionMapping
    
    return (
        <section>
            <Canvas camera={camConfig}>
                <CameraController />
                <ambientLight intensity={0.4} color={'#FF9470'} />
                <spotLight color={'#FF9470'} position={[-8, 6, 0]} angle={0.3} penumbra={.2} intensity={1}/>
                <Environment  near={1} far={1000} resolution={256} map={texture} />
                <group position={[0, 0, 0]}>
                    <Center>
                        <Suspense fallback={'Loading...'}>
                            <Model_Room />
                            <Model_Window />
                            <Model_Bedframe onClick={onClick} />
                            <Model_Rug onClick={onClick} />
                            <Model_Matress />
                            <Model_Duvet onClick={onClick} />
                            <Model_Pillows />
                            <Model_BedsideCabinet onClick={onClick} />
                            <Model_Drawers onClick={onClick} />
                            <Model_Shelves onClick={onClick} />
                            <Model_Wardrobe onClick={onClick} />
                            <Model_SquareShelves onClick={onClick} />
                            <Model_UnderbedStorage onClick={onClick} />
                            <Model_Frames onClick={onClick} />

                            <EffectComposer>
                                <Bloom luminanceThreshold={1} intensity={0.85} levels={9} mipmapBlur />
                            </EffectComposer>
                        </Suspense>
                    </Center>
                </group>
            </Canvas>
        </section>
    )
}

export default RoomViewer