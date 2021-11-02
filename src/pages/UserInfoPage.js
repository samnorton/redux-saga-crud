import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UserInfoPage() {
  const { users } = useSelector((state) => state.users);
  const { id } = useParams();
  const history = useHistory();
  const singleUser = users.find((item) => item.id === Number(id));

  return (
    <div style={{ marginTop: "200px" }}>
      <h1>User Info Page</h1>
      <p>User Id: {singleUser.id}</p>
      <p>Name: {singleUser.name}</p>
      <p>Email: {singleUser.email}</p>
      <p>Phone: {singleUser.phone}</p>
    </div>
  );
}
