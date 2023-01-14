import { FaBed } from 'react-icons/fa'

import './header.css'

function Header() {
    const onClick = () => {
        const roomSelector = document.querySelector('#room-selector')
        const itemViewer = document.querySelector('#item-viewer')
    
        roomSelector.classList.remove('slide-up')
        roomSelector.classList.add('slide-down')

        itemViewer.classList.remove('slide-in')
        itemViewer.classList.add('slide-out')

        const markers = document.querySelectorAll('.object-html-marker')

        markers.forEach(item => {
            item.classList.remove('fade-in')
            item.classList.add('fade-out')
        })
    }

    return (
        <header>
            <div className='header-holder'>
                <h1>FAKEA v0.0.1</h1>
                <button className='btn-rooms' onClick={onClick}>
                    <FaBed />
                </button>
            </div>
        </header>
    )
}

export default Header