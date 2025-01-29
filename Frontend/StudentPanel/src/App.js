import { Routes ,Route } from 'react-router-dom';
import Login from './screens/login';
import Register from './screens/register';
import Home from './screens/Home';
import Courses from './screens/Courses'
import About from './screens/About'
import { ToastContainer } from 'react-toastify';
import Contact from './screens/Contact';
import Course from './screens/Course';
import Profile from './screens/Profile';
import Quiz from './screens/Quiz';





function App() {
  return (
    <div className='App'>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
     <Route path='/courses' element={<Courses/>}/>
     <Route path='/course' element={<Course/>}/>
     <Route path='/profile' element={<Profile/>}/>
     <Route path='/quiz' element={<Quiz/>}/>
     {/* <Route path='/feedback' element={<Feedback/>}/> */}
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
