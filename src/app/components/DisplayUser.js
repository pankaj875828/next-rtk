"use client";
import { useSelector } from "react-redux";

const DisplayUser = () => {
  let userData = useSelector((data) => data.default.users);
  console.log(userData);
  return (
    <div className="display-user">
      <h3>Display User List</h3>
      {userData.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default DisplayUser;
