import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsersStart, deleteUserStart } from "../redux/actions/userAction";
import { Container, Row, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HomePage() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(loadUsersStart());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      dispatch(deleteUserStart(id));
    }
  };

  if (loading) {
    return "Loading!";
  }

  if (error) {
    return error;
  }

  return (
    <Container>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.address}</td>
                  <td>
                    <Link
                      to={`/user-info/${item.id}`}
                      style={{ marginRight: "10px" }}
                    >
                      View
                    </Link>
                    <Link
                      to={`/edit-user/${item.id}`}
                      style={{ marginRight: "10px" }}
                    >
                      Edit
                    </Link>
                    <Button onClick={() => handleDelete(item.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}
