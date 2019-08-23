import React from 'react';
import Sola from './photos/sola.png';
import Map from './components/Map';
import './App.css';

const Home = props => {

    return(
        <div 
          className="page"  
          id="home">
            <div className="col-md-12 center-block" style={{ backgroundImage: 'linear-gradient(90deg, #343a40, #7c7c7c, #343a40)', padding: '12px', width: '100vw', margin: '0' }}>
                <p className='pageHeader'>Barry is now working at the Dunwoody location of</p>
                <img src={Sola} alt='' style={{ maxWidth: '86vw' }}/>
            </div>
            <Map />
        </div>
    )
}

export default Home;