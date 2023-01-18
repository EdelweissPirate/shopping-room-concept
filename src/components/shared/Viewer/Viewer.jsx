import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import Wrapper from "../../Wrapper/Wrapper"

import { setViewer } from "../../../features/dataSlice"

function Viewer({ children }) {
    const dispatch = useDispatch()
    
    const { activeViewer } = useSelector(state => state.data)

    useEffect(() => {
        if(activeViewer){
            const viewer = document.querySelector('#viewer')

            viewer.classList.remove('slide-up')
            viewer.classList.add('slide-down')

            const markers = document.querySelectorAll('.object-html-marker')

            markers.forEach(item => {
                item.classList.remove('fade-in')
                item.classList.add('fade-out')
            })
        }
    }, [activeViewer])
    
    
    const handleClose = () => {
        const viewer = document.querySelector('#viewer')

        viewer.classList.remove('slide-down')
        viewer.classList.add('slide-up')

        const markers = document.querySelectorAll('.object-html-marker')

        markers.forEach(item => {
            item.classList.remove('fade-out')
            item.classList.add('fade-in')
        })
        
        setTimeout(() => {
            dispatch(setViewer(null))
        }, 1100)
    }

    return (
        <section id='viewer' className="bg-dark click-z">
            <div className="w-80 h-fill flex col flex-centre relative space-around">
                <Wrapper>
                    {children}
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