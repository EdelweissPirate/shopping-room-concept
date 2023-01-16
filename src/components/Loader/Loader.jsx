import { Html, useProgress } from "@react-three/drei"

function Loader() {
    const {
        progress
    } = useProgress()

    const styleProgressBarOuter = {
        backgroundColor: '#666', 
        width: '220px'
    }

    const styleProgressBarInner = {
        height: '30px', 
        backgroundColor: '#419D78', 
        width: `${progress}%`
    }
    
    return (
        <>
            <Html center>
                <div className="flex flex-centre col w-fill">
                    <div style={{textAlign: 'center', padding: '1rem'}}>
                        <h1>LOADING</h1>
                    </div>
                    <div style={styleProgressBarOuter}>
                        <div 
                            style={styleProgressBarInner}
                        ></div>
                    </div>
                </div>
            </Html>
        </>
    )
}

export default Loader