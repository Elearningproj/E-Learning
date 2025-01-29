import { Link, useNavigate } from 'react-router-dom'
import Login from '../screens/login'
import Register from './../screens/register';

function Navbar() {
  // get navigate function
  const navigate = useNavigate()

  const onLogout = () => {
    // cleat the session storage
    sessionStorage.removeItem('name')
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('email')
    sessionStorage.removeItem('phone')

    // go to login screen
    navigate('/login')
  }

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid" style={{backgroundColor:"#213555",height:"70px", width:"100%"}}> 
    <a href="#" class="logo">
        <img src="./image/logo.png" height={"70px"} width={"70px"}/>
      </a>
      <a class="navbar-brand" href="home" style={{marginLeft:"30px",color:"#D8C4B6"}} >Home</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav" children>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" style={{marginLeft:"30px",color:"#D8C4B6"}} aria-current="page" href="courses">Courses</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style={{marginLeft:"30px",color:"#D8C4B6"}} href="contact">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style={{marginLeft:"30px",color:"#D8C4B6"}} href="about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link"style={{marginLeft:"30px",color:"#D8C4B6"}} href="/login" >Login</a>
            <link to="/login"/>
         </li>
         <li class="nav-item">
            <a class="nav-link"style={{marginLeft:"30px",color:"#D8C4B6"}} href="register" >Register</a>
            <link to="/register"/>
         </li>
         <form class="d-flex" role="search" style={{marginLeft:"450px"}}>
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit" style={{marginLeft:"30px"}}>Search</button>
    </form>
    <li class="nav-item">
            <a class="nav-link"style={{marginLeft:"30px",color:"#D8C4B6"}} href="home" >Logout</a>
            <link to="/logout"/>
         </li>
        </ul>
        
      </div>
    </div>
  </nav>
  )
}

export default Navbar
