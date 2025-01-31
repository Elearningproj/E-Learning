import DashboardNavbar from "../../Components/User/DashboardNavbar";



function UserDashboard(){

    return(
        <div>
            <DashboardNavbar/>
          
          <div>
            <div style={{height:"800px",width:"300px",backgroundColor:"#213555"}}>
            <li class="nav-item">
            <a class="nav-link" style={{marginLeft:"50px",color:"#D8C4B6",marginTop:"30px"}} href="Courses"><h4>Courses</h4></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style={{marginLeft:"50px",color:"#D8C4B6",marginTop:"10px"}} href="MyCourses"><h4>MyCourses</h4></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"style={{marginLeft:"50px",color:"#D8C4B6",marginTop:"10px"}} href="/Cart" ><h4>Cart</h4></a>
            <link to="/login"/>
         </li>
         <li class="nav-item">
            <a class="nav-link"style={{marginLeft:"50px",color:"#D8C4B6",marginTop:"10px"}} href="/Certificate" ><h4>Certificate</h4></a>
            <link to="/login"/>
         </li>
         <li class="nav-item">
            <a class="nav-link"style={{marginLeft:"50px",color:"#D8C4B6",marginTop:"10px"}} href="/Discussion" ><h4>Discussion</h4></a>
            <link to="/login"/>
         </li>
         <li class="nav-item">
            <a class="nav-link"style={{marginLeft:"50px",color:"#D8C4B6",marginTop:"10px"}} href="/Profile" ><h4>Profile</h4></a>
            <link to="/login"/>
         </li>
         <li class="nav-item">
            <a class="nav-link"style={{marginLeft:"50px",color:"#D8C4B6",marginTop:"10px"}} href="/login" ><h4>LogOut</h4></a>
            <link to="/login"/>
         </li>
            </div>
            </div>
        </div>
       
    )
}

export default UserDashboard;