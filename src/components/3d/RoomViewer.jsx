import * as THREE from 'three'
import { Environment } from "@react-three/drei"
import { Canvas, useLoader } from "@react-three/fiber"
import { RGBELoader } from 'three-stdlib'
import { Suspense, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CameraController from "./CameraController"
import Room_GoldenHour from './rooms/Room_GoldenHour'
import Loader from '../shared/Loader/Loader'

import { setItem, setViewer } from '../../features/dataSlice'

function RoomViewer() {
    const dispatch = useDispatch()
    const { activeRoom } = useSelector(state => state.data)

    const [room, setRoom] = useState(null)

    const setActiveItem = (arg) => {
        dispatch(setViewer('item'))
        dispatch(setItem(arg))
    }

    let camConfig = {
        position: [5, 9, 10], //Desktop: [5, 9, 10] 
        zoom: 1.6//DESKTOP: 2
    }

    const texture = useLoader(RGBELoader, './the_sky_is_on_fire_1k.hdr') //'src/assets/the_sky_is_on_fire_1k.hdr'
    texture.mapping = THREE.EquirectangularReflectionMapping
    
    const getRoom = () => {
        switch (activeRoom) {
            case 'golden_hour':
                return setRoom(<Room_GoldenHour onClick={setActiveItem} />)
        
            default:
                return setRoom(null)
        }
    }

    useEffect(() => {
        getRoom()
    }, [activeRoom])
    

    return (
        <section>
            {room ? 
                <Suspense fallback={<Loader />}>
                    <Canvas camera={camConfig}>
                        <CameraController />
                        <ambientLight intensity={0.4} color={'#FF9470'} />
                        <spotLight color={'#FF9470'} position={[-8, 6, 0]} angle={0.3} penumbra={.2} intensity={1}/>
                        <Environment  near={1} far={1000} resolution={256} map={texture} />

                        <Suspense fallback={<Loader />}>
                            {room}
                        </Suspense>

                        <gridHelper position={[0, -1, 0]} args={[20, 20, 0xff0000, '#419D78']}  />
                    </Canvas>
                </Suspense> 
                : null
            }
        </section>
    )
}

export default RoomViewer