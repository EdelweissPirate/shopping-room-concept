import { useDispatch, useSelector } from 'react-redux'

import { setViewer } from '../../features/dataSlice'

import './footer.css'

function Footer() {
    const dispatch = useDispatch()

    const { activeViewer } = useSelector(state => state.data)

    const showInfo = () => {
        if(activeViewer && activeViewer !== 'info'){
            const viewer = document.querySelector('#viewer')

            viewer.classList.remove('slide-down')
            viewer.classList.add('slide-up')

            const markers = document.querySelectorAll('.object-html-marker')

            markers.forEach(item => {
                item.classList.remove('fade-out')
                item.classList.add('fade-in')
            })
            
            setTimeout(() => {
                dispatch(setViewer('info'))
            }, 1100)
        } else {
            dispatch(setViewer('info'))
        }
    }

    return (
        <footer>
            <div>
                <div>
                    <button className='btn btn-round' onClick={() => showInfo()} style={{padding: '.5rem 1rem'}}>
                        <h2>i</h2>
                    </button>
                </div>
                
                <div>
                    {/* <a href='https://github.com/EdelweissPirate/shopping-room-concept' target='_blank'> */}
                        <h3>© 2023</h3>
                    {/* </a> */}
                </div>
            </div>
        </footer>
    )
}

export default Footer