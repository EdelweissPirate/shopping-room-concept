import { useSelector } from 'react-redux'
import { items } from '../../data/data.js'

import './itemViewer.css'

function ItemViewer() {
    const { activeItem } = useSelector(state => state.data)

    if(!activeItem) return

    const item = items[activeItem]

    return (
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
    )
}

export default ItemViewer