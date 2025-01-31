import { Link, useNavigate } from 'react-router-dom'
import Navbar from "../../Components/User/Navbar";

function Contact(){
    const Navigate =useNavigate();

    return(
        <div>
       <Navbar/>
            
       <div class="container " id="Contact">  
      <h2 class="text-center ">Contact US</h2> 
      <div class="row"> 
        <div class="col-md-8"> 
        <form action="" method="post" />
            <input type="text" class="form-control" name="name" placeholder="Name" />
            <input type="text" class="form-control" name="subject" placeholder="Subject" /> 
            <input type="email" class="form-control" name="email" placeholder="E-mail" />
            <textarea class="form-control" name="message" placeholder="How can we help you?" style={{height:"100px"}}></textarea>
            <input class="btn btn-primary" type="submit" value="Send" name="submit"/>
     

        </div>
        <div class="col-md-4 " color='#D8C4B6"'>  
          <h4>iSchool</h4>
          <p>iSchool, 
          Near Police Camp II, Bokaro, 
          Jharkhand - 834005<br /> 
          Phone: +00000000 <br />
          www.ischool.com </p>
        </div> 
      </div> 
      
    </div>
    </div>
    
        
 )
}
 export default Contact; 