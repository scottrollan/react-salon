import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Photo from '../photos/smoothing.jpg';

const Smoothing = props => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <div className="serviceBtn" id="smoothingBtn">
        	<div className="button-container" onClick={handleShow}>
       		  <p>smoothing</p>
           		<img src={Photo} alt=''/>
            </div>
        </div>
  
        <Modal 
          dialogClassName="modal-90w"
          show={show} 
          onHide={handleClose}
          style={{ margin: '50px 0', zIndex: '9999', margin: '50px auto' }}>
          <Modal.Header closeButton>
            <Modal.Title>Smoothing</Modal.Title>
          </Modal.Header>
          <Modal.Body><p><b>Brazilian Blowout</b> is a customizable retexturizing treatment that smoothes frizz and softens curl.</p>
            <p style={{ textAlign: 'right' }}><em>starts at $240</em></p>
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

export default Smoothing;