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
                    <Route path='staff' element={(<p>Users</p>)} />
                    <Route path='parties' element={(<p>suppliers and customers</p>)} />
                    <Route path='invoices' element={(<p>invoices</p>)} />
                    <Route path='products' element={(<p>products</p>)} />
                </Route>
            </Routes>
        </Router>
    )
}