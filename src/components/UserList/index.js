import React from "react";
import "./index.scss";

export const UserList = ({ users }) => {
  return (
    <div className="users">
      <h1 className="users__title">Users online</h1>
      <ul className="users__list">
        {users.map((user, i) => (
          <li className="user" key={`user_${i}`}>
            <h5>{user}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
};
