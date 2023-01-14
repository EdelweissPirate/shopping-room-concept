import { useState } from "react"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import RoomViewer from "../3d/RoomViewer"
import ItemViewer from "../ItemViewer/ItemViewer"

function Layout() {
    const [activeItem, setActiveItem] = useState(null)

    const onClick = (arg) => {
        if(typeof arg !== 'string') return

        const itemViewer = document.querySelector('#item-viewer')
    
        itemViewer.classList.remove('slide-out')
        itemViewer.classList.add('slide-in')
        // console.log('currentItem: ', arg);

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
            <ItemViewer activeItem={activeItem} />
            <RoomViewer onClick={onClick} />
            <Footer />
        </>
    )
}

export default Layout