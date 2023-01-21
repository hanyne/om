import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/userAuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {

  const [emailr, setEmailr] = useState("");
  const [passwordr, setPasswordr] = useState("");
  const [error, setError] = useState("");
  const { signUp, user } = useUserAuth();

  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(emailr, passwordr);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="m-auto center vh-100 ">
      <div className="p-5 box bo">
        <h2 className="mb-3"> Omoma Register</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email adress"
              onChange={(e) => setEmailr(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <div className="d-flex">
              <Form.Control
                type={visible ? "text" : "password"}
                placeholder="Password"
                onChange={(e) => setPasswordr(e.target.value)}
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
            <p> if you already have an account <Link to="/login" className="mx-2"> Log In</Link></p>
            
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
