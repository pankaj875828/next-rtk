"use client";
import { useSelector } from "react-redux";

const DisplayUser = () => {
  let userData = useSelector((data) => data.users);
  console.log(userData);
  return (
    <div className="display-user">
      <h3>Display User List</h3>
    </div>
  );
};

export default DisplayUser;
