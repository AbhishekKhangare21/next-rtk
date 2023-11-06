"use client";
import { useState } from "react";
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";
import Link from "next/link";

function AddUsers() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const userDispatch = () => {
    dispatch(addUser(name));
  };

  return (
    <div className="add-user">
      <h3>User List</h3>
      <input
        type="text"
        className="add-user-input"
        placeholder="Add New User"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={userDispatch} className="add-user-btn ">
        Add User
      </button>
      <Link href="removeuser">Remove User</Link>
    </div>
  );
}

export default AddUsers;
