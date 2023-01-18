import { EffectComposer, Bloom } from '@react-three/postprocessing'

import Model_Bedframe from "../objects/Model_BedFrame"
import Model_BedsideCabinet from "../objects/Model_BedsideCabinet"
import Model_Drawers from "../objects/Model_Drawers"
import Model_Duvet from "../objects/Model_Duvet"
import Model_Matress from "../objects/Model_Matress"
import Model_Pillows from "../objects/Model_Pillows"
import Model_Room from "../objects/Model_Room"
import Model_Rug from "../objects/Model_Rug"
import Model_Window from "../objects/Model_Window"
import Model_Shelves from "../objects/Model_Shelves"
import Model_Wardrobe from "../objects/Model_Wardrobe"
import Model_SquareShelves from "../objects/Model_SquareShelves"
import Model_UnderbedStorage from "../objects/Model_UnderbedStorage"
import Model_Frames from '../objects/Model_Frames'

function Room_GoldenHour({ onClick }) {
    return (
        <group position={[0, -1, 0]}>
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
        </group>
    )
}

export default Room_GoldenHour