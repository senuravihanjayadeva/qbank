import React, { useState } from "react";
import { Modal, Button, Tabs, Tab } from "react-bootstrap";
import LoginStudent from "../modules/LoginModule/loginstudent";
import LoginTeacher from "../modules/LoginModule/loginteacher";

const LoginPage = () => {
  let [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }

  const handleClose = () => {
    setShow(false);
  };
  return (
    <div>
      <Button variant="success" onClick={handleShow}>
        Login
      </Button>
      <div className="container">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>LOGIN</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tabs defaultActiveKey="Student" id="uncontrolled-tab-example">
              <Tab eventKey="Student" title="Student">
                <LoginStudent />
              </Tab>
              <Tab eventKey="Teacher" title="Teacher">
                <LoginTeacher />
              </Tab>
            </Tabs>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default LoginPage;
