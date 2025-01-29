import { Route, Routes } from 'react-router-dom'
//import ManageCourses from './screens/ManageCourses'


import { Toaster } from 'react-hot-toast'


function App() {
    return (
        <div className='container-fluid'>
            <Routes>
                    {/* <Route path='/ManageCourses' element={<ManageCourses />} /> */}
      

            </Routes>
            <Toaster/>
        </div>
    )
}

export default App