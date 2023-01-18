import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import ItemViewer from './ItemViewer/ItemViewer'
import RoomSelector from './RoomSelector/RoomSelector'
import InfoViewer from './InfoViewer/InfoViewer'
import Wrapper from "../Wrapper/Wrapper"

import { setViewer, setItem } from "../../features/dataSlice"
import { hideMarkers } from "../../utils"

function Viewer({ children }) {
    const [view, setView] = useState(null)
    const dispatch = useDispatch()
    
    const { activeViewer, activeItem } = useSelector(state => state.data)

    useEffect(() => {
        if(activeViewer){
            const viewer = document.querySelector('#viewer')

            viewer.classList.remove('slide-up')
            viewer.classList.add('slide-down')

            viewer.style.backgroundColor = 'rgba(11, 11, 11, 0.6)'

            hideMarkers(true)
        }

        getContent()
    }, [activeViewer])
    
    
    const handleClose = () => {
        const viewer = document.querySelector('#viewer')

        viewer.classList.remove('slide-down')
        viewer.classList.add('slide-up')

        hideMarkers(false)
        
        setTimeout(() => {
            dispatch(setViewer(null))
            if(activeItem) dispatch(setItem(null))
        }, 1100)
    }

    const getContent = () => {
        activeViewer === 'item' ? setView(<ItemViewer />)
        : activeViewer === 'room' ?setView(<RoomSelector />)
        : activeViewer === 'info' ? setView(<InfoViewer />)
        : null
    }

    return (
        <section id='viewer' className="bg-dark click-z">
            <div className="w-80 h-fill flex col flex-centre relative space-around">
                <Wrapper>
                    {children ? children : view}
                </Wrapper>

                <div>
                    <button className='btn btn-round w-fill' onClick={() => {handleClose()}}>
                        CLOSE
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Viewer