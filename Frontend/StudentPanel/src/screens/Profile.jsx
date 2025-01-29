import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



function Profile() {

  const navigate = useNavigate();
  const authToken = localStorage.getItem("token");
   const id = localStorage.getItem("id");
  const [userDetails, setUserDetails] = useState(null);
  


  useEffect(() => {
    if (!authToken) {
      navigate("/login");
    }

    async function fetchUserDetails() {
      try {
        const response = await fetch(
          `http://localhost:8080/api/users/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user details.");
        }
        const data = await response.json();
        console.log(data);
        setUserDetails(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchUserDetails();
  }, [authToken, navigate,id]);



  return (
    <div>
     
      <div className="profile-card" id="pbg" style={{ marginTop: '3%' }}>
         <h2 className="profile-name">{userDetails?.username}</h2>
        <div style={{ marginTop: '20px' }}>
          <h4>Email: </h4>
          <p className="profile-email">{userDetails?.email}</p>
        </div>
        <div>
          <h4>Phone Number: </h4>
          <p className="profile-phno">{userDetails?.phno}</p>
        </div>
        <div>
        <h4>Gender: </h4>
        <p className="profile-gender">{userDetails?.gender}</p>
      </div>
      <div>
        <h4>Date of Birth: </h4>
        <p className="profile-dob">{userDetails?.dob}</p>
      </div>
     
        <div>
          <h4>Learning courses: </h4>
          <p className="profile-phno">{userDetails?.learningCourses.length}</p>
        </div>
       
      </div>
     
    </div>
  );
}

export default Profile;
