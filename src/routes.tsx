import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/login'
import OrganizationAdminLayout from './components/Layouts/OrganizationAdmin'

export const TiamoRoutes = () =>{
    return (
        <Router>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/admin' element={<OrganizationAdminLayout />}>
                    <Route path='dashboard' element={(<p>Dashboard</p>)} />
                </Route>
            </Routes>
        </Router>
    )
}