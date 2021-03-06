import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Photo from "../photos/cutting.jpg";

const Cutting = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="serviceBtn" id="cuttingBtn">
      <div className="button-container" onClick={handleShow}>
        <p>cutting</p>
        <img src={Photo} alt="" />
      </div>

      <Modal
        dialogClassName="modal-90w"
        show={show}
        onHide={handleClose}
        style={{ zIndex: "9999", margin: "50px auto" }}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "30px", color: "#c3122f" }}>
            Haircuts
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>
            <b>Shampoo, Cut &amp; Blow Dry</b>
          </h5>
          <p style={{ textAlign: "right" }}>
            <em> $65</em>
          </p>
          <hr></hr>
          <h5>
            <b>Men's Short Haircut</b>
          </h5>
          <p style={{ textAlign: "right" }}>
            <em>$45</em>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cutting;
