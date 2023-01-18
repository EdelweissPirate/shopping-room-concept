import { useSelector } from "react-redux"

import RoomViewer from "../components/3d/RoomViewer"
import InfoViewer from "../components/InfoViewer/infoViewer"
import ItemViewer from "../components/ItemViewer/ItemViewer"
import RoomSelector from "../components/RoomSelector/RoomSelector"
import Viewer from "../components/shared/Viewer/Viewer"

function Home() {
    const { activeViewer } = useSelector(state => state.data)

    return (
        <div id="home">
            <Viewer>
                {activeViewer === 'item' ?
                    <ItemViewer />
                    : activeViewer === 'room' ?
                    <RoomSelector />
                    : activeViewer === 'info' ? 
                    <InfoViewer />
                    : null
                }
            </Viewer>
            <RoomViewer />
        </div>
    )
}

export default Home