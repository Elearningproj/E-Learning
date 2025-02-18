import { Link, useNavigate } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar";
import imgLogo from "../../images/User/idea_18096067.png";
import imgUser from "../../images/User/user.png";
import { useEffect, useState } from "react";

function UserDashboard() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Fetch user data from backend (assuming API endpoint is '/api/user')
    fetch("/api/user")
      .then((response) => response.json())
      .then((data) => setUserName(data.name))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  const onLogout = () => {
    sessionStorage.clear(); // Clear session
    navigate("/login"); // Redirect to login
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col p-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 mb-6">
          <img src={imgLogo} alt="Logo" className="w-10 h-10" />
          <h4 className="text-lg font-bold">Welcome!</h4>
        </div>
        
        {/* User Info */}
        <div className="flex items-center space-x-3 mb-6 border-b border-gray-700 pb-4">
          <img src={imgUser} alt="User" className="w-12 h-12 rounded-full" />
          <div>
            <h5 className="text-sm font-semibold">{userName}</h5>
            <p className="text-xs text-gray-400">Student</p>
          </div>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex-1">
          <ul className="space-y-4">
            <li>
              <Link to="/Courses" className="block text-lg hover:text-yellow-400">
                📚 Courses
              </Link>
            </li>
            <li>
              <Link to="/MyCourses" className="block text-lg hover:text-yellow-400">
                🎓 My Courses
              </Link>
            </li>
            <li>
              <Link to="/Cart" className="block text-lg hover:text-yellow-400">
                🛒 Cart
              </Link>
            </li>
            <li>
              <Link to="/Certificate" className="block text-lg hover:text-yellow-400">
                🏆 Certificate
              </Link>
            </li>
            <li>
              <Link to="/Discussion" className="block text-lg hover:text-yellow-400">
                💬 Discussion
              </Link>
            </li>
          </ul>
        </nav>

        {/* Logout Button */}
        <button
          onClick={onLogout}
          className="w-full mt-auto py-2 text-lg text-red-400 hover:text-red-600 border-t border-gray-700"
        >
          🚪 Log Out
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <DashboardNavbar />
        <div className="p-6">
          <h1 className="text-2xl font-bold">User Dashboard</h1>
          <p className="text-gray-600">Manage your courses, discussions, and certificates all in one place.</p>
        </div>
      </main>
    </div>
  );
}

export default UserDashboard;
