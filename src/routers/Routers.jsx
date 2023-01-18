import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'

function Routers({ children }) {
    return (
        <Router>
            {children}
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </Router>
    )
}

export default Routers