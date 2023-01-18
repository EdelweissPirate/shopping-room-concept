import { useEffect, useState } from "react"
import { generateUUID } from "three/src/math/MathUtils"

function Marquee() {
    const [textList, setTextList] = useState(null)

    useEffect(() => {initTextList()}, [])

    const _Marquee = <p>CONCEPT-<span>CONCEPT-</span>CONCEPT-</p>

    const initTextList = () => {
        const array1 = new Array(4).fill(0).map(() => {
            return <li className="bolder" key={'mText0_' + generateUUID()}>{_Marquee}</li>
        })

        const array2 = new Array(4).fill(0).map(() => {
            return <li className="bolder" key={'mText1_' + generateUUID()}>{_Marquee}</li>
        })

        setTextList([array1, array2])
    }

    return (
        <section id="marquee" className='floatIn-down' >
            {textList ? 
            <>
                <ul className="anim-marquee">
                    {[...textList[0]]}
                </ul>

                <ul className="anim-marquee" aria-hidden="true">
                    {[...textList[1]]}
                </ul>
            </>
            :
            null}
        </section>
    )
}

export default Marquee