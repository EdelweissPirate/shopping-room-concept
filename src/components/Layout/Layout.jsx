import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Routers from '../../routers/Routers'

import Marquee from "../Marquee/Marquee"

function Layout() {
    

    return (
        <Routers>
            <Marquee />
            <Header />
            <Footer />
        </Routers>
    )
}

export default Layout