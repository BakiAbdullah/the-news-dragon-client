import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from '../QZOne/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <h4 className='mt-4'>Login With</h4>
      <Button className="mb-2 px-5" variant="outline-primary">
        <FaGoogle /> Login with Google
      </Button>
      <Button className="px-5" variant="outline-secondary">
        {" "}
        <FaGithub /> Login with Github
      </Button>
      <div>
        <h4 className="mt-4">Find us on</h4>
        <ListGroup>
          <ListGroup.Item>
            {" "}
            <FaFacebook className="text-primary" /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter className="text-info" />
            Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram className="text-danger" />
            Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className="position-relative text-center w-100">
        <img className="w-100 mt-4" src={bg} alt="" />
        <div className="position-absolute top-0 px-5">
          <h4 className="text-light mt-5">Create an Amazing Newspaper</h4>
          <p className="text-light mt-5">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <Button variant="danger">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;