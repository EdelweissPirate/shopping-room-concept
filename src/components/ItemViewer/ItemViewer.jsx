import Viewer from '../Viewer/Viewer'

import { items } from '../../data/data.js'

import './itemViewer.css'

function ItemViewer({ activeItem }) {
    const onClick = () => {
        const itemViewer = document.querySelector('#item-viewer')

        itemViewer.classList.remove('slide-in')
        itemViewer.classList.add('slide-out')

        const markers = document.querySelectorAll('.object-html-marker')

        markers.forEach(item => {
            item.classList.remove('fade-out')
            item.classList.add('fade-in')
        })
    }

    const itemData = () => {
        if(!activeItem) return

        const item = items[activeItem]

        return (
            <div className="grid item-layout">
                <div className="item-name">
                    <h1>{item.name}</h1>
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

                <button className='btn btn-round item-close' onClick={() => {onClick()}}>
                    CLOSE
                </button>
            </div>
        )
    }

    return (
        <Viewer id={'item-viewer'}>
            <div className="w-80 h-fill flex col flex-centre relative">
                {itemData()}
            </div>
        </Viewer>
    )
}

export default ItemViewer