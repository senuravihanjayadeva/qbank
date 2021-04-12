import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import RegisterComponent from "../modules/RegisterPageModule/register.component";

export default function RegisterPageComponent() {
  let [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }

  const handleClose = () => {
    setShow(false);
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Register
      </Button>
      <div className="container">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <RegisterComponent />
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
