import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavrBar";
import TextOverlay from "../utils/TextOverlay";
import { useEffect } from "react";
import locationLogo from "/assets/images/locations-logo.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaReply } from "react-icons/fa";

function LocationDetails() {
  const locations = [
    {
      id: "location1",
      name: "10317 Holly DR",
      description:
        `Welcome to our home in Snohomish, its cozy, and comfy. Relax and make yourself at home. 
          We have everything you need for a peaceful stay.
          We provide end of life service which includes:
          Palliative care services to manage pain and enhance quality of life.
          Support for residents and families during end-of-life transitions.
        `,
      location: "Everett",
      address: "10317 Holly Dr, Everett WA, 98204",
      pdn: "Available",
      image: "/assets/images/location-1.png",
      imagesgroup: [
        "/assets/images/location-1.png",
        "/assets/images/location-2.png",
        "/assets/images/location-1.png",
        "/assets/images/location-2.png",
        "/assets/images/location-1.png",
        "/assets/images/location-2.png",
      ],
    },
    {
      id: "location2",
      name: "2818 130th Pl SE",
      description:
        `Welcome to our home in Snohomish, its cozy, and comfy. Relax and make yourself at home. 
        We have everything you need for a peaceful stay.
        We provide end of life service which includes:
        Palliative care services to manage pain and enhance quality of life.
        Support for residents and families during end-of-life transitions.`,
      location: "Everett",
      address: "2818 130th Pl Se, Everett WA, 98208",
      pdn: "Not Available",
      image: "/assets/images/location-2.png",
      imagesgroup: [
        "/assets/images/location-1.png",
        "/assets/images/location-2.png",
        "/assets/images/location-1.png",
        "/assets/images/location-2.png",
        "/assets/images/location-1.png",
        "/assets/images/location-2.png",
      ],
    },
  ];

  let { locationId } = useParams();

  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    const location = locations.find((loc) => loc.id === locationId); // the location is being found by retrieving the id
    setLocationData(location);
  }, [locationId]);

  if (!locationData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar />
      <TextOverlay
        text={locationData.name}
        image={locationLogo}
        color={{ color: "white" }}
      />

      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <img src={locationData.image} style={{ maxWidth: "100%" }} />
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <p>{locationData.description}</p>
            <p className="mt-5">
              {" "}
              <strong>Location:</strong> {locationData.location}
            </p>
            <p>
              {" "}
              <strong>Address:</strong> {locationData.address}
            </p>
            <p>
              {" "}
              <strong>Private Duty Nursing:</strong> {locationData.pdn}
            </p>
          </div>
        </div>

        <div className="container my-4">
          <hr />
          <h2 className="text-center">
            <i>Images of our home </i>
          </h2>
          <hr />
          <div className="row">
            {locationData.imagesgroup.map((img, index) => (
              <div className="col-12 col-lg-4 mb-2" key={index}>
                <img src={img} style={{ maxWidth: "100%" }} />
              </div>
            ))}
          </div>
        </div>

        <div className="col-12 d-flex justify-content-end my-5 ">
          <Link to="/locations">
            <Button variant="primary">
              Back <FaReply />
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default LocationDetails;
