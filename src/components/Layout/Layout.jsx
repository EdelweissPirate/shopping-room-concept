import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Routers from '../../routers/Routers'

function Layout() {
    

    return (
        <>
            <Routers>
                <Header />
                <Footer />
            </Routers>
        </>
    )
}

export default Layout