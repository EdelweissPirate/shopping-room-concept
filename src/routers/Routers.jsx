import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Splash from '../pages/Splash'
import Home from '../pages/Home'

function Routers({ children }) {
    return (
        <Router>
            {children}
            <Routes>
                <Route path='/' element={<Splash />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </Router>
    )
}

export default Routers