import * as THREE from 'three'
import { Environment } from "@react-three/drei"
import { Canvas, useLoader } from "@react-three/fiber"
import { RGBELoader } from 'three-stdlib'
import { Suspense, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

import CameraController from "./CameraController"
import CameraTarget from './CameraTarget'

import Room_GoldenHour from './rooms/Room_GoldenHour'
import Room_ChillMinute from './rooms/Room_ChillMinute'

import Loader from '../Loader/Loader'
import Helper from './Helper'

import { setItem, setViewer } from '../../features/dataSlice'

function Showroom() {
    const [room, setRoom] = useState(null)

    const dispatch = useDispatch()

    const { activeRoom, activeItem } = useSelector(state => state.data)

    const camConfig = {
        position: [5, 9, 10], //Desktop: [5, 9, 10] 
        zoom: 1.6//DESKTOP: 2
    }

    const texture = useLoader(RGBELoader, './the_sky_is_on_fire_1k.hdr') //'src/assets/the_sky_is_on_fire_1k.hdr'
    texture.mapping = THREE.EquirectangularReflectionMapping
    
    useEffect(() => {
        getRoom()
    }, [activeRoom])

    const getRoom = () => {
        switch (activeRoom) {
            case 'golden_hour':
                return setRoom(
                    <>
                        <ambientLight intensity={0.4} color={'#FF9470'} />
                        <spotLight color={'#FF9470'} position={[-8, 6, 0]} angle={0.3} penumbra={.2} intensity={1}/>
                        <Environment  near={1} far={1000} resolution={256} map={texture} />
                        <Room_GoldenHour onClick={setActiveItem} />
                    </>
                )
            
            // case 'chill_minute':
            //     return setRoom(
            //         <Room_ChillMinute />
            //     )
        
            default:
                return setRoom(null)
        }
    }
    
    const setActiveItem = (arg) => {
        if(typeof arg == 'string'){
            dispatch(setViewer('item'))
            dispatch(setItem(arg))
        }
    }

    return (
        <section>
            <Suspense fallback={<Loader />}>
                <Canvas camera={camConfig}>
                    <CameraController />
                    <CameraTarget currentPos={activeItem} />
                    
                    {room ? 
                    <Suspense fallback={<Loader />}>
                        {room}
                        <gridHelper position={[0, -1, 0]} args={[20, 20, 0xff0000, '#419D78']}  />
                    </Suspense>
                    :
                    <Helper />
                    }
                    

                    <EffectComposer>
                        <Bloom luminanceThreshold={1} intensity={0.85} levels={9} mipmapBlur />
                    </EffectComposer>
                </Canvas>
            </Suspense> 
        </section>
    )
}

export default Showroom