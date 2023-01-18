import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Viewer from "../Viewer/Viewer"
import Routers from '../../routers/Routers'

import Marquee from "../Marquee/Marquee"

function Layout() {
    

    return (
        <Routers>
            <Marquee />
            <Header />
            <Footer />
            <Viewer />
        </Routers>
    )
}

export default Layout