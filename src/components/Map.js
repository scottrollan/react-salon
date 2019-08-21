import React, { Component } from 'react';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';
import '../App.css';

class MyVerticallyCenteredModal extends Component {
    render() {
      return (
        <Modal
          className="modal"
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          style={{ color: "#3e3e3e", overflow: 'hidden' }}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              4505 Ashford Dunwoody Rd 30346
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <iframe 
                    id="map" 
                    title="myMap" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.618414695635!2d-84.33942735046408!3d33.92521923176827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5095c8cddd3ff%3A0x121c48daad81b8b1!2s4505+Ashford+Dunwoody+Rd+NE%2C+Dunwoody%2C+GA+30346!5e0!3m2!1sen!2sus!4v1562793980661!5m2!1sen!2sus" 
                    style={{ frameBorder: '0', border: "0"}} 
                    width='100%'
                    height='100%'
                    allowFullScreen
                ></iframe>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close Map</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }
  
  class Map extends Component {
    constructor(...args) {
      super(...args);
  
      this.state = { modalShow: false };
    }
  
    render() {
      let modalClose = () => this.setState({ modalShow: false });
  
      return (
        <ButtonToolbar style={{ width: '100%',  justifyContent: 'center', padding: '2vh 0' }}>
          <Button
            className="btn"
            onClick={() => this.setState({ modalShow: true })}
            style={{ width: "150px" }}
          >
            Open Map
          </Button>
  
          <MyVerticallyCenteredModal
            show={this.state.modalShow}
            onHide={modalClose}
          />
        </ButtonToolbar>
      );
    }
  }
  
  export default Map;
       