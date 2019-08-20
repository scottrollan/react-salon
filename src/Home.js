import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Sola from './photos/sola.png';
import Map from './components/Map';
import './App.css';

const Home = props => {

    return(
        <div 
          className="page"  
          id="home">
            <Jumbotron style={{ background: '#d3d3d3', borderRadius: '10vw' }}>
            <div className="col-md-12 center-block">
                <p className='pageHeader'>Barry is now working at the Dunwoody location of</p>
                <img src={Sola} alt='' style={{ margin: '5vh 0' }}/>
                <Map />
            </div>
            </Jumbotron>
        </div>
    )
}

export default Home;