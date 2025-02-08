// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoImg from "../../images/User/idea_18096067.png"


function Footer(){
  return(
  // <section id='footer'>
  //    <footer>
  //     <div className="mt-4" style={{backgroundColor:"#D8C4B6", marginTop:"50px",height:"250px"}}>
  //     <div className="row"> 
  //       <div className="col" style={{marginTop:"20px",marginLeft:"60px"}}>
  //         <h5><b>iSchool</b></h5>
  //         <p>
  //           329,Sterling Center Camp,Pune<br></br>
  //           Maharashtra 411001,India
  //           </p>
  //       </div>
  //       <div className="col"  style={{marginTop:"20px"}}>
  //         <h5>Contact us</h5>
  //         <p>+9556569676 <br></br>
  //         Email- iSchool12.gmail.com <br></br>
  //         Mon-Sat 9am-3pm 
  //         </p>
  //       </div>
  //       <div className="col"  style={{marginTop:"20px"}}>
  //         <h5>Company</h5>
  //         <li>About us</li>
  //         <li>Careers</li>
  //         <li>Terms</li>
  //         <li>Privacy policy</li>
  //       </div>
  //       <div className="icons">
  //           <img src="../../images/User/Twiter.jpg" width={50} height={30} style={{marginLeft:"1000px",marginTop:"20px"}}/>
  //           <img src="./image/Twiter.jpg" width={50} height={30} style={{marginLeft:"20px",marginTop:"20px"}}/>
  //           <img src="./image/Facebook.png" width={50}  height={30} style={{marginLeft:"20px",marginTop:"20px"}}/>
  //           <img src="./image/Github.png" width={50}  height={30} style={{marginLeft:"20px",marginTop:"20px"}}/>
  //         </div>
         
  //      </div>
      
  //     </div>
      
  //       </footer>
  //     </section>
  
  



<footer class="bg-[#eca444] rounded-lg shadow-sm dark:bg-black-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={logoImg} class="h-8" alt="ELearn Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-[#4a3f3c]">ELearn</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Company</a>
                </li>
                <li>
                    <a href="/about" class="hover:underline me-4 md:me-6">About us</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Careers</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Terms</a>
                      </li>
                      <li>
                    <a href="#" class="hover:underline">Privacy policy</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© Since 2024. Contact us . +9556569676 .</span>
    </div>
</footer>



  )
}
export default Footer;