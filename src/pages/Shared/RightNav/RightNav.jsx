import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h2 className="mt-4">Login With</h2>
      <Button className="mb-2" variant="outline-primary">
        <FaGoogle /> Login with google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub /> Login with Github
      </Button>

      <div>
        <h2 className="mt-4">Find Us On</h2>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebookF /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className="position-relative">
        <img src={bg} alt="" />
        <div className="text-center position-absolute top-0 text-white px-2 py-4">
            <h1 className="fw-bolder fs-1 mb-4 mt-4">Create an Amazing Newspaper</h1>
            <p className="fs-5 mb-4">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            <Button variant="danger">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
