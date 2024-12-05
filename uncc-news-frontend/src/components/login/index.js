import {
  Alert,
  Button,
  Col,
  Form,
  Input,
  InputGroup,
  InputGroupText,
  Row,
  Spinner,
} from "reactstrap";
import React, { useState } from "react";
import "./index.css";
import { FaLock, FaUser } from "react-icons/fa";
import axios from "axios";

const apiCall = async ({ username, password }) => {
  try {
    const body = JSON.stringify({ username, password });
    console.log(username, password);
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      body,
      config
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="form-area d-flex justify-content-center align-items-center">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);
          const payload = {
            username,
            password,
          };
          const res = apiCall(payload);
          res.then((response) => {
            setLoading(false);
            console.log(response);
            if (response !== undefined && response.status === 200) {
              window.localStorage.setItem("token", response.data.token);
              window.location.reload();
            } else {
              setError(true);
              setTimeout(() => {
                setError(false);
              }, 3000);
            }
          });
        }}
      >
        <Row className="g-3 card card-shadow p-5">
          <Col md={12}>
            <h1>
              <b>Welcome!</b>
            </h1>
            <p>Please login into UNCC - News</p>
          </Col>
          <h3>Login</h3>
          <Col md={12}>
            <InputGroup>
              <InputGroupText>
                <FaUser />
              </InputGroupText>
              <Input
                bsSize="md"
                value={username}
                required
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                placeholder="Username"
                type="text"
              />
            </InputGroup>
          </Col>
          <Col md={12}>
            <InputGroup>
              <InputGroupText>
                <FaLock />
              </InputGroupText>
              <Input
                bsSize="md"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
                placeholder="Password"
                type="password"
              />
            </InputGroup>
          </Col>
          <Col>
            <Button block disabled={loading} color="success" type="submit">
              {loading ? <Spinner /> : "LOGIN"}
            </Button>
          </Col>
          {error ? (
            <Col>
              <Alert
                color="danger"
                isOpen={error}
                toggle={() => setError(false)}
              >
                Invalid credentials
              </Alert>
            </Col>
          ) : null}
        </Row>
      </Form>
    </div>
  );
};

export default Login;
