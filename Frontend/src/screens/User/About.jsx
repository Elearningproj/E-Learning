import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from "../../Components/User/Navbar";
import imgab from "../../images/User/about1.png"
import imgabo from "../../images/User/about2.png"
import imgabout from "../../images/User/about3.png"


function About(){
    const Navigate =useNavigate();

    return(
      <div>
        <Navbar/>
      <div
       style={{backgroundColor:"#4F709C"}}>
      <div style={{textAlign:"center"}}>
        <h1  style={{ color:"#213555"}}><b>About Us</b></h1>
        <div className='row'>
        <div className='col' ></div> 
        <div className='col'>
        <div className='mt-3'> 
        <p  style={{color:'#D8C4B6'}}>
       <i>
       Many people, especially women, believe that their financial wolt-betog is lloked solely to their ability to curu o high Income
         True inancial independence, towever, has moch more to do with understanding and talang advantage je of the Noonces you have. 
         It's soorn about setting flococial goais and warning to use flooncial strategles that will help you meet your objectives.

        My goul as a financial professioonl is to help you plan for Nooncial securly, Whether your goals linvolve buliding woolth through 
        investing, finding a chilit's college education, planning for a comfortable retiroment, or profecting your estate, I can help you 
        develop a roadmap to reach your goals and make wise decisions to help improve your financial situation.
       </i>
        </p>
       </div>
        </div>
    
       <div className='col'></div>
      </div>
     <div className='mt-5'>
     <div className='row'>
      <div className='col'>
      <a href="#" class="about" >
                    <img src={imgab} height={"200"} width={"200px"}/>
      </a>
      </div>
      <div className='col'>
      <a href="#" class="about">
        <img src={imgabo} height={"200px"} width={"200px"}/>
      </a>
      </div>
      <div className='col'>
      <a href="#" class="about">
        <img src={imgabout} height={"200px"} width={"200px"}/>
      </a>
      </div>
      </div>
     </div>
      </div>
      <div className='mt-5'style={{height:"500px",backgroundColor:"#D8C4B6"}}> 
       <div className='row'>
      <div className='col'>
       <h3 style={{marginLeft:"250px", marginTop:"50px"}}><i>Our Mission</i></h3>
       <h6 style={{marginLeft:"50px", marginTop:"20px"}}>
        Our mission is to provide you with the knowledge and skills you need,to able to craft the kinds of stories that you want to tell.
       </h6>
      </div>
      <div className='col'>
      <h3 style={{marginLeft:"250px", marginTop:"50px"}}><i>Our Values</i></h3>
      <h6 style={{marginLeft:"50px", marginTop:"20px"}}>
        To give everyone the ability to be heard,seen,and share their thoughts and experiences as they happen!
        </h6>
      </div>
       </div>

       <div className='row'>
      <div className='col'>
      <a href="#" class="dream">
        <img src="./image/dream1.jpg" height={"50px"} width={"50px"} style={{marginLeft:"280px",marginTop:"50px"}}/>
      </a>
       <h3 style={{marginLeft:"250px"}}><i>Our Dream</i></h3>
       
       <h6 style={{marginLeft:"50px", marginTop:"20px" }}>
        It is our compass when we're building the platform and developing new products and policies.We want to empower individuals and be a force for good in the world.
       </h6>
      </div>
      <div className='col'>
      <a href="#" class="goals">
        <img src="./image/goals1.jpeg" height={"50px"} width={"50px"} style={{marginLeft:"270px",marginTop:"50px"}}/>
      </a>
      <h3 style={{marginLeft:"250px"}}><i>Our Goals</i></h3>
    
      <h6 style={{marginLeft:"50px", marginTop:"20px"}}>To be improved and more inspiring every single day!</h6>
      </div>
       </div>

      </div>
      </div>
      </div>
      
    )
}
export default About

