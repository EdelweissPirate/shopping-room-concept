import { useSelector } from 'react-redux'
import { FaRegObjectGroup } from 'react-icons/fa'

import { items } from '../../../data/data.js'

import './itemViewer.css'
import { useEffect } from 'react'

function ItemViewer() {
    const { activeItem } = useSelector(state => state.data)

    useEffect(() => {    
        // const bg = document.querySelector('.item-layout')
        // if(bg) bg.style.opacity = '1'

        // const viewer = document.querySelector('#viewer')
        
        // viewer.style.backgroundColor = 'rgba(11, 11, 11, 0.6)'
    }, [activeItem])
    

    if(!activeItem) return

    const handleHideBG = () => {
        const bg = document.querySelector('.item-layout')
        const viewer = document.querySelector('#viewer')
        
        if(bg.style.opacity === '0'){
            viewer.style.backgroundColor = 'rgba(11, 11, 11, 0.6)'
            bg.style.opacity = '1'
        } else {
            viewer.style.backgroundColor = 'rgba(0, 0, 0, 0)'
            bg.style.opacity = '0'
        }
    }

    const item = items[activeItem]

    return (
        <>
            <div style={{position: 'absolute', top: '2%', right: '0%'}}>
                <button className='btn' style={{scale: '2'}} onClick={() => handleHideBG()}>
                    <FaRegObjectGroup />
                </button>
            </div>
            <div className="grid item-layout">
                <div className="item-name">
                    <h2>{item.name}</h2>
                </div>
                <div className="item-image">
                    <div className="item-image-inner">
                        <img src={item.imageURL} alt="item image" />
                    </div>
                </div>
                <div className="item-price">
                    <h3>{item.price}</h3>
                </div>
                <div className="item-link">
                    <button className='btn btn-round'>
                        <a href={item.link} target="_blank" >
                            LINK
                        </a>
                    </button>
                </div>
                <div className="item-desc">
                    <p>
                        {item.description}
                    </p>
                </div>
            </div>
        </>
    )
}

export default ItemViewer