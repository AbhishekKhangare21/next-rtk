"use client";
// jab bhi ham redux use karte hai us component ko client component banana hota hai

import { useDispatch, useSelector } from "react-redux";

function DisplayUsers() {
  const userData = useSelector((state) => state.users);
  const dispatch = useDispatch();
  return (
    <div className="display-user">
      <h3>User List</h3>
      {userData.map((item) => {
        return (
          <div className="user-item" key={item.id}>
            <span> {item.name}</span>
            <button onClick={() => dispatch(removeUser)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayUsers;
