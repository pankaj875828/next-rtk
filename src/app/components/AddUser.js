"use client";
import React, { useState } from "react";
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";

const AddUser = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleUser = () => {
    dispatch(addUser(name));
  };

  return (
    <div className="add-user">
      <h3>Add User</h3>
      <input
        type="text"
        name="add user"
        id="user"
        onChange={(e) => setName(e.target.value)}
        placeholder="Add New User"
        className="add-user-input"
      />
      <button onClick={handleUser} className="add-user-btn">
        Add User
      </button>
    </div>
  );
};

export default AddUser;
