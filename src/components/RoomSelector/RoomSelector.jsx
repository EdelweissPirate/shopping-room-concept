import Viewer from "../Viewer/Viewer"

function RoomSelector() {
    const closeView = () => {
        const roomSelector = document.querySelector('#room-selector')
        const itemViewer = document.querySelector('#item-viewer')
    
        roomSelector.classList.remove('slide-down')
        roomSelector.classList.add('slide-up')

        itemViewer.classList.remove('slide-in')
        itemViewer.classList.add('slide-out')

        const markers = document.querySelectorAll('.object-html-marker')

        markers.forEach(item => {
            item.classList.remove('fade-out')
            item.classList.add('fade-in')
        })
    }

    return (
        <Viewer id={'room-selector'}>
            <div className="w-80 h-fill flex col flex-centre space-around relative">
                <div>
                    <button className='btn btn-round w-fill' onClick={() => {closeView()}}>
                        GOLDEN-HOUR
                    </button>
                </div>
                <div>
                    <button className='btn btn-round w-fill item-close' onClick={() => {closeView()}}>
                        CLOSE
                    </button>
                </div>
            </div>
        </Viewer>
    )
}

export default RoomSelector