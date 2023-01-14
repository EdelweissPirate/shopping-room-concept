import { useState } from "react"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import RoomViewer from "../3d/RoomViewer"
import ItemViewer from "../ItemViewer/ItemViewer"
import RoomSelector from "../RoomSelector/RoomSelector"

function Layout() {
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
        <>
            <Header />
            <RoomSelector />
            <ItemViewer activeItem={activeItem} />
            <RoomViewer onClick={onClick} />
            <Footer />
        </>
    )
}

export default Layout