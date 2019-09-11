import React from 'react';
import Cutting from './components/Cutting';
import Coloring from './components/Coloring';
import Smoothing from './components/Smoothing';
import './Services.css';


const Services = props => {

    const floatLeft = {
        float: 'left',
        margin: '0 5vw 5vw 5vw',        
    }

    return(
        <div className='page hide buttons-wrapper' id="services" style={{ width: '100%', maxWidth: '900px' }}>
            <Cutting style={floatLeft}/>
            <Coloring style={floatLeft} />
            <Smoothing style={floatLeft} />

        </div>
    )
}

export default Services;