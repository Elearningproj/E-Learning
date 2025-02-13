import { Route, Routes } from 'react-router-dom'
import ManageCourses from './screens/Admin/ManageCourses'
import ManageUsers from './screens/Admin/ManageUsers'
import ManageLessons from './screens/Admin/ManageLessons'
import AdminDashboard from './screens/Admin/AdminDashboard'


import { Toaster } from 'react-hot-toast'
import Certificate from './screens/User/Certificate'
import Cart from './screens/User/Cart'
import Home from './screens/User/Home'
import Login from './screens/User/login'
import Register from './screens/User/register'
import About from './screens/User/About'
import Contact from './screens/User/Contact'
// import Courses from './screens/User/Courses'
import DiscussionPage from './screens/User/DiscussionPage'




function App() {
    return (
        <div className='container-fluid'>
            <Routes>
                     <Route path="/" element={<Home/>}/>
                     <Route path='/home' element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                     {/* <Route path='/courses' element={<Courses/>}/> */}
                     <Route path='/ManageCourses' element={<ManageCourses />} /> 
                     <Route path='/ManageUsers' element={<ManageUsers />} /> 
                     <Route path='/ManageLessons' element={<ManageLessons />} /> 
                     <Route path='/AdminDashboard' element={<AdminDashboard />} /> 
                     <Route path='/Certificate' element={<Certificate />} /> 
                <Route path='/Cart' element={<Cart />} /> 
                <Route path='/DiscussionPage' element={<DiscussionPage/>}/>
                
                     
                     

            </Routes>
            <Toaster/>
        </div>
    )
}

export default App