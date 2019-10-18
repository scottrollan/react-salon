import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Photo from '../photos/coloring.jpg';

class Coloring extends Component {

  state= {
    show: false,
    colorServices: [
      {
          service: 'All-Over Color',
          descr: ' acheives gray coverage or a complete color change with one color, applied to the entire head.',
          price: 'starts at $90',
          id: 'allovercolor'
      },
      {
          service: 'Partial Highlights',
          descr: ', whether applied by foiling or with balayage, are placed around the face for a brightening or framing effect.',
          price: 'start at $120',
          id: 'partialhighlights'
      },
      {
          service: 'Full Highlights',
          descr: ' are like partial highlights but are placed throughout the top, crown and/or back of the head.',
          price: 'start at $165',
          id: 'fullhighlights'
      },
      {
          service: 'Ombre Highlights',
          descr: ' give a gradient of color from darker to lighter, from root to ends. They are generally applied via balayage.',
          price: 'start at $165',
          id: 'ombrehighlights'
      }
  ]

  }

    handleClose = () => {
      this.setState({ show: false })
    };
    handleShow = () => {
      this.setState({ show: true })
    };
  
    render() {
    return (
      <React.Fragment>
         <div className="serviceBtn" id="coloringBtn">
        	<div className="button-container" onClick={this.handleShow}>
       		  <p>coloring</p>
           		<img src={Photo} alt=''/>
            </div>
        </div>
 
        <Modal 
          dialogClassName="modal-90w"
          show={this.state.show} 
          onHide={this.handleClose}
          style={{ margin: '50px 0', zIndex: '9999', maxHeight: '80vh' }}>
          <Modal.Header closeButton>
            <Modal.Title style={{ fontSize: '30px', color: '#c3122f'}}>Color Services
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {this.state.colorServices.map(d => (
                <div key={d.id}>
                <p><em>{d.service}</em>{d.descr}</p>
                <p style={{ textAlign: 'right' }}><em>{d.price}</em></p>
                <hr/>
                </div>
              ))}
            </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    )
              }
  }

export default Coloring;