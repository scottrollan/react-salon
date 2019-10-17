import React, { Component } from 'react';
import Cutting from './components/Cutting';
import Coloring from './components/Coloring';
import Smoothing from './components/Smoothing';
import './Services.css';


class Services extends Component {
   
    floatLeft = {
        float: 'left',
        margin: '0 5vw 10vw 5vw',        
    }
    render() {
    return(
        <div className='page hide buttons-wrapper' id="services" style={{ width: '100%', maxWidth: '900px' }}>
            <Cutting style={this.floatLeft}/>
            <Coloring style={this.floatLeft} />
            <Smoothing style={this.floatLeft} />

        </div>
    )
    }
}

export default Services;