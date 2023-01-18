import { Html } from "@react-three/drei"
import { useSelector } from "react-redux"
import { FaBed } from 'react-icons/fa'

function Helper() {
    const { activeViewer } = useSelector(state => state.data)

    return (
        <Html position={[-3.25, 1, 0]} style={{width: '300px'}}>
            <div className="w-80 h-fill">
                {!activeViewer && <h1 className='textCenter'>
                    CLICK <FaBed /> TO SELECT A ROOM
                </h1>}
            </div>
        </Html>
    )
}

export default Helper