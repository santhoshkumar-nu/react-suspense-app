import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  
  const getUser = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/users/${id}`);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getUser();
  }, [id]);

  const handleClick = () => {
    history.back();
  };

  return (
    <div>
      <button onClick={handleClick}>Go Back</button>
      <div className="wrapper">
        <table className="container">
          <tbody>
            <tr>
              <td>firstName:</td>
              <td>{user?.firstName}</td>
            </tr>
            <tr>
              <td>lastName:</td>
              <td>{user?.lastName}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{user?.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDetails;
