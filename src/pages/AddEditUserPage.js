import React, { useState, useEffect } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createUserStart, updateUserStart } from "../redux/actions/userAction";

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

export default function AddEditUserPage() {
  const [formValue, setFormValue] = useState(initialState);
  const { name, email, phone, address } = formValue;

  const [editMode, setEditMode] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { users } = useSelector((state) => state.users);
  useEffect(() => {
    if (id) {
      setEditMode(true);
      const singleUser = users.find((item) => item.id === Number(id));
      setFormValue({ ...singleUser });
    } else {
      setEditMode(false);
      setFormValue({ ...initialState });
    }
  }, [id, users]);

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name && email && phone && address) {
      if (!editMode) {
        dispatch(createUserStart(formValue));
        setTimeout(() => history.push("/"), 500);
      } else {
        dispatch(updateUserStart({ id, formValue }));
        setEditMode(false);
        setTimeout(() => history.push("/"), 500);
      }
    }
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <h1 className="text-center">{!editMode ? "Add User" : "Update User"}</h1>
      <Container>
        <Row>
          <Form validated={validated} onSubmit={handleSubmit} noValidate>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Name"
                onChange={onInputChange}
                value={name || ""}
                required
              />
              <Form.Control.Feedback type="invalid">
                Name is required!
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={onInputChange}
                value={email || ""}
                required
              />
              <Form.Control.Feedback type="invalid">
                Email is required!
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                onChange={onInputChange}
                placeholder="Enter Phone"
                value={phone || ""}
                required
              />
              <Form.Control.Feedback type="invalid">
                Phone is required!
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={address || ""}
                onChange={onInputChange}
                placeholder="Enter Address"
                required
              />
              <Form.Control.Feedback type="invalid">
                Address is required!
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              {!editMode ? "Add User" : "Update User"}
            </Button>
          </Form>
        </Row>
      </Container>
    </>
  );
}
