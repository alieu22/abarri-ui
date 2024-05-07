import React, { useState } from 'react';
import NavrBar from "../components/NavrBar";
import Footer from "../components/Footer";
import TextOverlay from "../utils/TextOverlay";
import { Card } from "react-bootstrap";
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Contact() {
    const [formState, setFormState] = useState({
        fullName: '',
        email: '',
        phone: '',
        reason: '',
    });

    const navigate = useNavigate();



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
       e.preventDefault();
       await axios.post(
        "http://localhost:5000/create", formState
       )
       .then(navigate("/thankyoupage")) // should navigate to the thank you page
       .catch(err => console.log(err))
    };

    return (
        <>
            <NavrBar />
            <TextOverlay
                text="Contact Us"
                image="/assets/images/contact-logo.png"
                color={{ color: "white" }}
            />

            <div className="container my-5">
                <div className="row justify-content-start">
                    <h2>Contact Info</h2>
                    <div className="col-12 col-md-12 col-lg-4">
                        <Card style={{ width: "22rem", height: "8rem" }}>
                            <Card.Body>
                                <Card.Title><FaPhone className="me-2" />Phone Number</Card.Title>
                                <Card.Text>
                                    +1-(206)-554- 9145
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: "22rem", height: "8rem" }} className="mt-5 mb-5">
                            <Card.Body>
                                <Card.Title><FaEnvelope className="me-2" />Email</Card.Title>
                                <Card.Text>
                                    fatou.jobe@abarriadultfamilyhome.com
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-md-12 col-lg-8">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group m-2">
                                <label htmlFor="exampleInputName">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputName"
                                    name="fullName"
                                    value={formState.fullName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group m-2">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group m-2">
                                <label htmlFor="exampleInputPhone">Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPhone"
                                    name="phone"
                                    value={formState.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group m-2">
                                <label htmlFor="exampleFormControlReason">Reason For Contact</label>
                                <textarea
                                    className="form-control"
                                    id="exampleFormControlReason"
                                    name="reason"
                                    rows="3"
                                    value={formState.reason}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <div className="col-12 text-center mt-5">
                                <button type="submit" className="btn btn-primary w-100">
                                    Submit
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Contact;
