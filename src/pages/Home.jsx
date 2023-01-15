import { useState } from "react"

import RoomViewer from "../components/3d/RoomViewer"
import ItemViewer from "../components/ItemViewer/ItemViewer"
import RoomSelector from "../components/RoomSelector/RoomSelector"

function Home() {
    const [activeItem, setActiveItem] = useState(null)

    const onClick = (arg) => {
        if(typeof arg !== 'string') return

        const itemViewer = document.querySelector('#item-viewer')
    
        itemViewer.classList.remove('slide-out')
        itemViewer.classList.add('slide-in')

        const markers = document.querySelectorAll('.object-html-marker')

        markers.forEach(item => {
            item.classList.remove('fade-in')
            item.classList.add('fade-out')
        })

        setActiveItem(arg)
    }

    return (
        <div id="home">
            <RoomSelector />
            <ItemViewer activeItem={activeItem} />
            <RoomViewer onClick={onClick} />
        </div>
    )
}

export default Home