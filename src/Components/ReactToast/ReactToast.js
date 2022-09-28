import React, { useState } from 'react';
import './ReactToast.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const ReactToast = ({ position }) => {
  const [showA, setShowA] = useState(false);
  // const [position, setPosition] = useState('top-center');

  const toggleShowA = () => setShowA(!showA);
  return (
    <Row>
      <Col>
        <Button onClick={toggleShowA} className="btn-toast">
          Activity Completed
        </Button>
        <ToastContainer position={position}>
          <Toast
            show={showA}
            onClose={toggleShowA}
            delay={3000}
            autohide={true}
            className="toast"
          >
            <Toast.Header>
              <strong className="me-auto toast-header">
                Activity Completed
              </strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body className="toast-body">
              Congratulations! you have completed your task.
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </Col>
    </Row>
  );
};

export default ReactToast;
