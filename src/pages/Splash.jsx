import React from 'react'
import { useNavigate } from 'react-router-dom'

import { handleFadeOut } from '../utils'

function Splash() {
    const navigate = useNavigate()

    const onClick = () => {
        const splashPage = document.querySelector('#splash')
        
        handleFadeOut(splashPage, navigate, '/home')
    }

    return (
        <section id='splash' className='fade-in'>
            <div className='textCenter pointer h-fill flex col flex-centre' onClick={onClick}>
                <h1 className='no-mouse text-xxl'>FAKEA</h1>
            </div>
        </section>
    )
}

export default Splash