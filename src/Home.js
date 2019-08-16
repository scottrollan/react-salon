import React from 'react';
import Sola from './photos/sola.png';
import Map from './Map';

const Home = props => {
    return(
        <div className='page'>
            <div>
                <img src={Sola} alt=''/>
            </div>
            <Map />

        </div>
    )
}

export default Home;