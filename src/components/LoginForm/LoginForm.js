import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axiosConfig from "../../config/axiosConfig";
import "./LoginForm.css";

const LoginForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    //* Aca va el pedido axios a el back
    try {
      const userLogin = await axiosConfig.post("/login", user)
      console.log(userLogin)
    } catch (error) {
      console.log(error)
    }
  };

  console.log("USER", user);

  return (
    <div className="d-flex justify-content-center align-items-start box-login">
      <Form className="form-login shadow rounded d-flex flex-column justify-content-center" onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex flex-column align-items-start" controlId="formBasicEmail">
          <Form.Label>Correo electrónico:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa tu correo electrónico"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 d-flex flex-column align-items-start" controlId="formBasicPassword">
          <Form.Label>Contraseña: </Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </Form.Group>
        
          <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Recuerdame" />
          </Form.Group>
        
        <Button className="button" variant="primary" type="submit">
          Entrar
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
