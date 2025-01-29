import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { signup } from '../service/Student'

function Register() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [phone, setPhone] = useState('')

  // get navigate function
  const navigate = useNavigate()

  const onSignup = async () => {
    if (firstName.length == 0) {
      toast.warn('Please enter first name')
    } else if (lastName.length == 0) {
      toast.warn('Please enter last name')
    } else if (email.length == 0) {
      toast.warn('Please enter email')
    } else if (phone.length == 0) {
      toast.warn('Please enter phone number')
    } else if (password.length == 0) {
      toast.warn('Please enter password')
    } else if (confirmPassword.length == 0) {
      toast.warn('Please confirm password')
    } else if (password != confirmPassword) {
      toast.warn('Password does not match')
    } else {
      const result = await signup(firstName, lastName, email, password, phone)
      if (result['status'] == 'success') {
        toast.success('Successfully registered a new admin')

        // go back
        navigate(-1)
      } else {
        toast.error(result['error'])
      }
    }
  }

  return (
    <body style={{backgroundImage:"url('/image/logn.jpg')",backgroundSize:"cover", backgroundPosition:"center",height:"100%"}}>
    
    <div>
     

      <div className='row'>
        <div className='col'></div>
        <div className='col'style={{backgroundColor:"white",marginTop:"20px"}}>
        <h2 className='header'>Register</h2>
          <div className='mb-3'>
            <label htmlFor=''><b>First Name</b></label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type='text'
              className='form-control'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor=''><b>Last Name</b></label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              type='text'
              className='form-control'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor=''><b>Email</b></label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              className='form-control'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor=''><b>Phone Number</b></label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              type='tel'
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
          <div className='mb-3'>
            <label htmlFor=''><b>Confirm Password</b></label>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type='password'
              className='form-control'
            />
          </div>

          <div className='mb-3'>
            <div>
             <b> Already have an account? </b><Link to='/login'>Signin here</Link>
            </div>
            <button onClick={onSignup} className='mt-3 btn btn-success'>
              Signup
            </button>
          </div>
          <b> Go to home </b><Link to='/home'>Go to home</Link>
        </div>
        <div className='col'></div>
      </div>
    </div>
   </body>
  )
}

export default Register
