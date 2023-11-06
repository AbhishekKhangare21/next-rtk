"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";

const Page = () => {
  const userData = useSelector((data) => data.users);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Remove User Page</h1>
      {userData.map((item) => (
        <div className="user-item">
          <span>{item.name}</span>
          <button onClick={() => dispatch(removeUser(item.id))}>
            Remove User
          </button>
        </div>
      ))}
    </div>
  );
};

export default Page;
