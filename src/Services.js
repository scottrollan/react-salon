import React from 'react';
import Cutting from './components/Cutting';
import Coloring from './components/Coloring';
import Smoothing from './components/Smoothing';
import './Services.css';


const Services = props => {

    const floatLeft = {
        float: 'left',
        margin: '5vw'
    }

    return(
        <div className='page hide button-images' id="services" style={{ width: '100%' }}>
            <Cutting style={floatLeft}/>
            <Coloring style={floatLeft} />
            <Smoothing style={floatLeft} />

        </div>
    )
}

export default Services;