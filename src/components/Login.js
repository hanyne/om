import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/userAuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, user } = useUserAuth();

  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="m-auto center vh-100 ">
      <div className="p-5 box bo">
        <h2 className="mb-3"> Omoma Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email adress"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <div className="d-flex">
              <Form.Control
                type={visible ? "text" : "password"}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span onClick={() => setVisible(!visible)} className="btn btn-red ml-2">
                {
                  visible ? <FaEyeSlash /> : <FaEye />
                }
              </span>
            </div>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit" className="btn btn-red">
              Log In
            </Button>
          </div>
          <div className="d-grid gap-2 mt-2">
            <p> if you don't have an account <Link to="/Register" className="mx-2"> Sign up</Link></p>
            
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
