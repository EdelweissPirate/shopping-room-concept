import React from 'react'
import { useNavigate } from 'react-router-dom'

function Splash() {
    const navigate = useNavigate()

    const onClick = () => {
        navigate('/home')
    }

    return (
        <section className='flex col flex-centre'>
            <button className='btn btn-round w-80' onClick={onClick}>
                ENTER
            </button>
        </section>
    )
}

export default Splash