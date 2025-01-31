// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Footer(){
  return(
  <section id='footer'>
     <footer>
      <div className="mt-4" style={{backgroundColor:"#D8C4B6", marginTop:"50px",height:"250px"}}>
      <div className="row"> 
        <div className="col" style={{marginTop:"20px",marginLeft:"60px"}}>
          <h5><b>iSchool</b></h5>
          <p>
            329,Sterling Center Camp,Pune<br></br>
            Maharashtra 411001,India
            </p>
        </div>
        <div className="col"  style={{marginTop:"20px"}}>
          <h5>Contact us</h5>
          <p>+9556569676 <br></br>
          Email- iSchool12.gmail.com <br></br>
          Mon-Sat 9am-3pm 
          </p>
        </div>
        <div className="col"  style={{marginTop:"20px"}}>
          <h5>Company</h5>
          <li>About us</li>
          <li>Careers</li>
          <li>Terms</li>
          <li>Privacy policy</li>
        </div>
        <div className="icons">
            <img src="../../images/User/Twiter.jpg" width={50} height={30} style={{marginLeft:"1000px",marginTop:"20px"}}/>
            <img src="./image/Twiter.jpg" width={50} height={30} style={{marginLeft:"20px",marginTop:"20px"}}/>
            <img src="./image/Facebook.png" width={50}  height={30} style={{marginLeft:"20px",marginTop:"20px"}}/>
            <img src="./image/Github.png" width={50}  height={30} style={{marginLeft:"20px",marginTop:"20px"}}/>
          </div>
         
       </div>
      
      </div>
      
        </footer>
      </section>
  )
}
export default Footer;