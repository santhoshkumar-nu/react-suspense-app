import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  let navigate = useNavigate();
  const getUsersDetails = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUsers(data?.users);
    } catch (error) {
      console.log("Error ", error);
    }
  };

  useEffect(() => {
    getUsersDetails();
  }, []);

  const scrollPosition = sessionStorage.getItem("scrollPosition");
  if (scrollPosition) {
    setTimeout(() => {
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }, 0);
  }

  const handleClick = (id) => {
    navigate(`/users/${id}`);
    sessionStorage.setItem("scrollPosition", window.pageYOffset);
  };
  return (
    <table className="container">
      <thead>
        <tr>
          <th>No</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users?.map((user, _) => (
            <tr key={user?.id}>
              <td>{user?.id}</td>
              <td>{user?.firstName}</td>
              <td>{user?.lastName}</td>
              <td>{user?.email}</td>
              <td>
                <button onClick={() => handleClick(user?.id)}>details</button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Users;
