import { Route, Routes } from 'react-router-dom'
import ManageCourses from './screens/Admin/ManageCourses'
import ManageUsers from './screens/Admin/ManageUsers'
import ManageLessons from './screens/Admin/ManageLessons'
import AdminDashboard from './screens/Admin/AdminDashboard'


import { Toaster } from 'react-hot-toast'
import Certificate from './screens/User/Certificate'
import Cart from './screens/User/Cart'


function App() {
    return (
        <div className='container-fluid'>
            <Routes>
                     <Route path='/ManageCourses' element={<ManageCourses />} /> 
                     <Route path='/ManageUsers' element={<ManageUsers />} /> 
                     <Route path='/ManageLessons' element={<ManageLessons />} /> 
                     <Route path='/AdminDashboard' element={<AdminDashboard />} /> 
                     <Route path='/Certificate' element={<Certificate />} /> 
                     <Route path='/' element={<Cart />} /> 
                     

            </Routes>
            <Toaster/>
        </div>
    )
}

export default App