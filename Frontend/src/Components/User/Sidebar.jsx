import { useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import imglogo from "../../images/User/idea_18096067.png";
import imguser from "../../images/User/user.png";

function Sidebar() {
  // get navigate function
  //   const navigate = useNavigate()

  const onLogout = () => {
    // cleat the session storage
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("phone");

    // go to login screen
    // navigate('/login')
  };

  return (
    // <div>
    <div
      className="container-fluid"
      style={{ backgroundColor: "", height: "70px", width: "100%" }}
    >
      
      <div></div>
      <div
        style={{
          height: "800px",
          width: "300px",
          backgroundColor: "#213555",
          marginTop: "20px",
        }}
      >
        <li className="nav-item">
          <a
            className="nav-link"
            style={{
              marginLeft: "50px",
              color: "#D8C4B6",
              marginTop: "30px",
            }}
            href="Courses"
          >
            <h4>Courses</h4>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            style={{
              marginLeft: "50px",
              color: "#D8C4B6",
              marginTop: "10px",
            }}
            href="MyCourses"
          >
            <h4>MyCourses</h4>
          </a>
        </li>
        
        <li className="nav-item">
          <a
            className="nav-link"
            style={{
              marginLeft: "50px",
              color: "#D8C4B6",
              marginTop: "10px",
            }}
            href="/Certificate"
          >
            <h4>Certificate</h4>
          </a>
          <link to="/login" />
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            style={{
              marginLeft: "50px",
              color: "#D8C4B6",
              marginTop: "10px",
            }}
            href="/DiscussionPage"
          >
            <h4>Discussion</h4>
          </a>
          <link to="/login" />
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            style={{
              marginLeft: "50px",
              color: "#D8C4B6",
              marginTop: "10px",
            }}
            href="/login"
          >
            <h4>LogOut</h4>
          </a>
          <link to="/login" />
        </li>
      </div>
    </div>
  );
}

export default Sidebar;
