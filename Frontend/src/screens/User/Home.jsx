import { Outlet } from "react-router-dom";
import Navbar  from "../../Components/User/Navbar";
import Footer from "../../Components/User/Footer";


function Home(){
    return (
        <div>
            <Navbar />
           
            <div className="container"><Outlet/></div>

            <div >
    <div style={{backgroundImage:"url('/image/back.jpg')",backgroundSize:"cover",width:"200 px", height:"800px" ,textAlign:"center"}}>
      <h1 style={{ color:"#213555"}}>Learn Anytime, Anywhere</h1>
      <p style={{ color:"#213555"}}>Explore a world of knowledge with curated online courses from top educators.</p>
    </div>
    <div style={{backgroundColor:""}} >
    <h1 style={{marginLeft:"500px"}}>Our Popular Courses</h1>
    <div className="course-box" >
          
          <div className="row" style={{marginLeft:"50px" ,marginTop:"50px"}}>
          <div className="col" >
              
              <div className="details">
                
                <h6>JavaScript Beginner Course</h6>
                <div className="star">
                <img src="/image/js.png" alt="" height={"150px"} />
                </div>
              </div>
              <div className="cost">$49.99</div>
            </div>
            <div className="col">
              
              <div className="details">
             
                <h6>HTML Complete Course</h6>
                <div className="star">
                <img src="/image/html.png" alt=""  height={"150px"} />
                </div>
              </div>
              <div className="cost">$49.99</div>
            </div>
          

            <div className="col">
             
              <div className="details">
               
                <h6>SQL Beginner Course</h6>
                <div className="star">
                <img src="/image/Mysql.jpg" alt=""   height={"150px"} width={"130px"}/>
                  </div>
              </div>
              <div className="cost">$49.99</div>
              </div>


            <div className="row" style={{marginTop:"70px"}}>
            </div>
            <div className="col">
              
              <div className="details">
             
                <h6>Python Master Course</h6>
                <div className="star">
                <img src="/image/python.png" alt=""  height={"150px"} />
                </div>
              </div>
              <div className="cost">$49.99</div>
            </div>
            <div className="col">
              
              <div className="details">
              
                <h6>Java Essentials</h6>
                <div className="star">
                <img src="/image/java.png" alt=""  height={"150px"} />
                </div>
              </div>
              <div className="cost">$49.99</div>
            </div>
            <div className="col">
             
              <div className="details">
                
                <h6>CSS Complete Course</h6>
                <div className="star">
                <img src="/image/css.png" alt=""  height={"150px"} />
                </div>
              </div>
              <div className="cost">$49.99</div>
            </div>
            </div>
          </div>
    </div>
  </div>
  
        <Footer/>
        </div>
        
    
    )
}

export default Home ;