import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { signin } from '../../service/Student'



function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // get the navigate function
  const navigate = useNavigate()


  const onLogin = async () => {
    if (email.length == 0) {
      toast.warn('please enter email')
    } else if (password.length == 0) {
      toast.warn('please enter password')
    } else {
      // call the singin api
      const result = await signin(email, password)

      // check if the result is successful
      if (result['status'] == 'success') {
        toast.success('Welcome')

        // get the admin details
        const { firstName, lastName, phone, token } = result['data']

        // cache the admin details in session storage
        sessionStorage['name'] = `${firstName} ${lastName}`
        sessionStorage['token'] = token
        sessionStorage['phone'] = phone
        // sessionStorage['email'] = email
        sessionStorage.setItem('email', email)

        // go to home screen
        navigate('/userDashboard')
      } else {
        toast.error(result['error'])
      }
    }
  }

  return (
   <body style={{backgroundImage:"../../images/User/logn.jpg",backgroundSize:"cover", backgroundPosition:"center" ,height:"400px"}}>
    
    <div >

      <div className='row' > 
        <div className='col' ></div>
        <div className='col'style={{backgroundColor:"white",height:"500px" ,marginTop:"70px"}}>
        <h2 className='header'>Welcome !!</h2>
        <h2 className='header'>Login</h2>
          <div className='mb-3'>
            <label htmlFor=''><b>Email</b></label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type='email' 
              className='form-control'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor=''><b>Password</b></label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              className='form-control'
            />
          </div>
          <div className='mb=3'>
            <label htmlFor=''><b>Role</b></label>
            <select className='form-control' >
              <option>Admin</option>
              <option>Instructor</option>
              <option>Student</option>
            </select>
            
          </div>
          <div className='mt-3'>
            <div>
             <b> Don't have an account? </b><Link to='/register'>Register here</Link>
            </div>
            <button onClick={onLogin} className='btn btn-success mt-3' ><Link to="/userDashboard">   </Link>
              Login
            </button>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </div>
   </body>
  )
}

export default Login
