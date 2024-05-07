import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavrBar from "../components/NavrBar";
import Footer from "../components/Footer";
import TextOverlay from "../utils/TextOverlay";
import axios from "axios";
import { Modal } from "react-bootstrap";


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setAuthenticate] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const navigate = useNavigate();

  const authenticateUser = async (userEmail, userPassword) => {
    console.log('Authenticating:', userEmail, userPassword);
    const loginRequest  = {
      email : userEmail,
      password : userPassword
    }
    try {
      const response = await axios.post("http://localhost:8080/auth/login", loginRequest);
      console.log("Login successfull")
      const jwt = response.data.jwt;
      localStorage.setItem("access-token", jwt);
      setAuthenticate(true);
    } catch (error) {
      setAuthenticate(false);
      setShowErrorModal(true);
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    authenticateUser(email, password);

    if (isAuthenticated) {
      navigate('/admin');
    } else {
      console.error('Authentication failed!');
      setAuthenticate(false);
      setShowErrorModal(true);
    }
  };

  const handleCloseErrorModal = () => setShowErrorModal(false);

  return (
    <>
      <NavrBar />
      <TextOverlay
        text=""
        image="src/assets/images/login.PNG"
        color={{ color: "white" }}
      />
      <div className="container ">
        <div className="row">
          <div className="col-12 col-lg-6 mb-5 mx-auto">
            <h2 className="text-center">Please log into your account</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group m-2">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group m-2">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="col-12 text-center mt-5">
                <button type="submit" className="btn btn-primary w-100 fs-normal">
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Modal show={showErrorModal} onHide={handleCloseErrorModal} animation={false}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className="text-danger">Incorrect Email/Password</Modal.Body>
      </Modal>
      <Footer />
    </>
  );
}

export default Login;
