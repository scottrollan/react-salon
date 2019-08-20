import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Photo from '../photos/cutting.jpg';

const Cutting = props => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <div className="serviceBtn">
        	<div className="button-container" onClick={handleShow}>
       		  <p>cutting</p>
           		<img src={Photo} alt=''/>
            </div>
        </div>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Haircuts</Modal.Title>
          </Modal.Header>
          <Modal.Body><b>Shampoo, Cut and Blow Dry</b>
            <p style={{ textAlign: 'right' }}><em> $65</em></p>
            <hr></hr>
            <b>Men's Short Haircut</b>
            <p style={{ textAlign: 'right' }}><em>$45</em></p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {/* <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button> */}
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default Cutting;