import { useDispatch } from "react-redux"
import { setRoom, setViewer } from "../../features/dataSlice"

function RoomSelector() {
    const dispatch = useDispatch()

    const array_room = ['golden_hour', 'chill_minute']

    const setActiveRoom = (arg) => {
        const viewer = document.querySelector('#viewer')

        viewer.classList.remove('slide-down')
        viewer.classList.add('slide-up')

        const markers = document.querySelectorAll('.object-html-marker')

        markers.forEach(item => {
            item.classList.remove('fade-out')
            item.classList.add('fade-in')
        })

        dispatch(setRoom(arg))
        
        setTimeout(() => {
            dispatch(setViewer(null))
        }, 1100)
    }

    const generateItems = () => {
        const output = array_room.map(item => {
            const label = item.split('_').join(' ').toUpperCase()

            return (
                <li key={item} className='mb-2'>
                    <button className='btn btn-round w-fill' onClick={() => setActiveRoom(item)}>
                        {label}
                    </button>
                </li>
            )
        })
        
        return output
    }

    return (
        <div>
            <ul className="flex col space-around">
                {generateItems()}
            </ul>
        </div>
    )
}

export default RoomSelector