import React from 'react';
import Sola from './photos/sola.png';
import Map from './components/Map';
import OmBanner from './photos/omBanner.jpg';
import NeumaBanner from './photos/neumaBanner.png';
import Blog from './components/Blog';
import './App.css';

const Home = props => {

    const textStyle = {
        textAlign: 'justify',
        textJustify: 'inter-word',
    }

    return(
        <div 
          className="page"  
          id="home">
            <img src={OmBanner} alt='' style={{ width: '100%' }} />
            <div className="col-md-12 center-block" style={{ backgroundImage: 'linear-gradient(90deg, #343a40, #7c7c7c, #343a40)', padding: '12px', width: '100vw', margin: '0', zIndex: '1 !important' }}>
                <p className='pageHeader'>Barry is now working at the Dunwoody location of</p>
                <img src={Sola} alt='' style={{ maxWidth: '86vw' }}/>
            </div>
            <p>4505 Ashford Dunwoody Rd 30346</p>
            <Map />
            <img src={NeumaBanner} alt='' style={{ width: '100%' }} />
            <Blog textStyle={textStyle}/>

        </div>
    )
}

export default Home;