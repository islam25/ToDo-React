import React, { useState } from 'react';
import { Button , Modal} from 'react-bootstrap';
import authService from "../../../core/services/auth.service";

const LogoutModal = (props: any) => {
    const [show, setShow] = useState(true);
  
    const handleClose = () => {
      setShow(false)
      props.history.push('/');
    };
    
    const handleYes = () => {
        setShow(false)
        authService.logout();
        props.history.push('/');
        window.location.reload();
      };
  
    return (
        <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>LogOut</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Do you want to logout?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleYes}>Yes</Button>
            <Button variant="secondary" onClick={handleClose}>
              No
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default LogoutModal;