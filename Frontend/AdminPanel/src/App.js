import { Route, Routes } from 'react-router-dom'

import ManageCourses from './screens/ManageCourses'


import { Toaster } from 'react-hot-toast'
import AdminDashboard from './screens/AdminDashboard'
import ManageUsers from './screens/ManageUsers'
import ManageLessons from './screens/ManageLessons'


function App() {
    return (
        <div className='container-fluid'>
            <Routes>
                    <Route path='/AdminDashboard' element={<AdminDashboard/>}/>
                    <Route path='/ManageCourses' element={<ManageCourses />} />
                <Route path='/ManageUsers' element={<ManageUsers />} />
                <Route path='/ManageLessons' element={<ManageLessons />}/>
                
                    
            </Routes>
            <Toaster/>
        </div>
    )
}

export default App