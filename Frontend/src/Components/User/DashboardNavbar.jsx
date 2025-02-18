import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import cartIcon from "../../images/User/shopping-cart_1014680.png"
import logo from "../../images/User/idea_18096067.png"

function DashboardNavbar() {
  // get navigate function
  const navigate = useNavigate()

  // get the item count from cart slice
  const count = useSelector((state) => state.cart.itemCount)

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
    <nav className='navbar navbar-expand-lg rounded' data-bs-theme='dark' style={{ backgroundColor: '#eca444' }}>
      <div className='container-fluid' >
        {/* Brand/Logo */}
        <a className='navbar-brand' href='#'>
        <img
              src={logo}
              alt='logo'
              style={{ width: '26px', height: '25px' }} // Adjust size and spacing
            />
         
        </a>

        {/* Nav Items */}
        <ul className='navbar-nav'>
          {/* Cart Link */}
          <img
              src={cartIcon}
              alt='Cart'
              style={{ width: '24px', height: '30px' }} // Adjust size and spacing
            />
          <li className='nav-item'  style={{marginRight:"20px"}}>
            <Link className='nav-link' to='/cart'>
               ({count})
            </Link>
          </li>

          {/* Logout Button */}
          <li className='nav-item'>
            <button onClick={onLogout} className='btn btn-link nav-link'>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default DashboardNavbar