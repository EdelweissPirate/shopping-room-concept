import { FaBed } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setViewer } from '../../features/dataSlice'

import './header.css'

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { activeViewer } = useSelector(state => state.data)

    const openSelector = () => {

        if(activeViewer && activeViewer !== 'room'){
            const viewer = document.querySelector('#viewer')

            viewer.classList.remove('slide-down')
            viewer.classList.add('slide-up')

            const markers = document.querySelectorAll('.object-html-marker')

            markers.forEach(item => {
                item.classList.remove('fade-out')
                item.classList.add('fade-in')
            })
            
            setTimeout(() => {
                dispatch(setViewer('room'))
            }, 1100)
        } else {
            dispatch(setViewer('room'))
        }
    }

    return (
        <header>
            <div className='header-holder'>
                <button className='btn' onClick={() => {navigate('/')}}>
                    <h1>3D ShowRoom</h1>
                </button>
                <button className='btn-rooms' onClick={openSelector}>
                    <FaBed />
                </button>
            </div>
        </header>
    )
}

export default Header