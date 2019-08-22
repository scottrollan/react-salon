import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Photo from '../photos/coloring.jpg';

const Coloring = props => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
         <div className="serviceBtn" id="coloringBtn">
        	<div className="button-container" onClick={handleShow}>
       		  <p>coloring</p>
           		<img src={Photo} alt=''/>
            </div>
        </div>
 
        <Modal className="modal" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Color Services
            </Modal.Title>
          </Modal.Header>
          <Modal.Body><p><b>All-Over Color</b>acheives gray coverage or a complete color change with one color, applied to the entire head.</p>
              <p style={{ textAlign: 'right' }}><em>starts at $90</em></p>
              <hr></hr>
              <p><b>Partial Highlights</b>, whether applied by foiling or with balayage, are placed around the face for a brightening or framing effect.</p>
              <p style={{ textAlign: 'right' }}><em>starts at $120</em></p>
              <hr></hr>
              <p><b>Full Highlights</b> are like partial highlights but are placed throughout the top, crown and/or back of the head.</p>
              <p style={{ textAlign: 'right' }}><em>starts at $165</em></p>
              <hr></hr>
              <p><b>Ombre Highlights</b> give a gradient of color from darker to lighter, from root to ends. They are generally applied via balayage.</p>
              <p style={{ textAlign: 'right' }}><em>starts at $165</em></p>
            </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default Coloring;